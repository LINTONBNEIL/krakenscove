describe('Search', () => {
  beforeEach('Should show the user the search/browse page', () => {
    cy.intercept("GET", 'https://www.cheapshark.com/api/1.0/stores', {fixture: 'stores.json'})
    cy.intercept("GET", "https://www.cheapshark.com/api/1.0/deals?", {fixture: "deals.json"})
    cy.visit('http://localhost:3000/Search')
  })

  it('Should show the title and icon at the top of the screen', () => {
    cy.get('.Header').within(() => {
      cy.get('.Title').should('be.visible').should('contain', 'Krakens Cove')
      cy.get('.Web-Icon').should('be.visible').should('contain', 'ICON')
    })
  })

  it('Should show the user the navbar with three button links', () => {
    cy.get('.Nav-Container').within(() => {
      cy.get('button').eq(0).contains('HOME').click()
      cy.get('button').eq(1).contains('SEARCH').click()
      cy.go('back')
      cy.get('button').eq(2).contains('WISHLIST').click()
      cy.go('back')
    })
  })

  it('Should show the user a container which holds the form and a list of games', () => {
    cy.get('.Search-Results').children().should('be.visible')
  })

  it('Should show the user in the games, a games img/title/price/rating/sellers(price-matching)', () => {
    cy.get('.Game-Card').eq(1).within(() => {
      cy.get('.Game-Img').should('be.visible')
      cy.get('.Game-Title').contains('Unrailed!').should('be.visible')
      cy.get('.Savings').contains('100%').should('be.visible')
      cy.get('.normalPrice').contains('$19.99').should('be.visible')
      cy.get('.salePrice').contains('$0.00').should('be.visible')
    })
  })

  it('Should have a search by title option', () => {
    cy.intercept("GET", "http://localhost:3000/Search?title=Unrailed", {fixture: 'titleslist.json'})
      cy.get('input').type('Unrailed')
      cy.get('form').submit()
  })

  it('Should have a form that holds several possible options to narrow search', () => {
    cy.intercept('GET', 'https://www.cheapshark.com/api/1.0/games?title=Unrailed&storeID=1&sortBy=Deal+Rating', {fixture: 'selectedGame.json'})
    cy.intercept("GET", "http://localhost:3000/Search?title=Unrailed", {fixture: 'titleslist.json'})
      cy.get('input').type('Unrailed')
      cy.get('select[name="sortStore"]').select(1).should('have.value', 'storeID=1')
      cy.get('select[name="sortRelevence"]').select(1).should('have.value', 'sortBy=Deal Rating')
      cy.get('form').submit()
      cy.go('back')
  })


  it('Should have a button at the button which render a new page of games or extends the page', () => {
    cy.intercept("GET", 'https://www.cheapshark.com/api/1.0/deals?id=3A8lwJWagRYwWfqkaoWf43pARHhcd4rS5Ekne7mVNyM%3D', {fixture:'gamedetails.json'})
    cy.get('.Game-Card').eq(1).click()
  })
})
