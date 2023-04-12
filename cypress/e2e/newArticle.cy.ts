import { should } from "chai"
import * as appSignIn from "../selectors/signInPage.sel"
import * as appHome from "../selectors/homePage.sel"
import * as feed from "../selectors/feedPage.sel"
import * as article from "../selectors/articlePage.sel"

describe('template spec', () => {
    let userData:any
    let uiTexts: any
    let articleData:any
    before(() => {
        cy.fixture("newUsers").then((data) => {
          userData = data
          return userData
        })

        cy.fixture("uiTexts").then((data) => {
          uiTexts = data
          return uiTexts
        })

        cy.fixture("article").then((data) => {
          articleData = data
          return articleData
        })
      })
  beforeEach("Open App", () => {
    // Command to visit home page each time a test starts
    cy.userLogin()
    cy.visit('/')
  })
  
  it('Should check if user is logged in', () => {
    //feed.checkIfUserIsLogged(userData.username)
    cy.get(feed.loggedUser).should('be.visible').should('contains.text',userData.username)
  })

  it ('Should open New Article view', () => {
    //feed.clickOnNewArticle()
    cy.contains(feed.newArticleLink).click()
    cy.get('.btn').should('be.visible').should('contains.text',uiTexts.publishBtn)
  })

  it ('Should not create a new Article when title is empty', () => {
    //feed.clickOnNewArticle()
    cy.contains(feed.newArticleLink).click()
    cy.get(article.description).type(articleData.description)
    cy.get(article.body).type(articleData.body)
    cy.get(article.tags).type(articleData.tags)
    cy.contains(article.button).click()
    cy.get(article.titleErrorMsg).should('be.visible').should('contains.text',articleData.errorMsg)

    
  })

  it ('Should create a new Article', () => {
    //feed.clickOnNewArticle()
    cy.contains(feed.newArticleLink).click()
    cy.get(article.title).type(articleData.title)
    cy.get(article.description).type(articleData.description)
    cy.get(article.body).type(articleData.body)
    cy.get(article.tags).type(articleData.tags)
    cy.contains(article.button).click()
    cy.get('h1.ng-binding').should('be.visible').should('contains.text',articleData.title)

    
  })

  after("delete Article", () => {
    // Command to visit home page each time a test starts
    cy.deleteCreatedArticle()
  })

})