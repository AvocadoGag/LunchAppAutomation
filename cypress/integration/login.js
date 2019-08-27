
import LoginPage from '../PageObjects/loginPage';
import MainScreen from '../PageObjects/MainScreen';

const loginPage = new LoginPage();
const mainScreen = new MainScreen();

function login() {
    loginPage.visit();
    loginPage.getEmail().should("be.visible");
    loginPage.getEmail().type("admin@red.vln");
    loginPage.getPassword().should("be.visible");
    loginPage.getPassword().type("Ferrari000");
    loginPage.getLoginbutton().should("be.visible");
    loginPage.getLoginbutton().click();
}

describe('LunchApp', function() {
    

    it('Should log out ', function () {

        login();
        mainScreen.getLogOutButton().click();
        mainScreen.getLogo().should("be.visible");
    })

    it('Add Soup and MainDish ', function () {

        login();
        mainScreen.getSoup().click();
        mainScreen.getMainDish().click();
        mainScreen.getSaveOrder().click();
    })
    
})