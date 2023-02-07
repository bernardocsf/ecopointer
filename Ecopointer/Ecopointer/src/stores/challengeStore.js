
import { defineStore } from 'pinia'

export const challenges = defineStore('challengeStore', {
  state: () => ({
    desafios:
    [{id:0,nome:"Publicar 5"},
    {id:1,nome:"Publicar"},
    {id:2,nome:"Ganhar dinheiro"}

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