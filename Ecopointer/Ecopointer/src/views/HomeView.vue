<template>
    <div class="homePage">
      <b-container fluid>
        <b-container>
          <b-row>
            <b-col>
              <Navbar />
            </b-col>
          </b-row>
        </b-container>
        <b-container id="desafios">
          <b-row>
            <b-col>
              <span id="titleUm">Desafios da semana</span>
              <span id="subTitleUm">Novos desafios em menos de 72 horas</span>
            </b-col>
          </b-row>
        </b-container>
  
      </b-container>
      <div>
        <table class="table">
    <thead>
      <tr>
        
        <th scope="col">desafio</th>
        
      </tr>
    </thead>
    <tbody>
      <tr v-for="desafio in store.getDesafios">
       
        <td>{{ desafio.nome }}</td>
        
      </tr>
      
      
    </tbody>
  </table>
      </div>
    </div>
  </template>
  
  
  <script>
  import { toHandlers } from 'vue';
  import { challenges } from '../stores/challengeStore';
 
  import Navbar from '../components/NavBar.vue'
  
  import { storeToRefs } from "pinia";
  
  export default {
    data() {
    },
    components: {
      Navbar,
    },
    setup() {
      const store = challenges();
      // storeToRefs lets todoList keep reactivity
  
      return {
        store
      };
    },
  };
  </script>
  
  
  <style scoped>
  .homePage {
    background-color: #C6DDC5;
    background-size: cover;
    height: 2838px;
    width: 100%;
  }
  
  #desafios {
    margin: auto;
    width: 50%;
  }
  
  #titleUm {
    font-family: "Keedy Sans";
    font-size: 45px;
    color: #134C67;
  }
  
  #subTitleUm {
    font-family: "Keedy Sans";
    font-size: 20px;
    color: #134C67;
  }
  </style>