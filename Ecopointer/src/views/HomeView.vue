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
        <div  id="cardGroups" class="d-flex">
          <div @load="store1.updateLocalStorage()" v-for="evento in store1.eventos " class="p-2" :key="evento.id">
            <div v-if="evento.id<=3" class="card">
              <img class="card-img-top" :src="evento.imagem" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{ evento.nome }}</h5>

                <p class="card-text">{{ evento.data }}</p>
                <p class="card-text"> <button style="border:none " ><img src="src/assets/gosto.png" alt=""></button> {{ evento.gostos }}</p><i class="bi bi-heart"></i>


                <a href="/eventos" class="btn btn-primary">Go somewhere</a>
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
        <div id="mapa">
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
   
            <tbody v-for="(user, number) in store2.orderByXp " :key ="number">
              <tr v-if="number<=4" id="rt"  >
                <td id="tdnumClassificacao">{{ number+ 1 }}o</td>
                <td id="tdnameClassificacao">{{ user.name }}</td>
                <td id="tdxpsClassificacao">{{ user.xps }}</td>
                
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

import Navbar from '../components/NavBar.vue'

import { storeToRefs } from "pinia";

export default {
  data() {
    return{
      number:0
    }
 
  },
  components: {
    Navbar,
    Mapa,
    Footer
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
  created() {

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