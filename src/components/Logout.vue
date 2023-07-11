<script>
export default {
 methods:{
    logout(){
        localStorage.removeItem('papa');
        alert("Logout successful!")
     }
   }
  }

</script>

<template>
  <div>
    <v-sheet max-width="300" class="mx-auto">
    <v-btn variant="outlined" @click="logout">
        Logout
      </v-btn>
    </v-sheet>
  </div>
</template>
