describe("User journey", () => {
    beforeEach(() => {
        cy.visit("https://arsjobus.github.io")
    })

    it("Read more about Portrait of Souls and navigate to itch.io to playtest it", () => {
        cy.get(".featured-post").first().find('a').contains("Portrait of Souls").click()
        cy.location("pathname").should(
            "eq",
            "/portrait-of-souls/"
        )
        cy.get('.btn')
            .contains("Play Game")
            .invoke('removeAttr', 'target').click()
        cy.origin('https://arsjobus.itch.io', () => {
            cy.location("pathname").should(
                "eq",
                "/portrait-of-souls"
            )
            cy.get("input[type=password]").should("exist")
        })
    })
})