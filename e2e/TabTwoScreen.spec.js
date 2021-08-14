import { remote } from "webdriverio";

// eslint-disable-next-line no-undef
let driver;

jest.setTimeout(15000);

beforeAll(async () => {
  driver = await remote({
    path: "/wd/hub",
    host: "localhost:19002",
    port: 4723,
    capabilities: {
      platformName: "iOS",
      platformVersion: "14.5",
      deviceName: "iPhone 12 Pro Max",
      appium: { connectHardwareKeyboard: true },
      // automationName: "XCUITest",
      // app: "org.reactjs.native.example.LearnRnE2eTest", // this is for open specify app
      // udid: process.env.IOS_DEVICE_UUID,
      // xcodeOrgId: "xxx",
      // xcodeSigningId: "Apple Development"
    },
    // logLevel: "silent"
  });
});

afterAll(async () => {
  if (driver) {
    await driver.deleteSession();
  }
});

test("sanity check", async () => {
  expect(true).toBe(true);
});

test("Email input test", async () => {
  const loginEmailInput = await driver.$("~emailInput");
  await loginEmailInput.clearValue();
  await loginEmailInput.setValue("TestAccount@test.com");
  await driver.hideKeyboard("pressKey", "return");
  const text = await loginEmailInput.getText();
  expect(text).toBe("TestAccount@test.com");
});

test("Password input test", async () => {
  const loginPasswordInput = await driver.$("~passwordInput");
  await loginPasswordInput.clearValue();
  await loginPasswordInput.setValue("Password");
  await driver.hideKeyboard("pressKey", "return");
  const text = await loginPasswordInput.getText();
  expect(text).toBe("••••••••");
});

test("button click test", async () => {
  const LoginButton = await driver.$("~LoginButton");
  LoginButton.click();
  await driver.pause(3000);
  let popUp = await driver.$("~popUp");
  let isDisplayed = await popUp.isDisplayed();
  expect(isDisplayed).toBe(true);
  await driver.pause(500);
  LoginButton.click();
  await driver.pause(2000);
  isDisplayed = await popUp.isDisplayed();
  expect(isDisplayed).toBe(false);
});

test("change tabs", async () => {
  const TabTwoButton = await driver.$("~TabTwo, tab, 2 of 2");
  await driver.pause(1000);
  TabTwoButton.click();
  await driver.pause(1000);
  const tabTwoEmail = await driver.$("~tabTwoEmail")
  expect(tabTwoEmail.error).toBe(undefined)
});
