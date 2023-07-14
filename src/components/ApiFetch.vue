<template>
    <div>
      <h1>Api Fetch component</h1>
      <div class="card-grid">
      <ul v-for="(item, index) in data" :key="index" class="card">
       <img :src="item.image" alt="Product Image" />
        <li>{{ item.category }}</li>
        <li>{{ item.description }}</li>
        <li>{{ item.price }}</li>
       
      </ul>
    </div>
    </div>
  </template>
  
<script>
export default{
    data(){
        return{
            data:[]
        }
    },
    mounted(){
     this.FetchData();
    },
    methods:{
        async FetchData(){
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