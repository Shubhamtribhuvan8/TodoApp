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
      formValid: false,
    };
  },
  methods: {
    submit() {
      // if (this.$refs.form.validate()) {
      //   this.$store.dispatch('setUserData', this.userData);
      //   this.isSubmitted = true;
      //   alert('Register successful');
      //   this.resetForm();
      //   this.routing();
      // } else {
      //   alert('Please fill in all required fields.');
      // }
      if (this.validateForm()) {
      this.$store.dispatch('setUserData', this.userData);
      this.isSubmitted = true;
      alert('Register successful');
      this.resetForm();
      this.routing();
    }else{
      alert('Please fill in all required fields.');
    }
  },
  validateForm() {
    const { userName, email, password } = this.userData;
    return userName.trim() !== '' && email.trim() !== '' && password.trim() !== '';
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
  <div class="styling">
    <v-sheet max-width="300" class="mx-auto">
      <h4 class="signup">Sign Up</h4>
      <br/>
      <v-form ref="form" validateForm validate-on="submit" @submit.prevent="submit">
        <v-text-field
          v-model="userData.userName"
          :rules="[v => !!v || 'Name is required']"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="userData.email"
          :rules="[v => !!v || 'Email is required', v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Invalid email format']"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          v-model="userData.password"
          :rules="[v => !!v || 'Password is required']"
          label="Password"
          required
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
