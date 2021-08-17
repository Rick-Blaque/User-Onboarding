describe("user onbording app", () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })
    
    const nameInput = () => cy.get("#name-input")
    const emailInput = () => cy.get("#email-input")
    const passwordInput = () => cy.get("#password-input")
    const service = () => cy.get('input[name="service"]')
    const form = () => cy.get('form')

    it('how each component should work', () => {
        nameInput().should('exist')
        service().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
    })

    it('test that we can type inside of inputs', () => {
        nameInput()
        .should('have.value', '')
        .type("working")
        .should('have.value', 'working')
        emailInput()
        .should('have.value', '')
        .type("working")
        .should('have.value', 'working')
        passwordInput()
        .should('have.value', '')
        .type("working")
        .should('have.value', 'working')
        
        
    })

    it('check box can be checked', () => {
        service()
        .check({ force: true })
        .should('be.checked') 
    })
    it('check that the form can submit', () => {
        form()
        .submit()
    })
})