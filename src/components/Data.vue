
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
    <h2>Another Component</h2>
    <p>Data: {{ postData.textsomething }}</p>
  </div>
</template>

