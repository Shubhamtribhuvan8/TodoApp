
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getpostData']), 
    postData() {
      return this.getpostData;
    },
  },
};
</script>
<template>
  <div>
    <v-sheet max-width="300" class="mx-auto">
    <h2>Get data page</h2>
    <p>Data: {{ postData.textsomething }}</p>
  </v-sheet>
  </div>
</template>

