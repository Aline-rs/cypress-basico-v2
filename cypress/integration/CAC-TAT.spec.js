/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
    
    beforeEach(() => {
        cy.visit('./src/index.html');
    });

    it('Verifica o título da aplicação', () => {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
        
    });

    it('preenche os campos obrigatórios e envia o formulário', () => {
        cy.get('#firstName')
        .click()
        .type('Aline')

        cy.get('#lastName')
        .click()
        .type('Rosa')

        cy.get('#email')
        .click()
        .type('alinerosa_s@hotmail.com')

        cy.get('#open-text-area')
        .click()
        .type('Não preciso de ajuda')

        cy.get('.button')
        .click()
        cy.get('.success')
        .should('be.visible')
    });
});