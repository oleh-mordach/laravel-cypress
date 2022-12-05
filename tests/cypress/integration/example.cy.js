describe('Example Test', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('laravel_session', 'XSRF-TOKEN')
  })
    it('shows a homepage', () => {
        cy.visit('/');

        cy.contains('Laravel');
    });
});
