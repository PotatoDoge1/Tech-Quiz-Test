import React from 'react';
import Quiz from '../../client/src/components/Quiz';

Cypress.Commands.add('verifyHooksFalse', (hooks) => {
    Object.values(hooks).forEach((hook) => {
      expect(hook).to.eq(false);
    });
  });

describe('Quiz Component Tests', () => {
        it('should load at the on the home page to start the quiz', () => { 
            cy.visit('http://localhost:3001');
            cy.window()
                .its('state.hooks')
                .then((hooks) => {
                    cy.verifyHooksFalse(hooks);
                });
            }
});