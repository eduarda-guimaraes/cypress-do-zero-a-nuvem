Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Eduarda')
    cy.get('#lastName').type('Guimarães')
    cy.get('#email').type('aeduardaguimaraes@gmail.com') 
    cy.get('#open-text-area').type('teste')

    cy.get('button[type="submit"]').as('submitButton').should('be.visible').click()
})