//To group our test cases in Cypress, we use describe function
describe('Home Page', () => {
  //beforeEach is a hook that does a certain action (in our case opens a home page) before executing
  // every test case. Helps with code stability.
  beforeEach('Open Home Page', () => {
    cy.visit('QE-index.html')
  })
  //Every test is represented by a separate describe, and every it represents a separate assertion
  // Separate assertions allow us to track where exactly our test fails
  describe('Test 1', () => {
    //to find selectors in cypress we use cy.get()
    // to assert element we use should()
    it('Email validation', () => {
      cy.get('#inputEmail').should('be.visible').type('fake@data.com')
    })
    it('Password validation', () => {
      cy.get('#inputPassword').should('be.visible').type('qwerty123')
    })
    it('Login button validation', () => {
      cy.get('.form-signin').should('be.visible')
      //to assert that element exists we can also use .should('exist')
    })
  })
  describe('Test 2', () => {
    it('Values of list group', () => {
      //in this test we are asserting the length of the list
      cy.get('.list-group').find('.list-group-item').should('have.length', 3)
    })
    //We can get the element of the list by its index, counting starts from 0
    it('Second list item', () => {
      cy.get('.list-group').find('.list-group-item').eq(1).should('contain.text', 'List Item 2')
    })
    it('Second list item*s badge', () => {
      cy.get('.list-group').find('.list-group-item').eq(1).find('.badge').should('have.text', '6')
    })
  })
  describe('Test 3', () => {
    it('Text validation', () => {
      cy.get('#dropdownMenuButton').should('contain.text', 'Option 1')
    })
    //for partial text validation we use 'contain.text', for complete text validation 'have.text'
    it('Text validation', () => {
      cy.get('#dropdownMenuButton').click()
      cy.get('.dropdown-menu').find('.dropdown-item').eq(2).click()
      cy.get('#dropdownMenuButton').should('have.text', 'Option 3')
    })
  })
  describe('Test 4', () => {
    //here we are asserting that one of the buttons is enabled and another one is not,
    // going from parent to child element
    it('Enabled button validation', () => {
      cy.get('#test-4-div').find('[class="btn btn-lg btn-primary"]').should('be.enabled')
    })
    it('Disabled button validation', () => {
      cy.get('#test-4-div').find('[class="btn btn-lg btn-secondary"]').should('be.disabled')
    })
  })

  describe('Test 5', () => {
    //In this test the element(in our case button) exists in the DOM, but appears with random delay
    // In QE-index.html the timeout is set through the function and cannot be more than 11 seconds
    //Thus with .wait(11000) we wait until the element appears
    // and with this timeout the test will not fail
    it('Success message validation', () => {
      cy.get('#test5-button').wait(11000).click()
      cy.get('#test5-alert').should('contain.text', 'You clicked a button!')
    })
    it('Disabled button validation', () => {
      cy.get('#test5-button').wait(11000).click()
      cy.get('#test5-button').should('be.disabled')
    })
  })
  describe('Test 6', () => {
    //In order to get a value from any cell, we creat a function, which takes two parameters
    //one for a table row, another one for a cell
    //First, findCell function finds table body, then a child element table row with parameters y
    // then finds a  child element cell with parameter x and returns the value
    function findCell(y, x) {
      return cy.get('tbody').find('tr').eq(y).find('td').eq(x)
    }

    it('Validation of the cell value', () => {
      findCell(2, 2).should('contain', 'Ventosanzap')
    })
  })
})
