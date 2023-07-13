import { expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Registration from "./Registration.vue";
// const wrapper = shallowMount(Registration);
// console.log(wrapper.vm.submit);
global.alert = () => {};

//First Test case-I
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

//Second Test case-II
test("Submit form with valid data", async () => {
  const wrapper = shallowMount(Registration);
  await wrapper.setData({
    "userData.userName": "Shubham Tribhuvan",
    "userData.email": "shubhamtribhuvan@gmail.com",
    "userData.password": "password123",
  });
  await wrapper.vm.submit(); // Wait for the submit method to complete
  expect(wrapper.vm.isSubmitted).toBe(false);
  expect(wrapper.vm.userData).toEqual({
    userName: "",
    email: "",
    password: "",
  });
});

//Third Test case-III
test("Routing after successful form submission", async () => {
  const mockRouter = {
    push: function (route) {
      this.pushedRoute = route;
    },
    pushedRoute: "/login",
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
  await wrapper.vm.submit();
  expect(mockRouter.pushedRoute).toBe("/login");
});

//Fourth Test case-IV
test("Test for action/vuex store", async () => {
  const mochdata = shallowMount(Registration);

  const mockStore = {
    dispatch: function (action, payload) {
      this.dispatchedAction = action;
      this.dispatchedPayload = payload;
    },
    dispatchedAction: null,
    dispatchedPayload: null,
  };

  const wrapper = shallowMount(Registration, {
    global: {
      mocks: {
        $store: mockStore,
      },
    },
  });
  console.log(wrapper);
  await wrapper.setData({
    "userData.userName": "Shubham Tribhuvan",
    "userData.email": "shubhamtribhuvan@gmail.com",
    "userData.password": "password123",
  });
  await wrapper.vm.submit();
  expect(mockStore.dispatchedAction).toBe("setUserData");
  expect(mockStore.dispatchedPayload).toEqual({
    userName: "Shubham Tribhuvan",
    email: "shubhamtribhuvan@gmail.com",
    password: "password123",
  });
});
