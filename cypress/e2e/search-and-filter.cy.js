import { faker } from "@faker-js/faker";
const randomCountry = faker.address.country();

describe("Search", () => {
  it("Searches for a country and returns the correct one if query is precise", () => {
    cy.visit("http://192.168.0.106:5173/");
    cy.get("input[placeholder*='Search']").type(randomCountry);
    cy.get("div").should("contain", randomCountry);
    cy.get("#theList").children().should("have.length", 1);
  });
});

describe("Filter", () => {
  it("Filters by region and doesn't find country that's in different region", () => {
    cy.visit("http://192.168.0.106:5173/");
    cy.get("select").select("Europe");
    cy.get("div").contains("Zambia").should("not.exist");
  });
});
