module.exports = {
    //Locators
    loggedUser: ':nth-child(4) > .nav-link',

    //Functions

    checkIfUserIsLogged(userName){
        cy.get(this.loggedUser).should('be.visible').should('contains.text',userName)
    },
}
