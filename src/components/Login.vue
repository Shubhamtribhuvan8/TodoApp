<template>
    <div>
      <!-- <h2>Another Component</h2>
      <p>UserName: {{ userData.userName }}</p>
      <p>Mail: {{ userData.email }}</p>
      <p>Password: {{ userData.password }}</p> -->
      <v-sheet max-width="300" class="mx-auto">
      <h4>Login</h4>
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
          text="Submit"
        ></v-btn>
      </v-form>
    </v-sheet>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['getUserData']), 
      userData() {
        return this.getUserData;
      },
    },
  };
  </script>
  