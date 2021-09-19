Cypress.Commands.add("switchModes", (modes) => {
  modes.forEach((mode) => {
    // switch mode
    cy.get("a").contains(mode).click()
    cy.get("h2")
      .should("contain", "You selected " + mode.toUpperCase())
      .should("be.visible")
    cy.get("h2").should("not.contain", "Select a mode")
  })
})

Cypress.Commands.add("loadModes", (modes) => {
  modes.forEach((mode) => {
    // switch mode
    cy.visit("/app/" + mode.toLowerCase())
    cy.get("h2")
      .should("contain", "You selected " + mode.toUpperCase())
      .should("be.visible")
  })
})
