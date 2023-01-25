<template>
    <GoogleMap api-key="AIzaSyAYi2BJ0UcEc3zgu2s6g9UFV-6JHuSkyxE"  style="width: 100%; height: 500px" :center="center" :zoom="18">
    <Marker :options="currentPosMarkerOptions" />
    <Marker :options="markerOptions"/>
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 41.363660, lng: -8.741610 };
    const markerOptions = { position: center, label: "L", title: "Ecoponto" };

    return { center, markerOptions };
  },
});
</script>
