import TestEnvironment from '../appium.config';
import { takeScreenshot } from '../utilities/screenshot.utility';
import live_traffic from '../pages/live-traffic.page';
import composer from '../pages/composer.page';

beforeAll(() => {
    return TestEnvironment.setup();;
})

afterAll(async () => {
    await takeScreenshot();
    return TestEnvironment.teardown();
})

describe('Fiddler', () => {
    test('Filter', async () => {
        await live_traffic.navigate();
        await live_traffic.filter('test');
    });

    test('Send post request', async () => {
        await composer.navigate();
        await composer.sendRequest();
    });

    test('Click on a sent request and check if data is loaded', async () => {
        await live_traffic.navigate();
    });
});