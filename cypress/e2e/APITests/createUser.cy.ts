describe("API Test Cases for user creation", () => {
   const apiUrl = Cypress.env('apiUrl')
   let userData:any
    before(() => {
        cy.fixture("newUsers").then((data) => {
          userData = data
          return userData
        })
      })
    
      it("Should create a new user",() =>{
        cy.request({
            method:"POST",
            url: apiUrl+'/users',
            headers:{
                'Content-Type': 'application/json'
            },
            body:{
                "user":{
                "username":userData.username,
                "email": userData.email,
                "password": userData.password
            }    
            }
        }).as('createUser')
    
        cy.get('@createUser').then(response =>{
            expect(response.status).to.eq(200)
            expect(response.body.user.email).to.contain(userData.user.email)
        })
        })   
})