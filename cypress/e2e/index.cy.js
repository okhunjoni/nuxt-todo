
describe('Load todo app', () => {
  beforeEach(() => {
    cy.visit('');
    cy.get('[data-test="input"]').type('todo tast 1')
    cy.get('[data-test="add-button"]').click()
    cy.get('[data-test="input"]').type('todo tast 2')
    cy.get('[data-test="add-button"]').click()
    cy.get('[data-test="input"]').type('todo tast 3')
    cy.get('[data-test="add-button"]').click()
    cy.get('[data-test="input"]').type('todo tast 4')
    cy.get('[data-test="add-button"]').click()
    cy.get('[data-test="input"]').type('todo tast 5')
    cy.get('[data-test="add-button"]').click()
    cy.get('[data-test="input"]').type('todo tast 6')
    cy.get('[data-test="add-button"]').click()
  });

  it('Check number of tasks', () => {
   cy.get('[data-test="backlog"]').should('have.text',"Backlogs 6")
  });
 
  it('Drag and drop tasks check statuses',()=>{
    const dataTransfer = new DataTransfer();
    cy.get('[data-test="backlog-1"]').trigger('dragstart', {
     dataTransfer
   });
   cy.get('[data-test="todo-drop"]').trigger('drop', {
     dataTransfer
   });
   cy.get('[data-test="backlog-1"]').trigger('dragstart', {
     dataTransfer
   });
   cy.get('[data-test="progress-drop"]').trigger('drop', {
     dataTransfer
   });
   cy.get('[data-test="backlog-1"]').trigger('dragstart', {
     dataTransfer
   });
   cy.get('[data-test="progress-drop"]').trigger('drop', {
     dataTransfer
   });
   cy.get('[data-test="progress-1"]').trigger('dragstart', {
     dataTransfer
   });
   cy.get('[data-test="test-drop"]').trigger('drop', {
     dataTransfer
   });
   cy.get('[data-test="backlog-0"]').trigger('dragstart', {
    dataTransfer
  });
  cy.get('[data-test="done-drop"]').trigger('drop', {
    dataTransfer
  });
  cy.get('[data-test="backlog"]').should('have.text',"Backlogs 2")
  cy.get('[data-test="todo"]').should('have.text',"Todos 1")
  cy.get('[data-test="progress"]').should('have.text',"In Progress 1")
  cy.get('[data-test="test"]').should('have.text',"Tests 1")
  cy.get('[data-test="done"]').should('have.text',"Dones 1")
  })

  it('Edit and delete todo item',()=>{
    cy.get('[data-test="backlog-2-edit"]').click()
    cy.get('[data-test="modal"]').type(' extent the task')
    cy.get('[data-test="modal-save"]').click()
    cy.get('[data-test="backlog-2"]').should('contain.text','todo tast 3 extent the task')
    cy.get('[data-test="backlog-2-delete"]').click()  
    cy.get('[data-test="backlog"]').should('have.text',"Backlogs 5")
    cy.get('[data-test="backlog-2"]').should('not.contain.text','todo tast 3 extent the task')
})
});
