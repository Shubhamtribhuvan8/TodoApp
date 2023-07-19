<script>
export default {
  name: "Customer",
  props: {
    data: { type: Object, required: true }
  },
  mounted() {
    this.datarecieved();
  },
  methods: {
    datarecieved() {
      console.log("Shubham ",this.data);
    }
  }
}
</script>

<template>
     <div class="card-grid">
  <ui class="card" v-for="(item, index) in data" :key="index">
    <v-card
    class="mx-auto"
    max-width="400"
  >
  <v-img
      class="align-end text-white"
      height="200"
      :src="item.image" alt="Product Image"
      cover
    >
      <v-card-title>{{item.category}}</v-card-title>
    </v-img>
    <v-card-title>{{ item.id }}</v-card-title> 
    <v-card-title>{{ item.title }}</v-card-title> 
    <v-card-title>{{ item.price }}</v-card-title> 
</v-card>
  </ui>
  
</div>
</template>
<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-gap: 20px; 
}
img{
    width: 250px;
    height: 300px;
}
</style>