<template>
  
 
   
  <GoogleMap api-key="AIzaSyAYi2BJ0UcEc3zgu2s6g9UFV-6JHuSkyxE"  style="width: 100%; height: 450px" :center="center" :zoom="18">
   
    <Marker
  v-for="ecoponto in store.getBins"
  :key="ecoponto._id"
  :options="{
    position: {
      lat: ecoponto.localizacao ? ecoponto.localizacao.latitude : 0,
      lng: ecoponto.localizacao ? ecoponto.localizacao.longitude : 0
    },
    icon: {
      url: '/src/assets/marker.webp',
      scaledSize: { width: 29, height: 40 }
    }
  }"
/>

 </GoogleMap>

</template>

<script>

import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import{ ecopontos} from "../stores/ecopointStore"

export default defineComponent({
  data() {
    return {
      number: 0,
      isDisabled: false,
      message: "",
      loading: false,
      users: localStorage.users,
      desafios: localStorage.desafios,
      eventos: localStorage.eventos,
      ecopontos: localStorage.ecopontos
    };
  },
 
 components: { GoogleMap, Marker },
 setup() {
    const store= ecopontos();
    const center ={ lat:41.363660, lng:-8.741610}
   
   return { store, center,
     };
 },
 methods :{
  async getBinsList() {
      this.$data.loading = true;

      try {
        await this.store.getAllBins();
        console.log(" - GET Bins: " + this.store.getBins);
        this.$data.ecopontos = this.store.ecopontos;
        console.log(this.ecopontos);
      } catch (error) {
        console.log(error);
        this.$data.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      } finally {
        this.$data.loading = false;
      }
    },
 },
//  created () {this.ecopontos = this.store.ecopontos
//  ;
// }
created() {
    this.getBinsList()
  },
});

</script>