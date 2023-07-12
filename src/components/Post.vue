
<template>
  <div class="styling1">
    <v-sheet max-width="300" class="mx-auto">
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <v-textarea label="Add Something!" v-model="newTodo" :rules="rules"></v-textarea>
        <v-btn
          :loading="loading"
          type="submit"
          block
          class="mt-2"
          text="ADD TODO"
        ></v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      rules: [],
    };
  },
  methods: {
    submit() {
      const token = localStorage.getItem("papa");
      if (token) {
        this.$store.dispatch("addTodo", { text: this.newTodo });
        this.resetForm();
        this.routing();
      } else {
        alert("Error: Token not found");
      }
    },
    resetForm() {
      this.newTodo = "";
    },
    routing() {
      this.$router.push("/get");
    },
  },
};
</script>

