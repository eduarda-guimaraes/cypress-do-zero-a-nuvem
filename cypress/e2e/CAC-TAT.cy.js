describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT') // eq = be.equal
  })
  
  it('testa o título', () => {
      cy.get('h1[id="title"]').as('titleName')
      .should('be.visible')
      cy.get('@titleName').should('have.text', 'CAC TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    // variable with long text
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)

    // name and lastname
    cy.get('input[id="firstName"]').as('firstName') // input[id="firstName"] = #firstName
    .type('Eduarda')
    cy.get('@firstName').should('have.value', 'Eduarda')
    .should('be.visible')
    cy.get('input[id="lastName"]').as('lastName') // input[id="lastName"] = #lastName
    .type('Guimarães')
    cy.get('@lastName').should('have.value', 'Guimarães')
    .should('be.visible')

    // email
    cy.get('input[id="email"]').as('email').type('aeduardaguimaraes@gmail.com') // input[id="email"] = #email
    cy.get('@email').should('have.value', 'aeduardaguimaraes@gmail.com').should('be.visible')

    // how can we help you?
    cy.get('textarea[id="open-text-area"]').as('feedback') // textarea[id="open-text-area"] = #open-text-area
    .type(longText, { delay: 0 }) // delay: 0 = without delay
    cy.get('@feedback').should('have.value', longText)
    .should('be.visible')

    // button submit
    cy.get('button[type="submit"]').as('submitButton').should('be.visible').click()
    cy.get('span[class="success"]').as('successMessage').should('be.visible')

  })

} )