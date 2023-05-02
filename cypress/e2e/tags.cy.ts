
describe('template spec', () => {
    let tagList: any
    before(() => {
      cy.fixture("tagList").then((data) => {
        tagList = data
        return tagList
      })
    })
    beforeEach("Open App", () => {
      // Command to visit home page each time a test starts
      cy.openHomePage()
      cy.loadCustomTags()
    });
    
    it('Should display tag list', () => {
        cy.get('.sidebar > .tag-list > :nth-child(1)').should('be.visible')
    })
    it('Should check tag list', () => {
      cy.get('.sidebar > .tag-list > :nth-child(1)').should('be.visible').and('have.text',tagList.tags[0])
      cy.get('.sidebar > .tag-list > :nth-child(2)').should('be.visible').and('have.text',tagList.tags[1])
      cy.get('.sidebar > .tag-list > :nth-child(3)').should('be.visible').and('have.text',tagList.tags[2])
      cy.get('.sidebar > .tag-list > :nth-child(4)').should('be.visible').and('have.text',tagList.tags[3])      
    })

    it('Should check if the right amount of tags are displayed', () => {
      cy.get('.sidebar > .tag-list').children().should('have.length',4)
    })
  })