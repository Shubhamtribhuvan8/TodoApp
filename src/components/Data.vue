<template>
    <div>
      <p>Data: {{ formData }}</p>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import { ref } from 'vue';

  export default {
    computed: {
      ...mapGetters(['getFormData']), 
      formData() {
        return this.getFormData;
      },
    },
    setup() {
      const data = ref('');
  
      const submit = async (event) => {
        this.loading = true;
        const results = await event;
        this.loading = false;
        alert(JSON.stringify(results, null, 2));
        console.log(this.formData);
        data.value = this.formData;
      };
  
      return {
        data,
        submit,
      };
    },
  };
  </script>
  