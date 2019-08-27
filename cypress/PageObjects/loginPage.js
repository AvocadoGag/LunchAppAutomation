class LoginPage {

    visit() {
        cy.visit('/');
    }

    getLoginbutton() {
       return cy.get('.v-btn__content').contains("Login");
    }

    getEmail() {
        return cy.get('[aria-label="Email"]');
    }

    getPassword() {
        return cy.get('[aria-label="Password"]')
    }

}

export default LoginPage