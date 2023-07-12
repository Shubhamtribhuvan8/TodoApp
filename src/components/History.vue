<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getHistoryData']), 
    historyData() {
      return this.getHistoryData;
    },
  },
  mounted() {
    // this.logHistoryData(); // No longer needed
  },
  methods:{
      Return() {
      this.$router.push('/get');
      },
    }
};
</script>

<template>
  <div class="styling1">
    <v-sheet max-width="800" class="mx-auto">
      <h1 style="text-align: center">ToDo Delete History</h1>
      <table>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th class="th1">Deleted Data</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in historyData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ data.text }}</td>
          </tr>
        </tbody>
      </table>
      <div class="backbutton"> 
        <v-btn @click="Return()">
      Back </v-btn>
      </div>
      
    </v-sheet>
  </div>
</template>

