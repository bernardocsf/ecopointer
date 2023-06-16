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
              <tbody v-for="user in store2.orderByXp " :key="user.id">
                <tr  id="rt">
                  <td id="tdnumClassificacao">{{ user._id }}</td>
                  <td id="tdnameClassificacao">{{ user.nome }}</td>
                  <td id="tdxpsClassificacao">{{ user.username }}</td>
                  <td id="tdxpsClassificacao"><button @click="deleteUserBy(user._id)">X</button></td>

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
              <tbody v-for="evento in store1.orderByGostos " :key="evento.id">
                <tr  id="rt">
                  <td id="tdnumClassificacao">{{ evento._id }}</td>
                  <td id="tdnameClassificacao">{{ evento.nome }}</td>
                  
                  <td id="tdxpsClassificacao"><button @click="deleteEventBy(evento._id)">X</button></td>

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
              <tbody v-for="ecoponto in store.getBins"
  :key="ecoponto._id">
                <tr  id="rt">
                  <td id="tdnumClassificacao">{{ ecoponto._id }}</td>
                  <td id="tdnameClassificacao">{{ ecoponto.descricao }}</td>
                  
                  
                  <td id="tdxpsClassificacao"><button @click="deleteBinBy(ecoponto._id)">X</button></td>

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
              <tbody v-for="desafio in desafios " :key="desafio.id">
                <tr  id="rt">
                  <td id="tdnumClassificacao">{{ desafio._id }}</td>
                  <td id="tdnameClassificacao">{{ desafio.descDesafio }}</td>
                  
                  
                  <td id="tdxpsClassificacao"><button @click="deleteChallengeBy(desafio._id)">X</button></td>

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
import { toHandlers } from "vue";
import { challenges } from "../stores/challengeStore";
import { eventos } from "../stores/eventStore";
import { GoogleMap, Marker } from "vue3-google-map";
import { userStore } from "../stores/Userstore";
import Mapa from "../components/MapaHome.vue";
import Footer from "../components/Footer.vue";
import { ecopontos } from "../stores/ecopointStore";

import Navbar from "../components/NavBar.vue";

import { storeToRefs } from "pinia";

export default {
  data() {
    return {
      number: 0,
      isDisabled: false,
      message: "",
      loading: false,
      users: localStorage.users,
      desafios: localStorage.desafios,
      eventos: localStorage.eventos,
      ecopontos: localStorage.ecopontos
    };
  },
  components: {
    Navbar,
    Mapa,
    Footer,
  },
  setup() {
    const store = ecopontos();

    const store1 = eventos();
    const store2 = userStore();

    const store3 = challenges();

    // storeToRefs lets todoList keep reactivity

    return {
      store,
      store1,
      store2,
      store3,
    };
  },
  created() {},
  methods: {
    async getChallengesList() {
      this.$data.loading = true;

      try {
        await this.store3.getAllChallenges();
        console.log("AdminPage - GET USERS: " + this.store3.getDesafios.length);
        this.$data.desafios = this.store3.desafios.data;
        console.log(this.desafios);
      } catch (error) {
        console.log(error);
        this.$data.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      } finally {
        this.$data.loading = false;
      }
    },
    async getEventsList() {
      this.$data.loading = true;

      try {
        await this.store1.getAllEvents();
        console.log("AdminPage - GET USERS: " + this.store1.getEventos.length);
        this.$data.eventos = this.store1.eventos;
        console.log(this.eventos);
      } catch (error) {
        console.log(error);
        this.$data.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      } finally {
        this.$data.loading = false;
      }
    },

    disableButton() {
      this.isDisabled = true;
    },
    async getUsersList() {
      this.$data.loading = true;

      // console.log("AdminPage - GET USERS started...");
      try {
        await this.store2.getAllUsers();
        console.log("AdminPage - GET USERS: " + this.store2.getUsers.length);
        this.$data.users = this.store2.getUsers;
      } catch (error) {
        console.log(error);
        this.$data.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      } finally {
        this.$data.loading = false;
      }
    },
    async deleteUserBy(id) {
      this.$data.loading = true;

      // console.log("AdminPage - GET USERS started...");
      try {
        await this.store2.deleteUser(id);
        console.log("AdminPage - GET USERS: " + this.store2.getUsers.length);
        this.$data.users = this.store2.getUsers;
      } catch (error) {
        console.log(error);
        this.$data.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      } finally {
        this.$data.loading = false;
      }
    },
    async deleteEventBy(id) {
      this.$data.loading = true;

      // console.log("AdminPage - GET USERS started...");
      try {
        await this.store1.deleteEvento(id);
        
        this.$data.eventos = this.store1.getEventos;
      } catch (error) {
        console.log(error);
        this.$data.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      } finally {
        this.$data.loading = false;
      }
    },
    async deleteBinBy(id) {
      this.$data.loading = true;

      // console.log("AdminPage - GET USERS started...");
      try {
        await this.store.deleteEcoponto(id);
        
        this.$data.ecopontos = this.store.getBins;
      } catch (error) {
        console.log(error);
        this.$data.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      } finally {
        this.$data.loading = false;
      }
    },
    async deleteChallengeBy(id) {
      this.$data.loading = true;

      // console.log("AdminPage - GET USERS started...");
      try {
        await this.store3.deleteDesafio(id);
        
        this.$data.desafios = this.store3.getDesafios;
      } catch (error) {
        console.log(error);
        this.$data.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      } finally {
        this.$data.loading = false;
      }
    },
    async getBinsList() {
      this.$data.loading = true;

      try {
        await this.store.getAllBins();
        console.log(" - GET Bins: " + this.store.getBins);
        this.$data.ecopontos = this.store.ecopontos;
        console.log(this.ecopontos);
      } catch (error) {
        console.log(error);
        this.$data.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      } finally {
        this.$data.loading = false;
      }
    },
 
  
  disableButton() {
    this.isDisabled = true;
  },
  },
  
  created
  () {
    this.getUsersList();
    this.getChallengesList();
    this.getEventsList();
    this.getBinsList()
  },
};
</script>

<style scoped>
.homePage {
  background-color: #c6ddc5;
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
  color: #134c67;
}

#subTitleUm {
  font-family: "Keedy Sans";
  font-size: 20px;
  color: #134c67;
  vertical-align: super;
}

tr {
  border-bottom: 20px solid #c6ddc5;
  font-size: 20px;
  color: #ffffff;
  background-color: #95c697;
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
  color: #ffffff;
  background-color: #95c697;
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
  color: #43804b;
  background-color: #ffffff;
  text-align: center;
  width: 20%;
}

#progressBarId {
  display: block;
  margin: auto;
}

.progress {
  width: 40%;
  font-size: 17px;
  --bs-progress-height: 2rem;
  --bs-progress-font-size: 1rem;
  --bs-progress-bg: #c6ddc5;
  --bs-progress-bar-color: #fff;
  --bs-progress-bar-bg: #0d6efd;
  display: flex;
  overflow: hidden;
}

.progress-bar {
  background-color: #43804b;
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
  color: #134c67;
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
  background-color: #134c67;
  border-color: #134c67;
  border-width: 3px;
}

#btnGlobal {
  font-size: 20px;
  color: #134c67;
  border-color: #134c67;
  background-color: #c6ddc5;
  border-width: 3px;
}

#btnGlobal:hover {
  color: #f7f4f3;
  background-color: #134c67;
}

#tdnumClassificacao {
  width: 10%;
  color: #f7f4f3;
  background-color: #95c697;
  text-align: center;
}

#tdnameClassificacao {
  width: 30%;
  color: #95c697;
  background-color: #f7f4f3;
}

#tdxpsClassificacao {
  width: 20%;
  font-size: 24px;
  color: #59985f;
  background-color: #f7f4f3;
  text-align: right;
}

#footer {
  display: block;
  margin: auto;
  width: 60%;
}
</style>
