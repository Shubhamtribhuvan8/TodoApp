<script>
export default {
    data() {
    return {
        postData: {
        textsomething: '',
      },
      isSubmitted: false,
    };
  },
  methods: {
    submit() {
      this.$store.dispatch('setPostData', this.postData);
      this.isSubmitted = true;
      this.resetForm();
      this.routing();
    },
    resetForm() {
      this.postData = {
        textsomething: '',
      };
    },
    routing() {
      this.$router.push('/get');
    },
  },
};
</script>

<template>
  <div>
    <v-sheet max-width="300" class="mx-auto">
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <v-textarea label="Add Something!" v-model="postData.textsomething"
          :rules="rules"></v-textarea>
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
