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
      this.routing();
    },
    routing() {
      this.$router.push("/login");
    }
  }
};
</script>


<template>
  <div class="styling1">
    <v-sheet max-width="300" class="mx-auto">
      <!-- <svg-icon type="mdi" :path="path" class="buttons"></svg-icon> -->
    <v-btn variant="outlined" class="buttons" @click="logout">
        Logout
      </v-btn>
    </v-sheet>
  </div>
</template>
