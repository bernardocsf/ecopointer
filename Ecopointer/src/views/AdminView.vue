<template>
    <div class="homePage">
      <b-container fluid>
        <b-container>
          <Navbar />
        </b-container>
        
       
        
        
        
        <div id="tituloDiv">
          <b-container>
            <span id="titleUm">Utilizadores</span>
          </b-container>
        </div>
        
  
  
        <b-container>
          <div id="tableClass">
            <table class="table">
              <tbody v-for="user in store2.getUsers " :key="user.id">
                <tr  id="rt">
                  <td id="tdnumClassificacao">{{ user.id }}</td>
                  <td id="tdnameClassificacao">{{ user.name }}</td>
                  <td id="tdxpsClassificacao">{{ user.username }}</td>
                  <td id="tdxpsClassificacao"><button @click="store2.eliminarUser(user.id)">X</button></td>

                </tr>
              </tbody>
            </table>
          </div>
        </b-container>

        <div id="tituloDiv">
          <b-container>
            <span id="titleUm">Eventos</span>
          </b-container>
        </div>
        
  
  
        <b-container>
          <div id="tableClass">
            <table class="table">
              <tbody v-for="evento in store1.orderById() " :key="evento.id">
                <tr  id="rt">
                  <td id="tdnumClassificacao">{{ evento.id }}</td>
                  <td id="tdnameClassificacao">{{ evento.nome }}</td>
                  
                  <td id="tdxpsClassificacao"><button @click="store1.eliminarEvento(evento.id)">X</button></td>

                </tr>
              </tbody>
            </table>
          </div>
        </b-container>
        <div id="tituloDiv">
          <b-container>
            <span id="titleUm">Ecopontos</span>
          </b-container>
        </div>
        
  
  
        <b-container>
          <div id="tableClass">
            <table class="table">
              <tbody v-for="ecoponto in store.orderById() " :key="ecoponto.id">
                <tr  id="rt">
                  <td id="tdnumClassificacao">{{ ecoponto.id }}</td>
                  <td id="tdnameClassificacao">{{ ecoponto.nome }}</td>
                  
                  
                  <td id="tdxpsClassificacao"><button @click="store.eliminarEcoponto(ecoponto.id)">X</button></td>

                </tr>
              </tbody>
            </table>
          </div>
        </b-container>
        <div id="tituloDiv">
          <b-container>
            <span id="titleUm">Desafios</span>
          </b-container>
        </div>
        <b-container>
          <div id="tableClass">
            <table class="table">
              <tbody v-for="desafio in store3.orderById() " :key="desafio.id">
                <tr  id="rt">
                  <td id="tdnumClassificacao">{{ desafio.id }}</td>
                  <td id="tdnameClassificacao">{{ desafio.nome }}</td>
                  
                  
                  <td id="tdxpsClassificacao"><button @click="store3.eliminarDesafio(desafio.id)">X</button></td>

                </tr>
              </tbody>
            </table>
          </div>
        </b-container>


        
  
  
        <div id="footer">
          <b-container>
            <Footer />
          </b-container>
        </div>
  
      </b-container>
    </div>
  </template>
  
  
  <script>
  import { toHandlers } from 'vue';
  import { challenges } from '../stores/challengeStore';
  import { eventos } from '../stores/eventStore';
  import { GoogleMap, Marker } from "vue3-google-map";
  import { userStore } from "../stores/Userstore"
  import Mapa from "../components/MapaHome.vue"
  import Footer from '../components/Footer.vue';
  import{ ecopontos} from "../stores/ecopointStore"
  
  import Navbar from '../components/NavBar.vue'
  
  import { storeToRefs } from "pinia";
  
  export default {
    data() {
      return {
        number: 0,
        isDisabled: false
      }
  
    },
    components: {
      Navbar,
      Mapa,
      Footer
    },
    setup() {
      const store = ecopontos();
  
      const store1 = eventos();
      const store2 = userStore();
      store1.updateLocalStorage();
      const store3= challenges();
      
  
      // storeToRefs lets todoList keep reactivity
  
      return {
        store,
        store1,
        store2,
        store3
  
      };
  
    },
    created() {
  
    },
    methods: {
      disableButton() {
        this.isDisabled = true;
      }
    }
  
  
  };
  
  </script>
  
  
  <style scoped>
  .homePage {
    background-color: #C6DDC5;
  }
  
  #tituloDiv {
    padding-left: 5em;
    padding-top: 2em;
  }
  
  #imgpoint {
    vertical-align: text-top;
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
    vertical-align: super;
  }
  
  tr {
    border-bottom: 20px solid #C6DDC5;
    font-size: 20px;
    color: #FFFFFF;
    background-color: #95C697;
  }
  
  #tableId {
    padding-left: 5em;
    padding-right: 5em;
    padding-top: 1em;
    padding-bottom: 1em;
    font-family: "Keedy Sans";
  }
  
  #tdDesafio {
    border-style: none;
    font-size: 20px;
    color: #FFFFFF;
    background-color: #95C697;
    width: 50%;
  }
  
  #tdPorcentagem {
    border-style: none;
    background-color: #ffffff;
    width: 30%;
    margin-left: 50px;
  }
  
  #tdXps {
    border-style: none;
    color: #43804B;
    background-color: #ffffff;
    text-align: center;
    width: 20%;
  }
  
  #progressBarId {
    display: block;
    margin: auto
  }
  
  .progress {
    width: 40%;
    font-size: 17px;
    --bs-progress-height: 2rem;
    --bs-progress-font-size: 1rem;
    --bs-progress-bg: #C6DDC5;
    --bs-progress-bar-color: #fff;
    --bs-progress-bar-bg: #0d6efd;
    display: flex;
    overflow: hidden;
  }
  
  .progress-bar {
    background-color: #43804B;
    height: 100%;
  }
  
  #cardGroups {
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 5em;
    padding-right: 5em;
  }
  
  .card {
    font-family: "Keedy Sans";
    color: #134C67;
    border-radius: 15px;
  }
  
  .card-title {
    font-family: "Keedy Sans";
    font-size: 20px;
  }
  
  #mapa {
    padding-top: 2em;
    padding-bottom: 2em;
    padding-right: 5em;
  }
  
  #tableClass {
    padding-left: 5em;
    padding-right: 5em;
    font-family: "Keedy Sans";
    width: 50%;
  }
  
  #btnsDiv {
    font-family: "Keedy Sans";
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 5em;
    padding-right: 5em;
  }
  
  #btnMensal {
    font-size: 20px;
    background-color: #134C67;
    border-color: #134C67;
    border-width: 3px
  }
  
  #btnGlobal {
    font-size: 20px;
    color: #134C67;
    border-color: #134C67;
    background-color: #C6DDC5;
    border-width: 3px;
  }
  
  #btnGlobal:hover {
    color: #F7F4F3;
    background-color: #134c67;
  }
  
  #tdnumClassificacao {
    width: 10%;
    color: #F7F4F3;
    background-color: #95C697;
    text-align: center;
  }
  
  #tdnameClassificacao {
    width: 30%;
    color: #95C697;
    background-color: #F7F4F3;
  }
  
  #tdxpsClassificacao {
    width: 20%;
    font-size: 24px;
    color: #59985F;
    background-color: #F7F4F3;
    text-align: right;
  }
  
  #footer {
    display: block;
    margin: auto;
    width: 60%;
  }
  </style>