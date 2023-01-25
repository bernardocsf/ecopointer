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
        <div id="table">
          <table class="table">
            <tbody>
              <tr id="tr" v-for="desafio in store.getDesafios" :key="desafio.id">
                <td id="tdDesafio">{{ desafio.nome }}</td>
                <td id="tdPorcentagem">
                  <div id="progressBar" class="progress">
                    <div class="progress-bar" role="progressbar" style="{{ desafio.porcentagem }}" aria-valuenow="25"
                      aria-valuemin="0" aria-valuemax="100">{{ desafio.porcentagem }}</div>
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
    </b-container>
  </div>
</template>


<script>
import { toHandlers } from 'vue';
import { challenges } from '../stores/challengeStore';
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
}

#tituloDiv {
  padding-left: 5em;
  padding-top: 2em;

}

#table {
  padding-left: 5em;
  padding-right: 5em;
  padding-top: 1em;
  padding-bottom: 1em;
  font-family: "Keedy Sans";
}

#tr {
  border-style: none;
  padding: 2em;
  font-size: 20px;
  color: #FFFFFF;
  background-color: #95C697;
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



.progress {
  width: 40%;
  font-size: 15px;
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
}

#tdXps {

  border-style: none;
  color: #43804B;
  background-color: #ffffff;
  text-align: center;

  width: 20%;
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

#imgpoint {
  vertical-align: text-top;
}

#mapaDiv {
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 5em;
  padding-right: 5em;
}
</style>