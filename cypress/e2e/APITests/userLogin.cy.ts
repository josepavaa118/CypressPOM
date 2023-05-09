describe("Login Endpoint Testing", () => {
    const apiUrl = Cypress.env('apiUrl')
    let userData:any
     before(() => {
         cy.fixture("newUsers").then((data) => {//Loads user data for API Login
           userData = data
           return userData
         })
       })
 //Test Case Section    
       it("Should login as an existing user",() =>{
         cy.request({
             method:"POST",
             url: apiUrl+'/users/login',
             headers:{
                 'Content-Type': 'application/json'
             },
             body:{
                 "user":{
                 "email": userData.email,
                 "password": userData.password
             }    
             }
         }).as('userLogin')
     
         cy.get('@userLogin').then(response =>{
            var userToken=response.body.user.token
            cy.log(userToken)
             expect(response.status).to.eq(200)
             expect(response.body.user.email).to.contain(userData.email)
         })
         })   
 })