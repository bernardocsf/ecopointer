import { defineStore } from 'pinia'

export const challenges = defineStore('challengeStore', {
  state: () => ({
    desafios: localStorage.desafios
      ? JSON.parse(localStorage.desafios)
      : 
    [
    {id:0, nome:"Concluir 3 streaks", percentagem: 50, xps: "+100XP"},
    {id:1, nome:"Registar 3 ecoponto", percentagem: 80, xps: "+200XP"},
    {id:2, nome:"Posts em 20 ecopontos diferentes", percentagem: 50, xps: "+300XP"},
    {id:2, nome:"Participação em 5 eventos", percentagem: 30, xps: "+15XP"},
    ]
  }),
  getters: {
    getDesafios: (state) => { return state.desafios},
},

  actions: {
    updateLocalStorage() {
      localStorage.setItem('eventos', JSON.stringify(this.desafios));
    },
    orderById: function() {



      this.desafios = this.desafios.sort((a, b) => a.id-b.id);
      this.updateLocalStorage()
      return this.desafios





   },
   eliminarDesafio(desafio){
    //this.getuserByid(user.id)
    this.desafios.splice(desafio, 1);
    this.updateLocalStorage()


  }





  },




});