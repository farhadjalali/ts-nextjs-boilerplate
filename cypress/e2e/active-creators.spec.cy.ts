describe("Active creators", () => {
  beforeEach(() => {
    cy.visit("/active-creators");
  });

  it("displays the active creators emails", () => {
    cy.contains("h1", "Active Creators");

    cy.fixture("active-creators").then((emails) => {
      emails.forEach((email: string) => {
        cy.contains(email);
      });
    });
  });

  it("find creators list by test attribute", () => {
    cy.get("[data-test='creators-list']").should("exist");
  });

  it("support Dutch language", () => {
    cy.visit("/nl/active-creators");
    cy.contains("h1", "Actieve makers");
  });
});
