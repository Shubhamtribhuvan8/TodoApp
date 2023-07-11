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
// console.log(this.getHistoryData)
</script>

<template>
  <div>
    <v-sheet max-width="800" class="mx-auto">
      <h1>ToDo Delete History</h1>
      <div v-for="data in historyData" :key="data.id">
        <h1>Deleted Data: {{ data.textsomething }}</h1>
      </div>
    </v-sheet>
  </div>
</template>
