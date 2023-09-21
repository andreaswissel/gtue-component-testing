import { LegacyComponent } from './legacy.component';

describe('LegacyComponent', () => {
  it('should mount', () => {
    cy.mount(LegacyComponent);
    // check that component exists
    cy.get('lego-legacy').should('exist');
    // check that component mounted correctly by checking for text "legacy works!"
    cy.get('lego-legacy').contains('legacy works!');
  });
});
