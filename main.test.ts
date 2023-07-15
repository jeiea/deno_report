import { assertEquals } from "https://deno.land/std@0.194.0/testing/asserts.ts";

Deno.test("a", async (test) => {
  await test.step("b", () => {
    assertEquals([], [""]);
  });
});
