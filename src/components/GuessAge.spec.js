import { shallowMount } from "@vue/test-utils";
import GuessAge from "./GuessAge.vue";
import { expect, test } from "vitest";
const wrapper = shallowMount(GuessAge);

it("Test if data is a function", () => {
  expect(typeof GuessAge.data).toBe("function");
});
