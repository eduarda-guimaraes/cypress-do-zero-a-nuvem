describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT') // eq = be.equal
  })
  
  it('testa o título', () => {
      cy.get('h1[id="title"]').as('titleName').should('be.visible')
      cy.get('@titleName').should('have.text', 'CAC TAT')
  })

} )