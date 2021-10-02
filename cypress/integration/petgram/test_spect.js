describe('Petgram', () => {
  it('para ver si la app funciona', () => {
    cy.visit('/')
  })

  it('navegamos a una categoria y vemos fotos', () => {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('si podemos navegar con la navbar a la home', () => {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('eq', Cypress.config().baseUrl)
  })

  it('los usuarios no registrados ven el formulario de registro e inicio de sessión al ir a favs', () => {
    let urlRedirects = []
    cy.visit('/favs')
    cy.on('url:changed', (url) => {
      urlRedirects.push(url)
    })
    cy.get('form').should('have.length', 2)
  })
})
