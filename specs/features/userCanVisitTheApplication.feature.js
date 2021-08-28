context('when a user visits the application the page', () => {
  
  it('is expected to display the header', () => {
    cy.visit('/')
    cy.get('h1').should('contain.text', 'Address Book')
  });
  
});