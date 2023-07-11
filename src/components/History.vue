<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getHistoryData']), 
    historyData() {
      return this.getHistoryData;
    },
  },
};
</script>

<template>
  <div>
    <v-sheet max-width="300" class="mx-auto">
      <h1>ToDo Details</h1>
      <h1>Your Data: {{ historyData.textsomething }}</h1>
    </v-sheet>
  </div>
</template>
