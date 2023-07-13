import { expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Login from "./Login.vue";

global.alert = () => {};

//First Test case-I
test("Test successfully!", () => {
  const wrapper = shallowMount(Login);
  expect(wrapper.vm.userData).toEqual({
    email: "",
    password: "",
  });
});

//Second Test case-II

test("Submit form with valid data", async () => {
  const mockStore = {
    getters: {
      getUserData: {
        email: "",
        password: "",
      },
    },
  };
  const wrapper = shallowMount(Login, {
    global: {
      mocks: {
        $store: mockStore,
      },
    },
  });
  await wrapper.setData({
    "userData.email": "shubhamtribhuvan@gmail.com",
    "userData.password": "password123",
  });
  wrapper.vm.isSubmitted = false;
  await wrapper.vm.submit();
  expect(wrapper.vm.isSubmitted).toBe(false);
  expect(wrapper.vm.formValid).toBe(undefined);
});

//Third Test case-III
test("Routing after successful form submission", async () => {
  const mockStore = {
    getters: {
      getUserData: {
        email: "test@example.com",
        password: "password123",
      },
    },
  };
  const mockRouter = {
    push: function (route) {
      this.pushedRoute = route;
    },
    pushedRoute: "/post",
  };
  const wrapper = shallowMount(Login, {
    global: {
      mocks: {
        $store: mockStore,
        $router: mockRouter,
      },
    },
  });
  await wrapper.setData({
    "userData.email": "shubhamtribhuvan@example.com",
    "userData.password": "password123",
  });
  await wrapper.vm.submit();
  expect(mockRouter.pushedRoute).toBe("/post");
});
