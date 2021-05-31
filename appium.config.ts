import { driver, windowsAppDriverCapabilities } from 'selenium-appium'

// Path to Fiddler executable
const appId = '"C:/Users/Auxcode/AppData/Local/Programs/Fiddler Everywhere/Fiddler Everywhere.exe"'

class TestEnvironment {
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