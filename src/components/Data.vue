<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getPostData']), 
    postData() {
      return this.getPostData;
    },
  },
  methods: {
  deleteData() {
    this.$store.dispatch("clearPostData");
    this.$store.dispatch("addToHistoryData", this.postData);
    alert("Data deleted successfully!");
  },
},

};
</script>

<template>
  <div>
    <v-sheet max-width="300" class="mx-auto">
      <h1>ToDo Details</h1>
      <h1>Your Data: {{ postData.textsomething }}</h1>
      <v-btn variant="outlined" @click="deleteData">
        Delete
      </v-btn>
    </v-sheet>
  </div>
</template>
