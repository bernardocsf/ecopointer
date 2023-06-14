import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { BinsService } from '../services/bins.service';
export const ecopontos = defineStore("ecoponto", {
  state: () => ({
    ecopontos: localStorage.ecopontos
    ? JSON.parse(localStorage.ecopontos)
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
  getters: {
    getBins: (state) => {
      return state.ecopontos.ecoponto;

    },
    
  },
  actions: {async getAllBins() {
    try {
      const bins = await BinsService.fetchAllBins();
      this.setBins(bins);
      this.updateLocalStorage()
    } catch (error) {
      this.setBins([]);
      this.setMessage(error);
      throw error;
    }
  },
  async add(ecoponto) {
    try {
      console.log( ecoponto)
      const response = await BinsService.addBin(ecoponto);
      this.setMessage(response.message);
    } catch (error) {
      console.log('STORE REGISTER FAILS');
      console.log(error);
      throw error;
    }
  },
  async deleteEcoponto(id) {
    try {
       
       
        console.log(id)
        const deleteEcoponto = await BinsService.deleteBinByID(id);
       console.log('Delete evento ')
      console.log(deleteEcoponto)
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
    orderById: function() {
  

  
      this.ecopontos = ecopontos.ecoponto.sort((a, b) => a._id-b._id);
      this.updateLocalStorage()
      return this.ecopontos
      
      
      
   
     
   
   },
   eliminarEcoponto(ecoponto){
    //this.getuserByid(user.id)
    this.ecopontos.splice(ecoponto, 1);
    this.updateLocalStorage()

    
  },
  setMessage(payload) {
    this.message = payload;
  },

  setBins(payload) {
    console.log("STORE MUTATION Bins: " + payload.length);
    this.ecopontos = payload;
  },
}})