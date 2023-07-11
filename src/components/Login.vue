<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      userData: {
        email: '',
        password: '',
      },
      loading: false,
      rules: [value => !!value || 'Field is required'],
    };
  },
  computed: {
    ...mapGetters(['getUserData']), 
  },
  methods: {
    submit() {
      this.loading = true;
      const storedUserData = this.getUserData;
      if (storedUserData.email === this.userData.email && storedUserData.password === this.userData.password) {
        this.loading = false;
        alert('Login successful');
        this.generateAndStoreToken();
        this.routing();
      } else {
        this.loading = false;
        alert('Invalid credentials');
      }
    },
    generateAndStoreToken() {
      const token = this.generateRandomToken();
      localStorage.setItem('papa', token);
    },
    generateRandomToken() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let token = '';
      for (let i = 0; i < 10; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return token;
    },
    routing() {
      this.$router.push('/post');
    },
  },
};
</script>

<template>
  <div class="styling1">
    <v-sheet max-width="300" class="mx-auto">
      <h4 class="login">Login</h4>
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <v-text-field
          v-model="userData.email"
          :rules="rules"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          v-model="userData.password"
          :rules="rules"
          label="Password"
          required
        ></v-text-field>

        <v-btn
          :loading="loading"
          type="submit"
          block
          class="mt-2"
          text="Login"
        ></v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
