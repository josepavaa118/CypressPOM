describe("Testing API Endpoints Using Cypress", () => {
   const apiUrl = Cypress.env('apiUrl')
   let userData:any
    before(() => {
        cy.fixture("newUsers").then((data) => {
          userData = data
          return userData
        })
      })
    
      it("Should create a new user",() =>{
        cy.log(userData.user.email)
        cy.request({
            method:"POST",
            url: apiUrl+'/users',
            headers:{
                'Content-Type': 'application/json'
            },
            body:{
                "user":{
                "username":userData.user.username,
                "email": userData.user.email,
                "password": userData.user.password
            }    
            }
        }).as('createUser')
    
        cy.get('@createUser').then(response =>{
            expect(response.status).to.eq(200)
            expect(response.body.user.email).to.contain(userData.user.email)
        })
        
  
      
        })
    
})