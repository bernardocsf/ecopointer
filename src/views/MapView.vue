<template>
  <div class="mapaPage">
    <b-container fluid>
      <b-container>
        <Navbar />
      </b-container>

      <div id="tituloDiv">
        <b-container>
          <b-row>
            <b-col>
              <span id="titleUm">O teu mapa </span>
              <span><img id="imgpoint" src="../assets/point.png"></span>
              <span id="subTitleUm"> Filtra o mapa e encontra o ecoponto que procuras</span>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div id="container">
        <div id="left">

          <div id="mapa">
            <b-container>
              <mapa />
            </b-container>
          </div>
        </div>

        <div id="right">
          <div id="tituloDive">
            <b-container>
              <table class="table">
                <tbody>
                  <tr>
                    <td><input v-model="nome" type="text" class="form-control" placeholder="nome"></td>
                  </tr>
                  <tr>
                    <td><input v-model="morada" type="text" class="form-control" placeholder="morada"></td>
                  </tr>
                  <tr>
                    <td><input v-model="lat" type="number" class="form-control" placeholder="latitude"></td>
                  </tr>
                  <tr>
                    <td><input v-model="lng" type="number" class="form-control" placeholder="longitude"></td>
                  </tr>
                </tbody>
                <button @click="store.addEcoponto(nome, morada, lat, lng)" type="submit" class="btn btn-primary"
                  data-bs-dismiss="modal">Adicionar</button>
              </table>
            </b-container>
          </div>
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
import { toHandlers } from 'vue';
import { ecopontos } from '../stores/ecopointStore';
import Navbar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue';
import Mapa from "../components/MapaHome.vue"

import { storeToRefs } from "pinia";

export default {
  data() {
  },
  components: {
    Navbar,
    Mapa,
    Footer
  },
  setup() {
    const store = ecopontos();
    // storeToRefs lets todoList keep reactivity

    return {
      store,
    };
  },
};
</script>


<style scoped>
.mapaPage {
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
  width: 70%;
}

#right {
  width: 30%;
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
  color: #134C67;
}

#subTitleUm {
  font-family: "Keedy Sans";
  font-size: 20px;
  color: #134C67;
  vertical-align: super;
}

#painelFilters {
  background-color: #95C697;
  border-radius: 5px;
  width: 350px;
  height: 450px;
  font-family: 'Keedy Sans';
  color: #134C67;
  font-size: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#filterbox {
  color: #F7F4F3;
  text-align: center;
}

#filtrarbtn {
  background-color: #134C67;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#footer {
  display: block;
  margin: auto;
  width: 60%;
}
</style>