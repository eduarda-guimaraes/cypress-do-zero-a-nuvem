Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Eduarda')
    cy.get('#lastName').type('Guimarães')
    cy.get('#email').type('aeduardaguimaraes@gmail.com') 
    cy.get('#open-text-area').type('teste')

    cy.get('button[type="submit"]').as('submitButton').should('be.visible').click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmittwo', (data = {
    firstName: 'Eduarda',
    lastName: 'Guimarães',
    email: 'aeduardaguimaraes@gmail.com',
    openTextArea: 'teste'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.openTextArea)

    cy.get('button[type="submit"]').as('submitButton').should('be.visible').click()
})