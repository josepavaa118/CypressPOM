module.exports = {
    //Locators
    loggedUser: ':nth-child(4) > .nav-link',
    newArticleLink: 'New Article',
    //Functions

    checkIfUserIsLogged(userName){
        cy.get(this.loggedUser).should('be.visible').should('contains.text',userName)
    },

    clickOnNewArticle(){
        cy.contains(this.newArticleLink).click()
    },
}
