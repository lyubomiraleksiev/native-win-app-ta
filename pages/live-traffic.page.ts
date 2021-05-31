import { By2 } from 'selenium-appium'

export class LiveTrafficPage {

    private get liveTrafficMenu() { return By2.nativeName('Live Traffic'); }

    public async navigate() {
        await this.liveTrafficMenu.click();
    }

    public async filter(search: string) {
        const searchInput = By2.nativeName('Search');
        await searchInput.sendKeys(search);
        const activeFilterMessage = By2.nativeName('Live Traffic(Capturing)');
        expect(await activeFilterMessage.isDisplayed()).toBe(true);
    }
}

export default new LiveTrafficPage();