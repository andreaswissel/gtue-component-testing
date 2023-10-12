import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteComponent } from '@lego/components';
import { Default } from './autocomplete.stories';

describe('AutocompleteComponent', () => {
  const selectedOption = `Steak sandwhich`;
  const bbqRibsRegEx = /BBQ ribs/i;

  // TODO: Text "steak sa" eintippen, Option selektieren, pruefen, dass setOption mit dem richtigen Wert aufgerufen wurde

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

  it('should select an option', () => {
    cy.get('input').type('steak sa');
    cy.findByRole('option', { name: selectedOption }).should('exist');
    cy.findByRole('option', { name: selectedOption }).click();
    cy.get('input').should('have.value', 'Steak sandwhich');

    cy.get('@setOptionSpy').should('have.been.calledOnceWith', selectedOption);
  });

  // TODO: Text löschen, "bbq" eintippen, Option selektieren, pruefen, dass setOption mit dem richtigen Wert aufgerufen wurde
  it('should clear the input and if bbq is selected should emit "BBQ ribs', () => {
    cy.get('input').clear();
    cy.get('input').realType('bbq,');

    cy.findByRole('option', { name: bbqRibsRegEx }).should('exist');
    cy.findByRole('option', { name: bbqRibsRegEx }).click();

    cy.get('@setOptionSpy').should('have.been.calledOnceWith', 'BBQ ribs');
  });
});
