import { By2 } from 'selenium-appium'
import composer from './composer.page';

export class LiveTrafficPage {
    public async navigate() {
        await By2.nativeName('Live Traffic').click();
    }

    public async filter(search: string) {
        const searchInput = By2.nativeName('Search');
        await searchInput.clear();
        await searchInput.sendKeys(search);
        const activeFilterMessage = By2.nativeName('Live Traffic(Capturing)');
        expect(await activeFilterMessage.isDisplayed()).toBe(true);
    }

    public async openRequest(requestUrl: string) {
        const requestRow = By2.nativeName(requestUrl);
        await requestRow.click();
    }

    public async checkRequestBody() {
        const responseBody = By2.nativeName('Editor content;Press Alt+F1 for Accessibility Options.');
        expect(await responseBody.getText()).toEqual(composer.response);
    }

    public async saveSession(sessionName: string) {
        const saveNewSession = By2.nativeName('Save');
        await saveNewSession.click();

        const sessionNameInput = By2.nativeName('Give your session a name');
        await sessionNameInput.clear();
        await sessionNameInput.sendKeys(sessionName);

        const saveSessionButton = By2.nativeName('SAVE');
        await saveSessionButton.click();
    }

    public async verifySessionHasBeenSaved(sessionName: string) {
        const mySessions = By2.nativeName('My Sessions');
        // Simulate a doubleclick
        await mySessions.click();
        await mySessions.click();

        const savedSession = By2.nativeName(sessionName);
        expect(await savedSession.getText()).toBe(sessionName);
    }
}

export default new LiveTrafficPage();