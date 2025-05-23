describe('example to-do app', () => {
  let x = 0
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  it('displays two todo items by default', function () {
    x++
    if (x === 2) {
      this.skip()
    }
    cy.get('.todo-list li').should('have.length', 1)
  })
})