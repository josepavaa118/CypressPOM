import { should } from "chai"
import * as appSignIn from "../selectors/signInPage.sel"
import * as appHome from "../selectors/homePage.sel"

describe('template spec', () => {
  let uiTexts: any
  before(() => {
    cy.fixture("uiTexts").then((data) => {
      uiTexts = data
      return uiTexts
    })
  })
  beforeEach("Open App", () => {
    // Command to visit home page each time a test starts
    cy.openHomePage()
  });
  
  it('Should display Home Page', () => {
    //appHome.checkIfHomePage(appHome.homePageHeader)
    cy.get(appHome.homePageHeader).should('be.visible').should('have.text',uiTexts.homePageHeader)
  })
  
  it('Should redirect to Sign In Page', () => {
    cy.get(appHome.signInLink ).click()
    cy.get(appSignIn.pageHeader).should('be.visible').should('have.text',uiTexts.signInPageHeader)

  })
})
