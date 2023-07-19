<script>
import Recived from './Recived.vue';
export default {
    components: {
        Recived
    },
    data() {
        return {
            data: []
        }
    },
    mounted() {
        this.fetchdata();
    },
    methods: {
        async fetchdata() {
            const datastore = await fetch("https://fakestoreapi.com/products");
            const response = await datastore.json();
            this.data = response;
            // console.log(response[0]);
        }
    }
}
</script>

<template>
    <Recived :data="data" />
</template>
