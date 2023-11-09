describe("Sumador", () => {
  it("Shows the amount of the addition to the user", () => {
    //arrange 
    cy.visit("/");
    cy.get("#primer-numero").type(4);
    cy.get("#segundo-numero").type(5);
    //act
    cy.get("#sumar-button").click();
    //asser(verificar)
    cy.get("#resultado-div").should("contain", "9");
  });

  it("Shows the amount of the addition to the user", () => {
    //arrange 
    cy.visit("/");
    cy.get("#primer-numero").type(7);
    cy.get("#segundo-numero").type(7);
    //act
    cy.get("#sumar-button").click();
    //asser(verificar)
    cy.get("#resultado-div").should("contain", "14");
  });



});
