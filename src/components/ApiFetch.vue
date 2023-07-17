<template>
  
    <div>
      <h1>Api Fetch component</h1>
      <div class="card-grid">
      <div v-for="(item, index) in data" :key="index" class="card">
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

    <v-card-subtitle class="pt-4">
     {{ item.price  }}
    </v-card-subtitle>

    <v-card-text>
      <div>{{ item.description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange">
        Share
      </v-btn>
      <v-btn color="orange" @click="this.$router.push({ name: 'product-details', params: { id: item.id,price:item.price,image: item.image,description:item.description } })">
      <router-link :to="{ name: 'product-detail', params: { id: item.id, price: item.price,image: item.image,description:item.description } }">
            View Details
          </router-link>
        </v-btn>
    </v-card-actions>
  </v-card>
</div>
    </div>
    <v-progress-circular
      :size="70"
      :width="7"
      v-if="loading"
      color="purple"
      indeterminate
    ></v-progress-circular>

  </div>
  </template>
  
<script>
export default{
    data(){
        return{
            data:[],
            loading: false
        }
    },
    mounted(){
     this.FetchData();
    },
    methods:{
        async FetchData(){
          this.loading = true;
            const fetchapi=await fetch("https://fakestoreapi.com/products");
            const datajson=await fetchapi.json();
            this.data=datajson;
            console.log(datajson)
        }   
    }
}
</script>
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