describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get("[data-cy='order-button']").find('button').as('orderButton');
  });

  it('Visits the app, fills out the order form and confirms that the user is being redirected after submit', () => {
    cy.get('#firstname').type('Max');
    cy.get('#lastname').type('Mustermann');
    cy.get('#address-autocomplete').type('Rheingoldhalle');
    cy.get('.pac-matched').first().click();
    cy.get('@orderButton').click();

    // check that loading state is present
    cy.get('.is-loading').should('exist');

    // check redirect
    cy.url().should('be.equal', 'http://localhost:4200/success');
  });
});
