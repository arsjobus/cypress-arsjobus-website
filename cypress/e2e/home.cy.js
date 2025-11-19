describe('template spec', () => {
  beforeEach(() => {
    cy.visit("https://arsjobus.github.io")
  })

  it('Hero intro body see more button should scroll to H2 element', () => {
    cy.get(".intro-body").find('a').click()
    cy.get("h2").contains("Full Sail University").should("be.visible")
  })
})