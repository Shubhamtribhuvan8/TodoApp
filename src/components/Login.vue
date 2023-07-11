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
        this.routing();
      } else {
        this.loading = false;
        alert('Invalid credentials');
      }
    },
    routing() {
      this.$router.push('/post');
    },
  },
};
</script>

<template>
  <div>
    <v-sheet max-width="300" class="mx-auto">
      <h4>Login</h4>
      <v-form validate-on="submit lazy" @submit.prevent="submit">
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
          text="Login"
        ></v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
