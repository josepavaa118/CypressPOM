import * as feed from "../../selectors/feedPage.sel"
import * as article from "../../selectors/articlePage.sel"

describe('template spec', () => {
    let userData:any
    let uiTexts: any
    let articleData:any

    before(() => { //This code reads and stores the fixture/json file contents into a variable for test usage
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

  beforeEach("Open App", () => {// Here the API user login will be executed and also home page will be loaded
    cy.userLogin()
    cy.visit('/')
  })
  //Tests Section with their respective asserts
  it('Should check if user is logged in', () => {
    cy.get(feed.loggedUser).should('be.visible').and('contains.text',userData.username)
  })

  it ('Should open New Article view', () => {
    cy.contains(feed.newArticleLink).click()
    cy.get('.btn').should('be.visible').and('contains.text',uiTexts.publishBtn)
  })

  it ('Should not create a new Article when title is empty', () => {
    cy.contains(feed.newArticleLink).click()
    cy.get(article.description).type(articleData.description)
    cy.get(article.body).type(articleData.body)
    cy.get(article.tags).type(articleData.tags)
    cy.contains(article.button).click()
    cy.get(article.titleErrorMsg).should('be.visible').and('contains.text',articleData.errorMsg) 
  })

  it ('Should create a new Article', () => {
    cy.contains(feed.newArticleLink).click()
    cy.get(article.title).type(articleData.title)
    cy.get(article.description).type(articleData.description)
    cy.get(article.body).type(articleData.body)
    cy.get(article.tags).type(articleData.tags)
    cy.contains(article.button).click()
    cy.get('h1.ng-binding').should('be.visible').should('contains.text',articleData.title)
  })

  after("delete Article", () => {//After all test execution is completed, this cmd will be executed to delete the article created recently
    cy.deleteCreatedArticle()
  })

})