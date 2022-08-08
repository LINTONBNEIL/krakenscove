describe('GameDetails', () => {
  beforeEach('A user should see the details page', () => {
    cy.intercept("GET", 'https://www.cheapshark.com/api/1.0/deals?id=3A8lwJWagRYwWfqkaoWf43pARHhcd4rS5Ekne7mVNyM%3D', {fixture:'gamedetails.json'})
    cy.visit('http://localhost:3000/GameDetails/3A8lwJWagRYwWfqkaoWf43pARHhcd4rS5Ekne7mVNyM%3D')
  })

  it('Should display the img of the video game to the user', () => {
    cy.get('.Detail-Poster').should('be.visible')
  })

  it('Should display the title of the video game to the user', () => {
    cy.get(".Detail-Title").contains('Unrailed!')
  })

  it('Should display the retail price to the user', () => {
    cy.get('h3').eq(0).contains('$19.99')
  })

  it('Should display the sale price to the user', () => {
    cy.get('h3').eq(1).contains('$0.00')
  })

  it('Should have a button which favorites a card to the wishlist', () => {
    cy.intercept('GET', 'https://www.cheapshark.com/api/1.0/games?id=204790', {fixture: 'selectedGame.json'})
    cy.get('.Detail-Favorites').click()

  })
})
