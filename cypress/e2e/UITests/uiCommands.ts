Cypress.Commands.add("setArticleAsFavorite",() => { 
    cy.fixture('articleList.json').then(file=>{
      const articleLink=file.articles[0].slug
      file.articles[0].favoritesCount=2 
      cy.intercept('POST',Cypress.env('apiUrl')+'/articles/'+articleLink+'/favorite',file)
    })
  })

  Cypress.Commands.add("loadCustomArticleList", () => { 
    cy.intercept("GET", Cypress.env('apiUrl')+'/articles*').as("articles")
    cy.intercept("GET", Cypress.env('apiUrl')+'/articles*', {
        fixture: "articleList.json",
    }).as("mockedArticles")
  })

  Cypress.Commands.add("loadCustomTags", () => { 
    cy.intercept("GET", Cypress.env('apiUrl')+'/tags*').as("tagList")
    cy.intercept("GET", Cypress.env('apiUrl')+'/tags*', {
        fixture: "tagList.json",
    }).as("mockedTags")
  })

  Cypress.Commands.add("openHomePage", () => { 
    cy.visit("/")
  })