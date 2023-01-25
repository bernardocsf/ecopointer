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
              <img id="imgpoint" src="../assets/point.png">
              <span id="subTitleUm"> Novos desafios em menos de 72 horas</span>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <b-container>
        <div id="tableId">
          <table class="table">
            <tbody>
              <tr id="tr" v-for="desafio in store.getDesafios" :key="desafio.id">
                <td id="tdDesafio">{{ desafio.nome }}</td>
                <td id="tdPorcentagem">
                  <div id="progressBarId" class="progress">
                    <div class="progress-bar" role="progressbar" :style="{ width: desafio.percentagem + '%' }"
                      aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ desafio.percentagem }}%</div>
                  </div>
                </td>
                <td id="tdXps">{{ desafio.xps }}</td>
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
              <span><img id="imgpoint" src="../assets/point.png"></span>
              <span id="subTitleUm"> Recicla em sociedade</span>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <b-container>
        <div id="cardGroups" class="d-flex">
          <div class="p-2">
            <div class="card">
              <img class="card-img-top" src="../assets/fotocard.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Recolha de lixo no Porto</h5>
                <p class="card-text">14/12/2022</p>
                <p class="card-text">36</p><i class="bi bi-heart"></i>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="p-2">
            <div class="card">
              <img class="card-img-top" src="../assets/fotocard.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Recolher lixo na praia</h5>
                <p class="card-text">14/12/2022</p>
                <p class="card-text">24</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="p-2">
            <div class="card">
              <img class="card-img-top" src="../assets/fotocard.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Plantação de árvores</h5>
                <p class="card-text">14/12/2022</p>
                <p class="card-text">16</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="p-2">
            <div class="card">
              <img class="card-img-top" src="../assets/fotocard.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Plantação de árvores</h5>
                <p class="card-text">14/12/2022</p>
                <p class="card-text">16</p><i class="bi bi-heart"></i>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </b-container>
      <div id="tituloDiv">
        <b-container>
          <b-row>
            <b-col>
              <span id="titleUm">Explora o mapa </span>
              <span><img id="imgpoint" src="../assets/point.png"></span>
              <span id="subTitleUm"> Para explorar melhor o mapa, carrega no botão verde</span>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div id="mapaDiv">
        <b-container>
          <b-row>
            <b-col>
              <MapaHome />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div>
        <div id="tituloDiv">
          <b-container>
            <b-row>
              <b-col>
                <span id="titleUm">Tabela de líderes</span>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div id="btnsDiv">
          <b-container>
            <b-row>
              <b-col>
                <div class="d-flex">
                  <div class="p-2"><a href="#" class="btn btn-primary">Mensal</a></div>
                  <div class="p-2"><button type="button" class="btn btn-outline-primary">Global</button></div>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>

      <b-container>
        <div id="tableClass">
          <table class="table">
            <tbody>
              <tr id="rt" v-for="user in store1.getUsers" :key="user.id">
                <td id="tdnumClassificacao">{{ user.id + 1 }}o</td>
                <td id="tdnameClassificacao">{{ user.name }}</td>
                <td id="tdxpsClassificacao">{{ user.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-container>
    </b-container>/
  </div>
</template>


<script>
import { toHandlers } from 'vue';
import { challenges } from '../stores/challengeStore';
import { userStore } from '../stores/Userstore';
import MapaHome from "../components/MapaHome.vue";
import Navbar from '../components/NavBar.vue'

import { storeToRefs } from "pinia";

export default {
  data() {

  },
  components: {
    MapaHome,
    Navbar,
  },
  setup() {
    const store = challenges();
    const store1 = userStore();
    // storeToRefs lets todoList keep reactivity

    return {
      store,
      store1
    };

  },
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

#btnsDiv {
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 5em;
  padding-right: 5em;
}

#tableClass {
  padding-left: 5em;
  padding-right: 5em;
  padding-top: 1em;
  padding-bottom: 1em;
  font-family: "Keedy Sans";
  width: 50%;
}

#tdnumClassificacao {
  border-style: none;
  font-size: 20px;
  color: #FFFFFF;
  background-color: #95C697;
  width: 10%;
  text-align: center;
}

#tdnameClassificacao {
  border-style: none;
  font-size: 20px;
  color: #95C697;
  background-color: #F7F4F3;
  width: 50%;
}

#tdxpsClassificacao {
  border-style: none;
  font-size: 20px;
  color: #43804B;
  background-color: #F7F4F3;
  width: 20%;
  text-align: right;
}

#mapaDiv {
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 5em;
  padding-right: 5em;
}
</style>