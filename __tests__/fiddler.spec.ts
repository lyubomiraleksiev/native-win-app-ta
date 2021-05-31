import TestEnvironment from '../appium.config';
import { takeScreenshot } from '../utilities/screenshot.utility';
import live_traffic from '../pages/live-traffic.page';
import composer from '../pages/composer.page';

beforeAll(() => {
    return TestEnvironment.setup();
})

afterAll(async () => {
    await takeScreenshot();
    return TestEnvironment.teardown();
})

describe('Fiddler', () => {
    // Test that the composer works and then displays a response body
    test('Send post request', async () => {
        await composer.navigate();
        await composer.sendRequest();
        await composer.verifyRequestBody();
    });

    // Test both the filtering by request url and verify if the response body is correctly displayed
    test('Filter, open request and check response data is correctly received', async () => {
        await live_traffic.navigate();
        await live_traffic.filter(composer.requestUrl);
        await live_traffic.openRequest(composer.requestUrl);
        await live_traffic.checkRequestBody();
    });

    // Save current session and verify it has actually been saved correctly
    test('Save current session and verify it has actually been saved correctly', async () => {
        await live_traffic.navigate();
        await live_traffic.saveSession('TestSession');
        await live_traffic.verifySessionHasBeenSaved('TestSession');
    });
});