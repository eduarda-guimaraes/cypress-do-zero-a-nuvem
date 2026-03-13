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
    .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius. Sed at ligula a enim efficitur efficitur. Donec ac odio id nisl convallis tincidunt. In hac habitasse platea dictumst. Curabitur ut felis sed enim efficitur efficitur. Donec ac odio id nisl convallis tincidunt. In hac habitasse platea dictumst. Curabitur ut felis sed enim efficitur efficitur.')
    cy.get('@feedback').should('have.value', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius. Sed at ligula a enim efficitur efficitur. Donec ac odio id nisl convallis tincidunt. In hac habitasse platea dictumst. Curabitur ut felis sed enim efficitur efficitur. Donec ac odio id nisl convallis tincidunt. In hac habitasse platea dictumst. Curabitur ut felis sed enim efficitur efficitur.')
    .should('be.visible')

    // button submit
    cy.get('button[type="submit"]').as('submitButton').should('be.visible').click()
    cy.get('span[class="success"]').as('successMessage').should('be.visible')

  })

} )