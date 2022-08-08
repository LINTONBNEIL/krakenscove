describe('HomePage', () => {
  beforeEach('A user should see the homepage', () => {
    cy.intercept('GET', 'https://www.cheapshark.com/api/1.0/stores', {fixture: 'stores.json'})
    cy.visit('http://localhost:3000/')
  })

  it('Should have a title and an icon', () => {
    cy.get('.Header').within(() => {
      cy.get('.Title').should('contain', "Krakens Cove")
      cy.get('.Web-Icon').should('contain', "ICON")
    })
  })

  it('Should have a navbar with three links to different pages of the website, and return to the homepage', () => {
    cy.get('.Nav-Container').within(() => {
      cy.get('button').eq(0).contains('HOME').click()
      cy.get('button').eq(1).contains('SEARCH').click()
      cy.go('back')
      cy.get('button').eq(2).contains('WISHLIST').click()
      cy.go('back')
    })
  })

  it('Should display the images of stores that are followed', () => {
    cy.get('.Stores-Container').within(() => {
      cy.get('.Home-Store-Container').should('contain', 'Steam').should('be.visible')
      cy.get('.Home-Logo').should('be.visible')
    })
  })

  it('Should have a welcoming message', () => {
    cy.get('.Home > h2').should('be.visible').should('contain', 'Some Cool Stuff!')
  })
})
