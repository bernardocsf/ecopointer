import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const ecopontoStore = defineStore("ecoponto", {
  state: () => ({
    ecopontos: [
      {
        id: 0,
        morada: "R. Dom Sancho I",
        coordenadas: {
          lat: 41.366709,
          lng: -8.738114,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "../src/assets/imgs/ecopontos/0.png",
      },
      {
        id: 1,
        morada: "R. das Figueiras",
        coordenadas: {
          lat: 41.346347,
          lng: -8.732945,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "../src/assets/imgs/ecopontos/1.png",
      },
      {
        id: 2,
        morada: 'Azurara, Porto',
        coordenadas: {
          lat: 41.349786,
          lng: -8.734727,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "../src/assets/imgs/ecopontos/2.png",
      },
      {
        id: 3,
        morada: 'R. Nossa Sra. da Conceição',
        coordenadas: {
          lat: 41.345106,
          lng: -8.735819,
        },
        utilizacoes: 0,
        vezesRegistado: 0,
        quemAdicionou: 0,
        dataCriacao: "",
        foto: "../src/assets/imgs/ecopontos/3.png",
      },
    ],
  })
})