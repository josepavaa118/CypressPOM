// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("openHomePage", () => { // This cmd is used to open the home page from the tests
  cy.visit("/")
})

Cypress.Commands.add("userLogin", () => { // This cmd allows user logins directly from API, returns a set localstorage cookie in test browser
  cy.request({ 
    method:"POST",
    url: Cypress.env('apiUrl')+'/users/login',
    headers:{
        'Content-Type': 'application/json'
    },
    body:{
        "user":{
        "email": Cypress.env('APIemail'),
        "password": Cypress.env('APIpassword')
    }    
    }
}).then((response) => { 
    window.localStorage.setItem('jwtToken', response.body.user.token)
  })
})

  Cypress.Commands.add("deleteCreatedArticle", () => { // This cmd deletes the UI-created article from API
    cy.request({ 
      method:"DELETE",
      url: Cypress.env('apiUrl')+'/articles/'+Cypress.env('ArticleSlug'),
      headers:{
        'Authorization': 'Token '+window.localStorage.getItem('jwtToken')
    },  
    })
  })

Cypress.Commands.add("loadCustomTags", () => { // This cmd mocks the GET /tags response from API to a specific set/amount of tags
  cy.intercept("GET", Cypress.env('apiUrl')+'/tags*').as("tagList")
  cy.intercept("GET", Cypress.env('apiUrl')+'/tags*', {
      fixture: "tagList.json",
  }).as("mockedTags")
})

Cypress.Commands.add("loadCustomArticleList", () => { // This cmd mocks the GET /tags response from API to a specific set/amount of tags
  cy.intercept("GET", Cypress.env('apiUrl')+'/articles*').as("articles")
  cy.intercept("GET", Cypress.env('apiUrl')+'/articles*', {
      fixture: "articleList.json",
  }).as("mockedArticles")
})

Cypress.Commands.add("setArticleAsFavorite", () => { // This cmd mocks the GET /tags response from API to a specific set/amount of tags
  cy.fixture('articleList.json').then(file=>{
    const articleLink=file.articles[0].slug
    file.articles[0].favoritesCount=2 
    cy.intercept('POST',Cypress.env('apiUrl')+'/articles/'+articleLink+'/favorite',file)
  })
})
