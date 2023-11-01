Cypress.Commands.add("deleteCreatedArticle",function () { 
    cy.request({ 
      method:"DELETE",
      url: Cypress.env('apiUrl')+'/articles/'+Cypress.env('ArticleSlug'),
      headers:{
        'Authorization': 'Token '+window.localStorage.getItem('jwtToken')
    },  
    })
  })

  Cypress.Commands.add("userLogin", () => { 
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