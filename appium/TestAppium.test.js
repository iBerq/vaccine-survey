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


test("Form Test", async () => {
  await driver.pause(2000);

  // Test Case 1 - Trying to click Edit the form button before filling any form
  const EdittheFormButton = await driver.$("~EdittheForm");
  await EdittheFormButton.waitForExist();
  EdittheFormButton.click();
  await driver.pause(1000);
  // ----------------------------------------------------------------------

  /*
  // Test Case 2 - Try to Click Submit Button Before Filling the Form Fields
  const filltheFormButton = await driver.$("~FilltheForm");
  await filltheFormButton.waitForExist();
  filltheFormButton.click();
  await driver.pause(3000);

  const submitButton = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[7]/android.view.ViewGroup");
  await submitButton.waitForExist();
  submitButton.click();
  await driver.pause(3000);
  // ----------------------------------------------------------------------
  */

  /*
  // Test Case 3 - Click Edit Form Button After Filling the Form and See Whether the Form is filled or not
  const filltheFormButton = await driver.$("~FilltheForm");
  await filltheFormButton.waitForExist();
  filltheFormButton.click();
  await driver.pause(1000);

  const nameInput = await driver.$("~NameField");
  await nameInput.clearValue();
  await nameInput.setValue("Ege");

  const SurnameInput = await driver.$("~SurnameField");
  await SurnameInput.clearValue();
  await SurnameInput.setValue("Sahin");

  const BirthDateSelect = await driver.$("~BirthDateSelect");
  await BirthDateSelect.waitForExist();
  BirthDateSelect.click();
  await driver.pause(1000);
  const okButton = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]");
  await okButton.waitForExist();
  okButton.click();
  await driver.pause(1000);
  const selectButton = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView");
  await selectButton.waitForExist();
  selectButton.click();
  await driver.pause(1000);

  const CitySelect = await driver.$("~CitySelect");
  await CitySelect.waitForExist();
  CitySelect.click();
  await driver.pause(1000);
  const Adiyaman = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup");
  await Adiyaman.waitForExist();
  Adiyaman.click();
  await driver.pause(1000);

  const GenderSelect = await driver.$("~GenderSelect");
  await GenderSelect.waitForExist();
  GenderSelect.click();
  await driver.pause(1000);
  const Female = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup");
  await Female.waitForExist();
  Female.click();
  await driver.pause(1000);

  const VaccineSelect = await driver.$("~VaccineSelect");
  await VaccineSelect.waitForExist();
  VaccineSelect.click();
  await driver.pause(1000);
  const vacc = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup");
  await vacc.waitForExist();
  vacc.click();
  await driver.pause(1000);

  const SideEffectSelect = await driver.$("~SideEffectSelect");
  await SideEffectSelect.waitForExist();
  SideEffectSelect.click();
  await driver.pause(1000);
  const sideEffect = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup");
  await sideEffect.waitForExist();
  sideEffect.click();
  await driver.pause(1000);

  const PCRPosSelect = await driver.$("~PCRPosSelect");
  await PCRPosSelect.waitForExist();
  PCRPosSelect.click();
  await driver.pause(1000);
  const PCR = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup");
  await PCR.waitForExist();
  PCR.click();
  await driver.pause(1000);
  
  const submitButton = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[7]/android.view.ViewGroup");
  await submitButton.waitForExist();
  submitButton.click();
  await driver.pause(1000);

  const gotoMainPageButton = await driver.$("~GotoMainPage");
  await gotoMainPageButton.waitForExist();
  gotoMainPageButton.click();
  await driver.pause(1000);

  const EdittheFormButton = await driver.$("~EdittheForm");
  await EdittheFormButton.waitForExist();
  EdittheFormButton.click();
  await driver.pause(1000);
  // ----------------------------------------------------------------------
  */

  /*
  // Test Case 4 - Entering Numbers For Name and Surname Fields
  const filltheFormButton = await driver.$("~FilltheForm");
  await filltheFormButton.waitForExist();
  filltheFormButton.click();
  await driver.pause(3000);

  const nameInput = await driver.$("~NameField");
  await nameInput.clearValue();
  await nameInput.setValue(6);

  const SurnameInput = await driver.$("~SurnameField");
  await SurnameInput.clearValue();
  await SurnameInput.setValue(8);

  const BirthDateSelect = await driver.$("~BirthDateSelect");
  await BirthDateSelect.waitForExist();
  BirthDateSelect.click();
  await driver.pause(1000);
  const okButton = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]");
  await okButton.waitForExist();
  okButton.click();
  await driver.pause(1000);
  const selectButton = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView");
  await selectButton.waitForExist();
  selectButton.click();
  await driver.pause(1000);

  const CitySelect = await driver.$("~CitySelect");
  await CitySelect.waitForExist();
  CitySelect.click();
  await driver.pause(1000);
  const Adiyaman = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup");
  await Adiyaman.waitForExist();
  Adiyaman.click();
  await driver.pause(1000);

  const GenderSelect = await driver.$("~GenderSelect");
  await GenderSelect.waitForExist();
  GenderSelect.click();
  await driver.pause(1000);
  const Female = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup");
  await Female.waitForExist();
  Female.click();
  await driver.pause(1000);

  const VaccineSelect = await driver.$("~VaccineSelect");
  await VaccineSelect.waitForExist();
  VaccineSelect.click();
  await driver.pause(1000);
  const vacc = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup");
  await vacc.waitForExist();
  vacc.click();
  await driver.pause(1000);

  const SideEffectSelect = await driver.$("~SideEffectSelect");
  await SideEffectSelect.waitForExist();
  SideEffectSelect.click();
  await driver.pause(1000);
  const sideEffect = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup");
  await sideEffect.waitForExist();
  sideEffect.click();
  await driver.pause(1000);

  const PCRPosSelect = await driver.$("~PCRPosSelect");
  await PCRPosSelect.waitForExist();
  PCRPosSelect.click();
  await driver.pause(1000);
  const PCR = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup");
  await PCR.waitForExist();
  PCR.click();
  await driver.pause(1000);
  
  const submitButton = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[7]/android.view.ViewGroup");
  await submitButton.waitForExist();
  submitButton.click();
  await driver.pause(1000);

  const gotoMainPageButton = await driver.$("~GotoMainPage");
  await gotoMainPageButton.waitForExist();
  gotoMainPageButton.click();
  await driver.pause(1000);

  const EdittheFormButton = await driver.$("~EdittheForm");
  await EdittheFormButton.waitForExist();
  EdittheFormButton.click();
  await driver.pause(1000);
  // ----------------------------------------------------------------------
  */
});