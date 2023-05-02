 import * as login from "../selectors/loginPage.sel"
 import * as feed from "../selectors/feedPage.sel"

describe('Login Tests using UI', () => {//The fixture files loaded here are for user credentials and UI Labels
    let userData:any
    let uiTexts: any
    before(() => {
        cy.fixture("newUsers").then((data) => {
          userData = data
          return userData
        })
        cy.fixture("uiTexts").then((data) => {
          uiTexts = data
          return uiTexts
        })
      })
  beforeEach("Open App", () => {//Opens login screen
    cy.visit('#/login')
  })
  ///Test Case Section
  it('Should check if user is on Login Page', () => {
    cy.get(login.pageHeader).should('be.visible').should('contains.text',uiTexts.signInPageHeader)
  })
  
  it('Should check error message displayed when no password is given', () => {
    cy.get(login.userField).should('be.visible').type('some@email.com')
    cy.get(login.submitBtn).should('be.visible').click()
    cy.get(login.errorMsg).should('be.visible').should('contains.text',uiTexts.pwdError)

  })

  it('Should check error message displayed when no email is given', () => {
    cy.get(login.passwordField).should('be.visible').type('somePassword')
    cy.get(login.submitBtn).should('be.visible').click()
    cy.get(login.errorMsg).should('be.visible').should('contains.text',uiTexts.emailError)

  })

  it('Should login successfully when using valid credentials', () => {
    cy.get(login.userField).should('be.visible').type(userData.email)
    cy.get(login.passwordField).should('be.visible').type(userData.password)
    cy.get(login.submitBtn).should('be.visible').click()
    cy.get(feed.loggedUser).should('be.visible').should('contains.text',userData.username)
  })

  it('Should redirect to Sign In Page when clicking Sign In Link', () => {
    cy.get(login.signUpLink).should('be.visible').should('contains.text',uiTexts.signInLink).click()
    cy.get(login.pageHeader).should('be.visible').should('contains.text',uiTexts.signUpPageHeader)
  })
}) 