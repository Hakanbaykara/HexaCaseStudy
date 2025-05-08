import { by, element, expect } from "detox";

describe("Main", () => {
  it("should have input screen", async () => {
    await expect(element(by.text("Enter your prompt"))).toBeVisible();
  });
});
