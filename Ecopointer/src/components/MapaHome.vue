<template>
   
   <GoogleMap api-key="AIzaSyAYi2BJ0UcEc3zgu2s6g9UFV-6JHuSkyxE"  style="width: 100%; height: 450px" :center="center" :zoom="18">
    
      <Marker
      v-for="ecoponto in ecopontos"
      
      
      :options="{
        position: {
          lat: ecoponto.coordenadas.lat,
          lng: ecoponto.coordenadas.lng,
        },
        icon: {
          url: '/src/assets/marker.png',
          scaledSize: { width: 29, height: 40 },
        },
       
      }"
    />
  </GoogleMap>
 
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import{ ecopontos} from "../stores/ecopointStore"

export default defineComponent({
  
  components: { GoogleMap, Marker },
  setup() {
     const store= ecopontos();
     const center ={ lat:41.363660, lng:-8.741610}
    
    return { store, center,
      ecopontos: [],};
  },
  created () {this.ecopontos = this.store.ecopontos
  ;
}
});

</script>
