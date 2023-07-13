import { expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Registration from "./Registration.vue";
const wrapper = shallowMount(Registration);
test("Test successfully!", () => {
  expect(wrapper.vm.userData).toEqual({
    userName: "",
    email: "",
    password: "",
  });
  //   expect(window.alert).toHaveBeenCalledOnce(
  //     "Please fill in all required fields."
  //   );
});
