declare namespace Cypress{
    interface chainable{
        
        /**
         * @description This cmd deletes the UI-created article from API
         * @example cy.deleteCreatedArticle()
         */
                deleteCreatedArticle():Chainable<Element>
        
    }}