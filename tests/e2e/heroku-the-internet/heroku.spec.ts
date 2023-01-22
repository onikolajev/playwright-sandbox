import test from "@playwright/test";
import { HerokuPage } from "../../../page-objects/heroku-the-internet/HerokuPage";

test.describe("Test heroku the-internet homepage", async () => {
  let herokuPage: HerokuPage;
  const sections = [
    "A/B Testing",
    "Add/Remove Elements",
    "Basic Auth",
    "Broken Images",
    "Challenging DOM",
    "Checkboxes",
    "Context Menu",
    "Digest Authentication",
    "Disappearing Elements",
    "Drag and Drop",
    "Dropdown",
    "Dynamic Content",
    "Dynamic Controls",
    "Dynamic Loading",
    "Entry Ad",
    "Exit Intent",
    // "File Download", to be fixed later
    "File Upload",
    "Floating Menu",
    "Forgot Password",
    "Form Authentication",
    // "Frames", to be fixed later
    "Geolocation",
    "Horizontal Slider",
    "Hovers",
    "Infinite Scroll",
    "Inputs",
    "JQuery UI Menus",
    "JavaScript Alerts",
    "JavaScript onload event error",
    "Key Presses",
    "Large & Deep DOM",
    "Multiple Windows",
    "Nested Frames",
    "Notification Messages",
    "Redirect Link",
    "Secure File Download",
    "Shadow DOM",
    "Shifting Content",
    "Slow Resources",
    "Sortable Data Tables",
    "Status Codes",
    "Typos",
    "WYSIWYG Editor",
  ];

  test.beforeEach(async ({ page }) => {
    herokuPage = new HerokuPage(page);

    await herokuPage.open();
  });

  for (const section of sections) {
    test(`Open homepage and check ${section}`, async ({ page }) => {
      await herokuPage.selectSection(section);
    });
  }
});