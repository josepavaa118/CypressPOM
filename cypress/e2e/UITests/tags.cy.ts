import * as tags from "../../selectors/tagList.sel"
describe('Tag list Testing', () => {
    let tagList: any
    before(() => {
      cy.fixture("tagList").then((data) => {//List of tags loaded from Fixture File
        tagList = data
        return tagList
      })
    })
    beforeEach("Open App", () => {//Home Page is open and custom tags from GET Response are mocked
      cy.openHomePage()
      cy.loadCustomTags()
    })
    ///Test Case Section
    it('Should display tag list', () => {
        cy.get(tags.tag1).should('be.visible')
    })
    it('Should check tag list', () => {
      cy.get(tags.tag1).and('have.text',tagList.tags[0])
      cy.get(tags.tag2).should('be.visible').and('have.text',tagList.tags[1])
      cy.get(tags.tag3).should('be.visible').and('have.text',tagList.tags[2])
      cy.get(tags.tag4).should('be.visible').and('have.text',tagList.tags[3])      
    })

    it('Should check if the right amount of tags are displayed', () => {
      cy.get(tags.tagList).children().should('have.length',4)
    })
  })