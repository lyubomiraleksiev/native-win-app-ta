# selenium-webdriver-appium-winappdriver
An example of jest, selenium-webdriver and winappdriver integration

[WinAppDriver] (https://github.com/Microsoft/WinAppDriver)
[Appium-Mac-Driver] (https://www.npmjs.com/package/appium-mac-driver)
[Selenium-Appium] (https://www.npmjs.com/package/selenium-appium)
[Jest] (https://www.npmjs.com/package/jest)

## Preparation
1. Windows machine
2. Nodejs and Yarn
3. WinAppDriver
4. Enable developer mode

## Install all dependencies
- Install packages.
`yarn install` or `npm install`

## Start tests
1. Launch driver
- For Windows (WinAppDriver)
`npx winappdriver`
- For MacOs (Appium-Mac-Driver)
2. Run the test suites.
`yarn run jest` or `npm run jest`