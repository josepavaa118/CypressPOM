import * as feed from "../../selectors/feedPage.sel"
import * as appHome from "../../selectors/homePage.sel"
describe("API Test Cases for user creation", () => {
    const apiUrl = Cypress.env('apiUrl')
    let userData:any
     before(() => {//Loads user data for API SignUp
         cy.fixture("newUsers").then((data) => {
           userData = data
           return userData
         })
       })
    beforeEach("Open App", () => {// Here the API user login will be executed and also home page will be loaded
        cy.userLogin()
        cy.openHomePage()
        cy.loadCustomArticleList()
        cy.get(appHome.globalFeed).should('be.visible').click()
      })
      
      it('Should check if article related objects are displayed', () => {
        cy.get(feed.articleTitle).should('be.visible').and('contains.text','Mock')
      })

      it('Should check if article is set as favorite', () => {
        cy.get(feed.articleFavorites).should('be.visible').and('contains.text','1').click()
        cy.setArticleAsFavorite()
        cy.get(feed.articleFavorites).should('contains.text','2')
      })

      it('Should uncheck an article from favorites', () => {
        cy.get(feed.articleFavorites).should('be.visible').and('contains.text','1').click()
        cy.setArticleAsFavorite()
        cy.get(feed.articleFavorites).should('contains.text','2') .click()
        cy.fixture('articleList.json').then(file=>{
          const articleLink=file.articles[0].slug
          file.articles[0].favoritesCount=1 
          cy.intercept('DELETE',Cypress.env('apiUrl')+'/articles/'+articleLink+'/favorite',file)
        })
        cy.get(feed.articleFavorites).should('contains.text','1')
      })
})