declare namespace Cypress{
    interface Chainable{
        
        /**
         * @deleteCreatedArticle
         * @description This cmd deletes the UI-created article from API
         * @example cy.deleteCreatedArticle()
         */
        deleteCreatedArticle():Chainable<Element>
        /**
         * @userLogin
         * @description This cmd allows user logins directly from API, returns a set localstorage cookie in test browser
         * @example cy.userLogin()
         */
        userLogin():Chainable<Element>
        
        
    }
}
