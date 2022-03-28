import { remote } from "webdriverio";

jest.setTimeout(60000);
let driver;

beforeAll(async () => {
  driver = await remote({
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: "Android",
      platformVersion: "8",
      deviceName: "Android Emulator",
      appium: { connectHardwareKeyboard: true }
    }
    // logLevel: "silent"
  });
});

afterAll(async () => {
  if (driver) {
    await driver.deleteSession();
  }
});


test("Open Form Test", async () => {
  await driver.pause(2000);

  const filltheFormButton = await driver.$("~FilltheForm");
  await filltheFormButton.waitForExist();
  filltheFormButton.click();
  await driver.pause(3000);
  
  /*const loginUsernameInput = await driver.$("~LoginInput");
  await loginUsernameInput.clearValue();
  await loginUsernameInput.setValue("TestAccount@test.com");
  await driver.hideKeyboard("pressKey", "next");

  const loginNextButton = await driver.$("~LoginNextButton");
  await loginNextButton.waitForExist();
  loginNextButton.click();
  await driver.pause(3000);

  const loginPasswordInput = await driver.$("~LoginPasswordInput");
  await loginPasswordInput.setValue("Test1234");
  const loginButton = await driver.$("~LoginButton");
  await loginButton.click();
  await driver.pause(3000);*/
});