describe('smoke test', () => {
  it('renders', () => {
    cy.visit('/');
    cy.contains('Learn React');
  });
});
