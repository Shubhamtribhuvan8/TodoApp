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
  <div class="styling1">
    <v-sheet max-width="800" class="mx-auto">
      <h1 style="text-align: center">ToDo Delete History</h1>
        <table>
        <thead>
          <th>Sr.No</th>
          <th>Deleted Data</th>
        </thead>
        <tbody>
          <tr v-for="(data, index) in historyData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ data.textsomething }}</td>
          </tr>
        </tbody>
      </table>
      <!-- </div> -->
    </v-sheet>
  </div>
</template>
