beforeEach(()=>{
  cy.viewport(1000,600)
})
describe('Register & Login ', () => {

  it('Create an account', () => {
    cy.visit('/register')
     cy.get('#identifier').type('123658')
     cy.get('#fullName').type('yyyy',{force:true})
     cy.get('#lastName').type('yyyyy')
     cy.get('#email').type('yyyy@gmail.com')
     cy.get('#password').type('yyy123456')
    cy.wait(300)
    cy.get("#submit-btn").click()
    cy.wait(300)
     cy.url().should('contain','/')
  })
  it('Authentification', () => {
    cy.visit('/')
    cy.wait(300)
    cy.get('#email').type('yyyy@gmail.com')
    cy.wait(300)
    cy.get('#password').type('yyy123456')
    cy.wait(300)
    cy.get("#submit-btn").click()
    cy.url().should('contain','/dashboard')
    cy.wait(300)
    cy.contains('123658')
  })
})
describe('Dashboard ', () => {
  it('Visit dashboard', () => {
    cy.visit('/dashboard')
    cy.wait(300)
    cy.title().should('equal', 'Application')
    cy.get('tr').should('contain', 'First Name')
    cy.wait(300)
    cy.get('tr').should('contain', 'Last Name')
    cy.wait(300)

  })

  it('Consult the time sheet of a user', () => {
    cy.visit('/dashboard')
    cy.wait(300)
    cy.get('#123658').click()
    cy.wait(300)
    cy.url().should('contain','/timesheet')
    cy.get('select>option').eq(2).should('contain','2020')
    cy.get('select').select(2,{force: true})
    cy.wait(300)
    cy.get('#password').type("yyy123456")
    cy.wait(300)
    cy.get('.btn').click()
    cy.wait(500)

  })
})
describe('Logout ', () => {
  it('Visit dashboard & logout', () => {
    cy.visit('/dashboard')
    cy.wait(300)
    cy.title().should('equal', 'Application')
    cy.get('#logout').click()
    cy.wait(300)
    cy.url().should('contain','/')
    cy.wait(300)

  })

})
