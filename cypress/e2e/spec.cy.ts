describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#address-autocomplete').type('a');
    cy.get('.pac-matched').as('firstResult');
    cy.get('#address-autocomplete').clear();
    cy.get('[data-cy=order-button]').find('button').as('orderButton');
  });

  it('Visits the application', () => {
    cy.get('app-order').should('contain', 'Complete your order');
  });

  it('fills out the order form', () => {
    // Order form auswählen
    cy.get('#firstname').type('Max');
    cy.get('#lastname').type('Mustermann');
    cy.get('#address-autocomplete').type('GTü Prüfstelle');

    cy.get('@firstResult').first().click();

    cy.get('@orderButton').click();

    cy.get('.is-loading').should('exist');
    cy.get('.is-loading').should('be.visible');

    cy.url().should('be.equal', 'http://localhost:4200/success');
  });
});
