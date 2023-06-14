<template>
  <div class="perfilPage">
    <b-container fluid>
      <b-container>
        <Navbar />
      </b-container>

      <div id="container">
        <div id="left">
          <b-container>
            <div id="tablePerfil">
              <table class="table">
                <tbody>
                  <tr id="rt">
                    <td id="tdfotoPerfil">
                      <img
                        src="../assets/perfil.webp"
                        id="fotoPerfil"
                        class="card-img-top"
                      />
                    </td>
                  </tr>

                  <tr v-if="number <= 0">
                    <td id="tdusernamePerfil">@{{ response.user }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-container>
        </div>

        <div id="right">
          <b-container>
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
      </div>

      <div id="tituloDiv">
        <b-container>
          <span id="titleUm">As tuas publicações</span>
        </b-container>
      </div>
      <div id="btnsDiv">
        <b-container>
          <b-row>
            <b-col>
              <div class="d-flex">
                <div class="p-2">
                  <a id="btnMensal" class="btn btn-primary">Posts</a>
                </div>
              </div>
              <div id="cardGroups" class="d-flex flex-wrap">
                <div    v-for="(ecoponto, number) in store3.getBins"
                    
                    :key="number" id="cardGroups" >
                  <div v-if="response && response.id === ecoponto.user"
                    
                  >
                    <div class="p-1"
                     >
                      <div class="card">
                        <img
                          class="card-img-top"
                          :src="ecoponto.imagem"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <h5 class="card-title">{{ ecoponto.descricao }}</h5>
                          <!-- Outros elementos do card -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
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
import { ecopontos } from "../stores/ecopointStore";
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
      ecopontos: localStorage.ecopontos,
      response: JSON.parse(localStorage.getItem("user")),
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
    const store3 = ecopontos();

    // storeToRefs lets todoList keep reactivity

    return {
      store,
      store1,
      store2,
      store3,
    };
  },
  methods: {
    disableButton() {
      this.isDisabled = true;
    },
    async getBinsList() {
      this.$data.loading = true;

      try {
        await this.store3.getAllBins();
        console.log(" - GET Bins: " + this.store3.getBins);
        this.$data.ecopontos = this.store3.ecopontos;
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
  },
  created() {
    this.getBinsList();
  },
};
</script>

<style scoped>
.perfilPage {
  background-color: #c6ddc5;
}

#container {
  display: flex;
  width: 100%;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 5em;
  padding-right: 5em;
}

#left {
  width: 50%;
}

#right {
  width: 50%;
}

#tituloDiv {
  padding-left: 5em;
  padding-top: 2em;
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

#tablePerfil {
  padding-left: 5em;
  padding-right: 5em;
  font-family: "Keedy Sans";
  width: 100%;
}

tr {
  border-bottom: 5px solid #c6ddc5;
  font-size: 20px;
}

#fotoPerfil {
  background-color: #c6ddc5;
  display: block;
  margin: auto;
  width: 40%;
  border-radius: 50%;
}

#tdfotoPerfil {
  background-color: #c6ddc5;
}

#tdnamePerfil {
  width: 30%;
  color: #134c67;
  background-color: #c6ddc5;
  text-align: center;
}

#tdusernamePerfil {
  width: 30%;
  color: #134c67;
  background-color: #c6ddc5;
  text-align: center;
}

#tableClass {
  padding-left: 5em;
  padding-right: 5em;
  font-family: "Keedy Sans";
  width: 100%;
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

#progressBarId {
  display: block;
  margin: auto;
}

#tableNivel {
  padding-left: 5em;
  padding-right: 5em;
  font-family: "Keedy Sans";
  width: 100%;
}
.progress {
  width: 100%;
  font-size: 17px;
  --bs-progress-height: 3rem;
  --bs-progress-font-size: 1rem;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
}

.progress-bar {
  background-color: #43804b;
  height: 100%;
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

#footer {
  display: block;
  margin: auto;
  width: 60%;
}
</style>
