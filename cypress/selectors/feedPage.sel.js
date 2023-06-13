module.exports = {
    //Locators
    loggedUser: ':nth-child(4) > .nav-link',
    newArticleLink: 'New Article',
    feedLink: '.feed-toggle > .nav > :nth-child(2) > .nav-link',
    author:'nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > .info > .author',
    articleTitle:':nth-child(1) > .article-preview > .preview-link > h1.ng-binding',
    articleTags: ':nth-child(1) > .article-preview > .preview-link > .tag-list',
    articleFavorites: ':nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > .pull-xs-right > .btn',

    //Functions

    checkIfUserIsLogged(userName){
        cy.get(this.loggedUser).should('be.visible').should('contains.text',userName)
    },

    clickOnNewArticle(){
        cy.contains(this.newArticleLink).click()
    },
}
