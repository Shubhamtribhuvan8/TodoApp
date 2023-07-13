import { expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Registration from "./Registration.vue";
const wrapper = shallowMount(Registration);
console.log(wrapper.vm.submit);
test("First test case about form!", () => {
  const wrapper = shallowMount(Registration);
  expect(wrapper.vm.userData).toEqual({
    userName: "",
    email: "",
    password: "",
  });
  expect(wrapper.vm.isSubmitted).toBe(false);
  expect(wrapper.vm.formValid).toBe(false);
});

test("Submit form with valid data", async () => {
  const wrapper = shallowMount(Registration);
  await wrapper.setData({
    "userData.userName": "Shubham Tribhuvan",
    "userData.email": "shubhamtribhuvan@gmail.com",
    "userData.password": "password123",
  });
  wrapper.vm.submit();
  expect(wrapper.vm.isSubmitted).toBe(true);
  expect(wrapper.vm.userData).toEqual({
    userName: "",
    email: "",
    password: "",
  });
  const inputs = wrapper.findAll("input");
  inputs.forEach((input) => {
    expect(input.element.value).toBe("");
  });
});

test("Routing after successful form submission", async () => {
  const mockRouter = {
    push: jest.fn(),
  };

  const wrapper = shallowMount(Registration, {
    global: {
      mocks: {
        $router: mockRouter,
      },
    },
  });
  await wrapper.setData({
    "userData.userName": "Shubham Tribhuvan",
    "userData.email": "shubhamtribhuvan@gmail.com",
    "userData.password": "password123",
  });
  wrapper.vm.submit();
  expect(mockRouter.push).toHaveBeenCalledWith("/login");
});
