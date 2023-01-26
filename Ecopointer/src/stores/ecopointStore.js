import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const ecopontos = defineStore("ecoponto", {
  state: () => ({
    ecopontos: localStorage.ecopontos ? JSON.parse(localStorage.ecopontos)
    :  [
      {
        id: 0,
        nome:"Ecoponto1",
        morada: "R. Dom Sancho I",
        latitude: 41.366709,
        longitude: -8.738114,
    


      },
      {
        id: 1,
        nome:"Ecoponto2",
        morada: "R. Dom Sancho I 2, 4480-876 Vila do Conde",

          latitude: 41.363660,
          longitude: -8.741610,



      },
      {
        id: 2,
        nome:"Ecoponto3",
        morada: 'Av. Gen. Humberto Delgado 380, 4480-905 Vila do Conde',

          latitude: 41.365860,
          longitude: -8.743180,



      },
      {
        id: 3,
        nome:"Ecoponto4",
        morada: 'Avenida General Humberto Delgado Lugar do Casal do Monte, Regufe, 4480-776 Vila do Conde',

          latitude: 41.348920,
          longitude: -8.720270,



      },
    ],

  }),
  actions: {
    updateLocalStorage() {
      localStorage.setItem('ecopontos', JSON.stringify(this.ecopontos));
    },
    addEcoponto(nome, morada,lat,lng) {
      this.ecopontos.push({
        id: this.ecopontos.length,
        nome:nome,
        morada: morada,
        latitude:lat, 
        longitude:lng

        });
      this.updateLocalStorage()
    },
}})