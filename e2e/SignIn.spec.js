import { remote } from "webdriverio";

// eslint-disable-next-line no-undef
let driver;

jest.setTimeout(10000);

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

test("find Sign In link and click on it", async () => {
  const emailSignupButton = await driver.$("~Sign up with E-mail");
  emailSignupButton.click();

});

test.only("find text fields and populate them with signups", async () => {
  const emailEntry = await driver.$("Text Field")
  await emailEntry.clearValue()
  await emailEntry.setValue("TestAccount@test.com")
  const passwordInput = await driver.$("~Secure Text Field")
  await passwordInput.clearValue();
  await passwordInput.setValue("Password")
});
