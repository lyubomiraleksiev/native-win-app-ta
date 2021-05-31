import { By2 } from 'selenium-appium'

export class ComposerPage {

    public async navigate() {
        const composerMenu = By2.nativeName('Composer');
        await composerMenu.click();
    }

    public async sendRequest() {
        const composerMenu = By2.nativeName('Composer');
        await composerMenu.click();

        const urlInput = By2.nativeName('ex: https://www.example.com');
        await urlInput.sendKeys("https://httpbin.org/get");

        const execute = By2.nativeName('EXECUTE');
        await execute.click();

        const responseField = By2.nativeName('Body ');
        expect(await responseField.isDisplayed()).toBe(true);
    }
}

export default new ComposerPage();