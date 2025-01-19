describe('Quiz e2e Test', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should start the quiz and anser the questions', () => {
        // Start the quiz
        cy.get('button').contains('Start Quiz').click();

        // Make sure the first question renders after clicking
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');

        // Answer questions
        for (let i=0; i <= 9; i++) {
            cy.get('button').contains('1').click();
        }
        
        // Check your score
        cy.get('.alert-success').contains('Your score');

        // Restart quiz
        cy.get('button').contains('Take New Quiz').click();

        // Verify another question renders
        cy.get('.card').should('be.visible');

    });

});