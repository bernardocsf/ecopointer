import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const ecopontos = defineStore("ecoponto", {
  state: () => ({
    ecopontos: [
      {
        id: 0,
        morada: "R. Dom Sancho I",
        coordenadas: {
          lat: 41.366709,
          lng: -8.738114,
        },
        
        foto: "../src/assets/imgs/ecopontos/0.png",
      },
      {
        id: 1,
        morada: "R. Dom Sancho I 2, 4480-876 Vila do Conde",
        coordenadas: {
          lat: 41.363660,
          lng: -8.741610,
        },
        
        foto: "../src/assets/imgs/ecopontos/1.png",
      },
      {
        id: 2,
        morada: 'Av. Gen. Humberto Delgado 380, 4480-905 Vila do Conde',
        coordenadas: {
          lat: 41.365860,
          lng: -8.743180,
        },
        
        foto: "../src/assets/imgs/ecopontos/2.png",
      },
      {
        id: 3,
        morada: 'Avenida General Humberto Delgado Lugar do Casal do Monte, Regufe, 4480-776 Vila do Conde',
        coordenadas: {
          lat: 41.348920,
          lng: -8.720270,
        },
       
        foto: "../src/assets/imgs/ecopontos/3.png",
      },
    ],
  })
})