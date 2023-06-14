<template>
  <div class="homePage">
    <b-container fluid>
      <b-container>
        <Navbar />
      </b-container>
      <div id="tituloDiv">
        <b-container>
          <b-row>
            <b-col>
              <span id="titleUm">Desafios da semana </span>
              <img id="imgpoint" src="../assets/point.webp" />
              <span id="subTitleUm"> Novos desafios em menos de 72 horas</span>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <b-container>
        <div id="tableId">
          <table class="table">
            <tbody>
              <tr id="tr" v-for="(desafio, number) in desafios" :key="number">
                <td id="tdDesafio">{{ desafio.descDesafio }}</td>
                <td id="tdPorcentagem">
                  <div id="progressBarId" class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      :style="{ width: 100 + '%' }"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {{ 100 }}%
                    </div>
                  </div>
                </td>
                <td id="tdXps">{{ desafio.xp }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-container>
      <div id="tituloDiv">
        <b-container>
          <b-row>
            <b-col>
              <span id="titleUm">Alguns eventos à tua espera </span>
              <span><img id="imgpoint" src="../assets/point.webp" /></span>
              <span id="subTitleUm"> Recicla em sociedade</span>
            </b-col>
          </b-row>
        </b-container>
      </div>
     
      <!-- <b-container>
        <div id="cardGroups" class="d-flex">
          <div
            @load="store1.updateLocalStorage()"
            v-for="(evento, number) in store1.orderByGostos"
            class="p-2"
            :key="number"
          >
            <div v-if="number <= 3" class="card">
              <img
                class="card-img-top"
                :src="evento.imagem"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{{ evento.nome }}</h5>

                <p class="card-text">{{ evento.data }}</p>
                <p class="card-text">{{ number + 1 }}</p>
                <div id="d-flexCards" class="d-flex">
                  <div class="p-2">
                    <button
                      v-bind:disabled="isDisabled"
                      @click="store1.addGosto(evento), disableButton()"
                      style="border: none; background-color: #ffffff"
                    >
                      <img src="../assets/gosto.webp" alt="" />
                    </button>
                    {{ evento.gostos }}
                  </div>
                  <div class="p-2">
                    <button style="border: none; background-color: #ffffff">
                      <a href="/eventos"
                        ><img src="../assets/botaosabermais.svg"
                      /></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-container> -->

      <div id="tituloDiv">
        <b-container>
          <b-row>
            <b-col>
              <h1>teste</h1>
              <span id="titleUm">Explora o mapa </span>
              <span><img id="imgpoint" src="../assets/point.webp" /></span>
              <span id="subTitleUm">
                Para explorar melhor o mapa, carrega no botão verde</span
              >
            </b-col>
          </b-row>
        </b-container>
        <div id="mapa">
          <b-container>
            <mapa />
          </b-container>
        </div>
      </div>

      <div id="container">
        <div id="left">
          <b-container>
            <div id="tituloDiv">
              <b-container>
                <span id="titleUm">Tabela de líderes</span>
              </b-container>
            </div>
            <div id="btnsDiv">
              <b-container>
                <b-row>
                  <b-col>
                    <div class="d-flex">
                      <div class="p-2">
                        <a id="btnMensal" class="btn btn-primary">Mensal</a>
                      </div>
                      <div class="p-2">
                        <button
                          id="btnGlobal"
                          type="button"
                          class="btn btn-primary"
                        >
                          Global
                        </button>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </div>

            <div id="tableClass">
              <table class="table">
                <tbody v-for="(user, number) in store2.orderByXp" :key="number">
                  <tr v-if="number <= 4" id="rt">
                    <td id="tdnumClassificacao">{{ number + 1 }}o</td>
                    <td id="tdnameClassificacao">{{ user.nome }}</td>
                    <td id="tdxpsClassificacao">{{ user.xp }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-container>
        </div>
        <div id="right">
          <b-container>
            <div id="tableClass">
              <img id="imgClassificacao" src="../assets/leaderboard.webp" />
            </div>
          </b-container>
        </div>
      </div>

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
    };
  },
  components: {
    Navbar,
    Mapa,
    Footer,
  },
  setup() {
    const store = challenges();

    const store1 = eventos();
    const store2 = userStore();
    store1.updateLocalStorage();

    // storeToRefs lets todoList keep reactivity

    return {
      store,
      store1,
      store2,
    };
  },
  methods: {
    async getChallengesList() {
      this.$data.loading = true;

      try {
        await this.store.getAllChallenges();
        console.log("AdminPage - GET USERS: " + this.store.getDesafios.length);
        this.$data.desafios = this.store.desafios.data;
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
  },

  mounted() {
    this.getUsersList();
    this.getChallengesList();
    this.getEventsList();
  },
};
</script>

<style scoped>
.homePage {
  background-color: #c6ddc5;
}

#container {
  display: flex;
  width: 100%;
}

#left {
  width: 60%;
}

#right {
  width: 40%;
}

#d-flexCards {
  justify-content: space-between;
  align-items: center;
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
  background-color: #95c697;
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
  width: 100%;
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

#imgClassificacao {
  width: 100%;
  padding-top: 4em;
  padding-bottom: 1em;
}

#footer {
  display: block;
  margin: auto;
  width: 60%;
}
</style>
