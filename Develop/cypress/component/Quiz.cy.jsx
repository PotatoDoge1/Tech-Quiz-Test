import React from 'react';
import Quiz from '../../client/src/components/Quiz';

Cypress.Commands.add('verifyHooksFalse', (hooks) => {
    Object.values(hooks).forEach((hook) => {
      expect(hook).to.eq(false);
    });
  });

describe('Home page loads with button to start quiz', () => {
        it('should load at the on the home page to start the quiz', () => { 
            cy.mount(< Quiz/>);
            cy.contains('Start Quiz').should('be.visible');
            });
        });

describe('Main quiz functionality', () => {
    beforeEach(() => {
        cy.intercept(
            {
            method: 'GET',
            url: '/api/questions/random'
            },
            {
                fixture: 'questions.json',
                statusCode: 200
            }
        ).as('getRandomQuestion')
    });

    it('should let a user complete the quiz', () => {
        cy.mount(<Quiz />);
        // Start the quiz
        cy.get('button').contains('Start Quiz').click();
        // Answer a question
        cy.get('button').contains('1').click();
        // Check that the quiz completes after questions are answered
        cy.get('h2').contains('Quiz Completed');
        // Check that I can start a new quiz
        cy.get('button').contains('Take New Quiz').click();
        // Check that the quiz cards are available again
        cy.get('.card').should('be.visible');
    });
} );