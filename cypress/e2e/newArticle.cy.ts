import { should } from "chai"
import * as appSignIn from "../selectors/signInPage.sel"
import * as appHome from "../selectors/homePage.sel"
import * as feed from "../selectors/feedPage.sel"

describe('template spec', () => {
    let userData:any
    before(() => {
        cy.fixture("newUsers").then((data) => {
          userData = data
          return userData
        })
      })
  beforeEach("Open App", () => {
    // Command to visit home page each time a test starts
    cy.userLogin()
    cy.visit('/')
  });
  
  it('Should display Feed Page when logged in', () => {
    feed.checkIfUserIsLogged(userData.user.username)
  })

})