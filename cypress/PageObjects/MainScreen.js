class MainScreen {

    getLunchEditing() {
        return cy.get('.v-list__tile__title').contains('Lunch Editing');
    }

    getLogOutButton() {
        return cy.get('.v-list__tile__title').contains('Sign Out');
    }

    getSoup() {
        return cy.get('.v-card__text').contains('Soup1-27');
    }

    getMainDish() {
        return cy.get('.v-card__text').contains('Beef Stroganov-27');
    }

    getSaveOrder() {
        return cy.get( '.v-btn__content').contains('8.00 €');
    }

    getLogo() {
        return cy.get('.iconMd');
    }
}

export default MainScreen 