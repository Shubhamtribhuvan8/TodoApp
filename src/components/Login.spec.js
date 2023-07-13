import { expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Login from "./Login.vue";
const wrapper = shallowMount(Login);
test("Test successfully!", () => {
  expect(wrapper.vm.userData).toEqual({
    email: "",
    password: "",
  });
});
