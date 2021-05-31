import { By2, driver } from 'selenium-appium'
import * as fs from 'fs-extra';

export async function takeScreenshot() {
    const scr = await driver.takeScreenshot();
    var data = scr.replace(/^data:image\/\w+;base64,/, "");
    var buf = Buffer.from(data, 'base64');
    await fs.writeFile('image.png', buf);
}