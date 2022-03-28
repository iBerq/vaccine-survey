import { remote } from "webdriverio";

jest.setTimeout(20000);
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


test("Form Test", async () => {
  await driver.pause(2000);

  /*
  // Test Case 1 - Try to Click Submit Button Before Filling the Form Fields
  const filltheFormButton = await driver.$("~FilltheForm");
  await filltheFormButton.waitForExist();
  filltheFormButton.click();
  await driver.pause(3000);

  const submitButton = await driver.$("~SubmitForm");
  await submitButton.waitForExist();
  submitButton.click();
  await driver.pause(3000);

  const backToHomeScreenButton = await driver.$("~Navigate up");
  await backToHomeScreenButton.waitForExist();
  backToHomeScreenButton.click();
  await driver.pause(3000);
  // ----------------------------------------------------------------------
  */

  // Test Case 2 - Click Edit Form Button After Filling the Form and See Whether the Form is Correct or not
  const filltheFormButton = await driver.$("~FilltheForm");
  await filltheFormButton.waitForExist();
  filltheFormButton.click();
  await driver.pause(3000);

  const nameInput = await driver.$("~NameField");
  await nameInput.clearValue();
  await nameInput.setValue("Ege");

  const SurnameInput = await driver.$("~SurnameField");
  await SurnameInput.clearValue();
  await SurnameInput.setValue("Sahin");

  const BirthDateSelect = await driver.$("~BirthDateSelect");

  const CitySelect = await driver.$("~CitySelect");
  await CitySelect.waitForExist();
  CitySelect.click();

  const GenderSelect = await driver.$("~GenderSelect");
  const VaccineSelect = await driver.$("~VaccineSelect");
  const SideEffectSelect = await driver.$("~SideEffectSelect");
  const PCRPosSelect = await driver.$("~PCRPosSelect");
  
  const backToHomeScreenButton = await driver.$("~Navigate up");
  await backToHomeScreenButton.waitForExist();
  backToHomeScreenButton.click();
  await driver.pause(3000);
  // ----------------------------------------------------------------------

  /*
  // Test Case 3 - Entering Numbers For Name and Surname Fields
  const filltheFormButton = await driver.$("~FilltheForm");
  await filltheFormButton.waitForExist();
  filltheFormButton.click();
  await driver.pause(3000);

  const nameInput = await driver.$("~NameField");
  await nameInput.clearValue();
  await nameInput.setValue("Ege");

  const SurnameInput = await driver.$("~SurnameField");
  await SurnameInput.clearValue();
  await SurnameInput.setValue("Sahin");
   // ----------------------------------------------------------------------
  */
});