declare namespace Cypress{
    interface chainable{
        /**
         * @description This cmd allows user logins directly from API, returns a set localstorage cookie in test browser
         * @example cy.userLogin()
         */
        userLogin():chainable<Element>
        


        /**
         * @description This cmd mocks the GET /tags response from API to a specific set/amount of tags
         * @example cy.loadCustomTags()
         */
        loadCustomTags():Chainable<Element>

        /**
         * @description This cmd mocks the GET /tags response from API in order to show a specific article list according to test needs
         * @example cy.loadCustomArticleList()
         */
        loadCustomArticleList():Chainable<Element>
        
        /**
         * @description This cmd allows the user to click on a favorite icon of any article to set it as Favorite
         * @example cy.deleteCreatedArticle()
         */
        setArticleAsFavorite():Chainable<Element>

         /**
         * @description Simply used to visit the home page
         * @example cy.openHomePage()
         */
         openHomePage():Chainable<Element>
    }
}