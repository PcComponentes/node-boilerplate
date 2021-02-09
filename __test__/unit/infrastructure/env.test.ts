import { Env } from "../../../src/infrastructure/env";

describe("Env", () => {
  it("should get env port", () => {
    const env = new Env();

    expect(env.get("PORT")).toBe("3000");
  });
});
