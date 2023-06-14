import { defineStore } from 'pinia'
import { ChallengeService } from '../services/challenges.service';

export const challenges = defineStore('challengeStore', {
  state: () => ({
    desafios: localStorage.desafios ? JSON.parse(localStorage.desafios)
    :  
    [
    {id:0, nome:"Concluir 3 streaks", percentagem: 0, xps: "+100XP"},
    {id:1, nome:"Registar 3 ecoponto", percentagem: 0, xps: "+200XP"},
    {id:2, nome:"Posts em 20 ecopontos diferentes", percentagem: 0, xps: "+300XP"},
    {id:2, nome:"Participação em 5 eventos", percentagem: 33, xps: "+15XP"},
    ]
  }),
  getters: {
    getDesafios: (state) => { return state.desafios.data},
},
mutations: {
  SET_MESSAGE(state, payload) {
    state.message = payload;
  },
  
  SET_Challenges(state, payload) {
    console.log("STORE MUTATION Set_Challenges: " + payload.length);
    state.desafios = payload;
  },
},

  actions: {
    async getAllChallenges() {
      try {
        const challenges = await ChallengeService.fetchAllChallenges();
        this.setChallenges(challenges);
        this.updateLocalStorage()
      } catch (error) {
        this.setChallenges([]);
        this.setMessage(error);
        throw error;
      }
    },
    async deleteDesafio(id) {
      try {
         
         
          console.log(id)
          const deleteDesafio = await ChallengeService.deleteChallengeByID(id);
         console.log('Delete evento ')
        console.log(deleteDesafio)
          // commit('SET_USERS', users);
          //return Promise.resolve(users);
  }
      catch(error)
      {
        // console.log('STORE listUsers: ' + error);
          this.setEvents( []);
         this.setMessage(error);
         throw error; // Needed to continue propagating the error
        //return Promise.reject(error);
     }
  },
    updateLocalStorage() {
      localStorage.setItem('desafios', JSON.stringify(this.desafios));
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


  },
  setMessage(payload) {
    this.message = payload;
  },

  setChallenges(payload) {
    console.log("STORE MUTATION SET_USERS: " + payload.length);
    this.desafios = payload;
  },
  





  },




});