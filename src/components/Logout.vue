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
  <div class="styling1">
    <v-sheet max-width="300" class="mx-auto">
    <v-btn variant="outlined" class="buttons" @click="logout">
        Logout
      </v-btn>
    </v-sheet>
  </div>
</template>
