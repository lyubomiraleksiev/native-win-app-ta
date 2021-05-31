import { By2 } from 'selenium-appium'

export class ComposerPage {
    public response: string;

    public requestUrl: string = 'https://httpbin.org/get';

    public async navigate() {
        const composerMenu = By2.nativeName('Composer');
        await composerMenu.click();
    }

    public async sendRequest() {
        const composerMenu = By2.nativeName('Composer');
        await composerMenu.click();

        const urlInput = By2.nativeName('ex: https://www.example.com');
        await urlInput.sendKeys(this.requestUrl);

        const execute = By2.nativeName('EXECUTE');
        await execute.click();
    }

    public async verifyRequestBody() {
        const responseField = By2.nativeName('Editor content;Press Alt+F1 for Accessibility Options.');
        expect(await responseField.isDisplayed()).toBe(true);
        this.response = await responseField.getText();
    }
}

export default new ComposerPage();