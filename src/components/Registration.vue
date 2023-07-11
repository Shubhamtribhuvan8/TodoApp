<script>
export default {
  data() {
    return {
      userData: {
        userName: '',
        email: '',
        password: '',
      },
      isSubmitted: false,
    };
  },
  methods: {
    submit() {
      this.$store.dispatch('setUserData', this.userData);
      this.isSubmitted = true;
      this.resetForm();
      this.routing();
    },
    resetForm() {
      this.userData = {
        userName: '',
        email: '',
        password: '',
      };
    },
    routing() {
      this.$router.push('/login');
    },
  },
};
</script>

<template>
  <div>
    <v-sheet max-width="300" class="mx-auto">
      <h4>Sign Up</h4>
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <v-text-field
          v-model="userData.userName"
          :rules="rules"
          label="Name"
        ></v-text-field>
        <v-text-field
          v-model="userData.email"
          :rules="rules"
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="userData.password"
          :rules="rules"
          label="Password"
        ></v-text-field>

        <v-btn
          :loading="loading"
          type="submit"
          block
          class="mt-2"
          text="Register"
        ></v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
