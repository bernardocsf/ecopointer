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
                <tbody >
                  <tr  id="rt">
                    <td id="tdfotoPerfil"><img src="../assets/perfil.webp" id="fotoPerfil" class="card-img-top"></td>
                  </tr>
                
                  <tr v-if="number <= 0">
                    <td id="tdusernamePerfil">@{{ nome }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-container>
        </div>

        <div id="right">
          <b-container>
            <div id="tableNivel">
              <table class="table">
                <tbody v-for="(user, number) in store2.orderByXp " :key="number">
                  <tr v-if="number <= 0" id="rt">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">60%</div>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-container>


          <b-container>
            <div id="tableClass">
              <table class="table">
                <tbody v-for="(user, number) in store2.orderByXp " :key="number">
                  <tr v-if="number <= 4" id="rt">
                    <td id="tdnumClassificacao">{{ number+ 1 }}o</td>
                    <td id="tdnameClassificacao">{{ user.name }}</td>
                    <td id="tdxpsClassificacao">{{ user.xps }}</td>
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
                <div class="p-2"><a id="btnMensal" class="btn btn-primary">Posts</a></div>
                <div class="p-2"><button id="btnGlobal" type="button" class="btn btn-primary">Eventos</button></div>
              </div>
              <div class="d-flex">
                <div class="p-2"><a id="btnMensal" class="btn btn-primary">Publicadas</a></div>
                <div class="p-2"><button id="btnGlobal" type="button" class="btn btn-primary">Em suspenso</button></div>
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
import { toHandlers } from 'vue';
import { challenges } from '../stores/challengeStore';
import { eventos } from '../stores/eventStore';
import { GoogleMap, Marker } from "vue3-google-map";
import { userStore } from "../stores/Userstore"
import Mapa from "../components/MapaHome.vue"
import Footer from '../components/Footer.vue';

import Navbar from '../components/NavBar.vue'

import { storeToRefs } from "pinia";

export default {
  data() {
    return {
      number: 0,
      isDisabled: false,
      nome: localStorage.getItem("userLogado"),
    }

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
    store1.updateLocalStorage()

    // storeToRefs lets todoList keep reactivity

    return {
      store,
      store1,
      store2

    };

  },
  methods: {
    disableButton() {
      this.isDisabled = true;
    }
  },
  


}

</script>


<style scoped>
.perfilPage {
  background-color: #C6DDC5;
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
  color: #134C67;
}

#subTitleUm {
  font-family: "Keedy Sans";
  font-size: 20px;
  color: #134C67;
  vertical-align: super;
}

#tablePerfil {
  padding-left: 5em;
  padding-right: 5em;
  font-family: "Keedy Sans";
  width: 100%;
}

tr {
  border-bottom: 5px solid #C6DDC5;
  font-size: 20px;
}

#fotoPerfil {
  background-color: #C6DDC5;
  display: block;
  margin: auto;
  width: 40%;
  border-radius: 50%;
}

#tdfotoPerfil {
  background-color: #C6DDC5;
}

#tdnamePerfil {
  width: 30%;
  color: #134c67;
  background-color: #C6DDC5;
  text-align: center;
}

#tdusernamePerfil {
  width: 30%;
  color: #134c67;
  background-color: #C6DDC5;
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

#progressBarId {
  display: block;
  margin: auto
}

#tableNivel{
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
  background-color: #FFFFFF;
  display: flex;
  overflow: hidden;
}

.progress-bar {
  background-color: #43804B;
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


#footer {
  display: block;
  margin: auto;
  width: 60%;
}
</style>