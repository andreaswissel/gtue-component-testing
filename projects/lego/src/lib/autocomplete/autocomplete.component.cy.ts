import {
  NoopAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { AutocompleteComponent } from './autocomplete.component';
import { Default } from './autocomplete.stories';

describe('AutocompleteComponent', () => {
  const selectedOption = `Steak sandwhich`;
  const bbqRibsRegEx = /BBQ ribs/i;

  // TODO: Text "steak sa" eintippen, Option selektieren, pruefen, dass setOption mit dem richtigen Wert aufgerufen wurde
  // TODO: Text löschen, "bbq" eintippen, Option selektieren, pruefen, dass setOption mit dem richtigen Wert aufgerufen wurde

  beforeEach(() => {
    cy.mount(AutocompleteComponent, {
      imports: [NoopAnimationsModule],
      componentProperties: {
        ...Default.args,
      },
    }).then((mountedComponent) => {
      cy.spy(mountedComponent.component.onOptionSet, 'emit').as('setOptionSpy');
    });
  });

  it('should call setOption with the selected option value after the option is selected', () => {
    cy.get('input').type('steak sa');
    cy.findByRole('option', { name: selectedOption }).should('exist');
    cy.findByRole('option', { name: selectedOption }).click();

    cy.get('@setOptionSpy').should('have.been.calledWith', selectedOption);
  });

  it('should delete the text and check if bbq is also an option', () => {
    cy.get('input').clear();
    cy.get('input').type('bbq');

    cy.findByRole('option', { name: bbqRibsRegEx }).should('exist');
    cy.findByRole('option', { name: bbqRibsRegEx }).click();

    cy.get('@setOptionSpy').should('have.been.calledWith', bbqRibsRegEx);
  });
});
