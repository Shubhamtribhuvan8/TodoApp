// import { mount } from "@vue/test-utils";
// import Registration from "./Registration.vue";
// // import { expect, test } from "vitest";
// const wrapper = mount(Registration);

// it("testing GuessAge component props", async () => {
//   expect(Registration.props.title).toContain("Guess User Age App");
// });
import { shallowMount } from "@vue/test-utils";
import Registration from "./Registration.vue";

describe("Registration", () => {
  it("submits the form when all required fields are filled", async () => {
    const wrapper = shallowMount(Registration);

    wrapper.setData({
      userData: {
        userName: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
      },
    });

    wrapper.find("form").trigger("submit.prevent");

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.isSubmitted).toBe(true);
    expect(wrapper.emitted().submit).toBeTruthy();
    expect(wrapper.vm.userData.userName).toBe("");
    expect(wrapper.vm.userData.email).toBe("");
    expect(wrapper.vm.userData.password).toBe("");
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith("/login");
  });

  it("displays an alert if required fields are not filled", async () => {
    const wrapper = shallowMount(Registration);

    // Mock the window.alert method
    const mockAlert = jest.spyOn(window, "alert");
    mockAlert.mockImplementation(() => {});

    // Trigger form submission without filling the required fields
    wrapper.find("form").trigger("submit.prevent");

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.isSubmitted).toBe(false);
    expect(wrapper.emitted().submit).toBeFalsy();
    expect(mockAlert).toHaveBeenCalledWith(
      "Please fill in all required fields."
    );

    // Restore the original window.alert method
    mockAlert.mockRestore();
  });
});
