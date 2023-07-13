import { shallowMount } from "@vue/test-utils";
import GuessAge from "./GuessAge.vue";
import { expect, it, test } from "vitest";
const wrapper = shallowMount(GuessAge);
// console.log(wrapper);
it("Test if data is a function", () => {
  expect(typeof GuessAge.data).toBe("function");
});
it("test if label is a undefined", () => {
  expect(typeof GuessAge.data.search).toBe("undefined");
});
it("test if label is a label", () => {
  expect(typeof GuessAge.label).toBe("label");
});
