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

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('input[id="email"]').type('emailerrado')
    cy.get('button[type="submit"]').should('be.visible').click()
    cy.get('span[class="error"]').as('errorMessage').should('be.visible')
  })

  it('valor não-numérico deve continuar vazio no campo de telefone', () => {
    cy.get('input[id="phone"]').as('phone').type('abcdefghijk', {delay: 200})
    .should('have.value', '', {delay: 200})
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('input[id="firstName"]').as('firstName').type('Eduarda')
    cy.get('input[id="lastName"]').as('lastName').type('Guimarães')
    cy.get('#open-text-area').type('teste')

    cy.get('#phone-checkbox').check()
    cy.get('button[type="submit"]').should('be.visible').click()
    cy.get('span.error').as('errorMessage').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    // name and lastname
    cy.get('#firstName').type('Eduarda').should('have.value', 'Eduarda')
    .clear().should('have.value', '')
    cy.get('#lastName').type('Guimarães').should('have.value', 'Guimarães')
    .clear().should('have.value', '')

    // email
    cy.get('#email').type('aeduardaguimaraes@gmail.com')
    .should('have.value', 'aeduardaguimaraes@gmail.com')
    .clear().should('have.value', '')

    // phone
    cy.get('#phone').type(999999999).should('have.value', '999999999')
    .clear().should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('button[type="submit"]').should('be.visible').click()
    cy.get('span.error').should('be.visible')
  })

} )