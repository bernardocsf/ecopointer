
import { defineStore } from 'pinia'

export const challenges = defineStore('challengeStore', {
  state: () => ({
    desafios:
    [{id:0, nome:"Concluir 3 streaks", porcentagem: "60%", xps: "+100XP"},
    {id:1, nome:"Registar 3 ecoponto", porcentagem: "20%", xps: "+100XP"},
    {id:2, nome:"Posts em 20 ecopontos diferentes", porcentagem: "40%", xps: "+100XP"}

    ]
    
  }),
  getters: {
    getDesafios: (state) => {
      return state.desafios;
    
  },
},

  actions: {
   
    
    


  },




});