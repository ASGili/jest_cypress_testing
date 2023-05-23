describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working operation buttons',()=>{
    cy.get('#number2').click();
    cy.get('#operator-multiply').click()
    cy.get('#number2').click();
    cy.get('#operator-subtract').click()
    cy.get('.display').should('contain', '4')
  })

  it('should chain operations',()=>{
    cy.get('#number2').click();
    cy.get('#operator-multiply').click()
    cy.get('#number2').click();
    cy.get('#operator-subtract').click()
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should work with positive numbers',()=>{
    cy.get('#number2').click();
    cy.get('#operator-multiply').click()
    cy.get('#number2').click();
    cy.get('#operator-multiply').click()
    cy.get('.display').should('contain', '4')
  })

  it('should work with negative numbers',()=>{
    cy.get('#number2').click();
    cy.get('#operator-subtract').click()
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2')
  })

  it('should work with decimal numbers',()=>{
    cy.get('#number3').click();
    cy.get('#operator-divide').click()
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.75')
  })

  it('should work with large numbers',()=>{
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click()
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1975304691360')
  })

  it('should have error for dividing by zero', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Err')
  })

})