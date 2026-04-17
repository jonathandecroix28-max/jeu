// cypress/e2e/keep-white-space.cy.js

describe('Keep White Space - E2E', () => {
  const URL = 'http://localhost:3630';

  // Test 1 : la page du jeu se charge et affiche un canvas
  it('charge la page du jeu et affiche le canvas', () => {
    cy.visit(URL);

    cy.get('canvas').should('exist');
  });

  // Test 2 : démarrer une partie avec ESPACE et vérifier que le jeu est accessible
  it('démarre une partie avec la touche ESPACE et le jeu reste accessible', () => {
    cy.visit(URL);

    cy.get('body').trigger('keydown', {key: ' '});

    cy.wait(2000);

    cy.get('canvas').should('exist');
  });

  // Test 3 : passage par un Game Over puis restart ne casse pas la page
  it('permet de passer par un Game Over puis un restart sans casser la page', () => {
    cy.visit(URL);

    cy.get('body').trigger('keydown', {key: ' '});

    cy.wait(10000);

    cy.get('body').trigger('keydown', {key: ' '});

    cy.location('href').should('include', URL);
    cy.get('canvas').should('exist');
  });
});
