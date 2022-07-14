/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
    
    beforeEach(() => {
        cy.visit('./src/index.html');
    });

    it('Verifica o título da aplicação', () => {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
        
    });

    it('preenche os campos obrigatórios e envia o formulário', () => {

        cy.get('#firstName').type('Aline')
        cy.get('#lastName').type('Rosa')
        cy.get('#email').type('alinerosa_s@hotmail.com')
        cy.get('#open-text-area').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipum passages, and more recently with desktop publishing sofwae like Aldus PageMaker including versions of Lorem Ipsum.', {delay:0 }) // Há a opção de criar uma variavel e armazenar o texto desejado, porém é uma boa usar pageobjects + cucumber
        cy.get('.button').click()
        cy.get('.success').should('be.visible')
    });

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        
        cy.get('#firstName').type('Aline')
        cy.get('#lastName').type('Rosa')
        cy.get('#email').type('alinerosa_shotmail.com')
        cy.get('#open-text-area').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipum passages, and more recently with desktop publishing sofwae like Aldus PageMaker including versions of Lorem Ipsum.', {delay:0 }) // Há a opção de criar uma variavel e armazenar o texto desejado, porém é uma boa usar pageobjects + cucumber
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
        
    });

    it('Valor não numérico digitado', () => {
        
        cy.get('#firstName').type('Aline')
        cy.get('#lastName').type('Rosa')
        cy.get('#email').type('alinerosa_shotmail.com')
        cy.get('#phone')
        .type('teste')
        .should('have.text', '')

    });
});