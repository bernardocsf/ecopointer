<script setup>
import Navbar from '../components/NavBar.vue'

</script>

<template>
    <div>
        <Navbar/>
        <h1>{{ store}}</h1>
        
    </div>
</template>

<script>
import { toHandlers } from 'vue';
import { userStore } from '../stores/Userstore';


import { storeToRefs } from "pinia";




export default {
  setup() {
    const store = userStore();
    // storeToRefs lets todoList keep reactivity:
    const { users } = storeToRefs(store);

    return {
      users,
      store
    };

  },
};





















</script>

<style lang="scss" scoped>


</style>