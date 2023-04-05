describe("Login Endpoint Testing", () => {
    const apiUrl = Cypress.env('apiUrl')
    let userData:any
     before(() => {
         cy.fixture("newUsers").then((data) => {
           userData = data
           return userData
         })
       })
     
       it("Should login as an existing user",() =>{
         cy.log(userData.user.email)
         cy.request({
             method:"POST",
             url: apiUrl+'/users/login',
             headers:{
                 'Content-Type': 'application/json'
             },
             body:{
                 "user":{
                 "email": userData.user.email,
                 "password": userData.user.password
             }    
             }
         }).as('userLogin')
     
         cy.get('@userLogin').then(response =>{
            var userToken=response.body.user.token
            cy.log(userToken)
             expect(response.status).to.eq(200)
             expect(response.body.user.email).to.contain(userData.user.email)
         })
         })   
 })