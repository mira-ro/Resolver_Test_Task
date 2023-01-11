//The repository where we store the web elements and methods with a help of a class
//The date from this class can imported and used on any page

class HomePage{
    get inputEmail(){return cy.get('#inputEmail')}
    get inputPassword(){return cy.get('#inputPassword')}
    get buttonLogin(){return cy.get('.form-signin')}
    get list(){return cy.get('.list-group')}
    get dropdownMenu(){return cy.get('#dropdownMenuButton')}
    get dropdownMenuList(){return cy.get('.dropdown-menu')}
    get testForm4(){return cy.get('#test-4-div')}
    get testForm5Button(){return cy.get('#test5-button')}
    get testForm5ButtonMessage(){return cy.get('#test5-alert')}
    get grid(){return cy.get('#test-6-div')}

open (){
        return cy.visit('QE-index.html')
}

}
export default new HomePage()
