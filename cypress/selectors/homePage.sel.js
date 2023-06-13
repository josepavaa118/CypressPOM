module.exports = {
    //Locators
    homePageHeader: '.banner > .container > .logo-font',
    signInLink: '[show-authed="false"] > :nth-child(2) > .nav-link',
    globalFeed:'.feed-toggle > .nav > :nth-child(2) > .nav-link',

    //Functions
    printStuff(){
        cy.log("test")
    },

    checkIfHomePage(element){
        cy.get(element).should('be.visible').should('have.text','conduit')
    },
}