<template>
  <div>
    <h2>Another Component</h2>
    <p>UserName: {{ userData.userName }}</p>
    <p>Mail: {{ userData.email }}</p>
    <p>Password: {{ userData.password }}</p>
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
// console.log(this.computed)
</script>
