<template>
    <div>
      <h1>Product Details</h1>
      <div class="card">
            <v-card
    class="mx-auto"
    max-width="400"
  >
  <v-img
        class="align-end text-white"
        height="200"
        :src="$route.params.image"
        alt="Product Image"
        cover
        ></v-img>
     
    <v-card-title>Product ID:{{$route.params.id }}</v-card-title>
    <v-card-subtitle class="pt-4">
        Product Price: {{$route.params.price}}
    </v-card-subtitle>

    <v-card-text>
      <div>   {{$route.params.description}}</div>
    </v-card-text>
    <v-btn color="orange" @click="Backtoproduct()">Back</v-btn>
        </v-card>
      </div>
    
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      console.log(this.$route.params.id,this.$route.params.description);
    },
    methods: {
        Backtoproduct() {
            this.$router.push("/api");
        },
    },
  };
  </script>
  