<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiLogout } from '@mdi/js';


export default {
  components: {
    SvgIcon
  },

  data() {
    return {
      path: mdiLogout,
      };
    },

  methods: {
    logout() {
      localStorage.removeItem('papa');
      localStorage.removeItem('vuex');
      alert("Logout successfully!")
      this.routing();
    },
    routing() {
      this.$router.push("/");
    }
  }
};
</script>


<template>
   <svg-icon type="mdi" :path="path" class="logoutbutton" @click="logout"></svg-icon>
</template>
