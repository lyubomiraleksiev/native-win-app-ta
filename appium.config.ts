import { driver, windowsAppDriverCapabilities } from 'selenium-appium'
import { MacDriver } from 'appium-mac-driver';

// Path to Fiddler executable
const appId = '"C:/Users/Auxcode/AppData/Local/Programs/Fiddler Everywhere/Fiddler Everywhere.exe"'

class TestEnvironment {

    async setupMacSession() {
        let defaultCaps = {
            platformName: 'Mac',
            port: 4723
        };

        let driver = new MacDriver();
        await driver.createSession(defaultCaps);
    }

    setup() {
        jest.setTimeout(60000);
        const capabilities = windowsAppDriverCapabilities(appId);
        return driver.startWithCapabilities(capabilities);
    }

    teardown() {
        return driver.quit();
    }
}

export default new TestEnvironment();