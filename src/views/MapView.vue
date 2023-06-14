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
              <span><img id="imgpoint" src="../assets/point.webp" /></span>
              <span id="subTitleUm">Filtra o mapa e encontra o ecoponto que procuras</span>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div id="container">
        <div id="left">
          <div id="mapa">
            <b-container>
              <Mapa />
            </b-container>
          </div>
        </div>

        <div id="right">
          <div id="tituloDive">
            <b-container>
              <table class="table">
                <tbody>
                  <tr>
                    <td>
                      <input
                        v-model="ecoponto.descricao"
                        type="text"
                        class="form-control"
                        placeholder="Descrição"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        v-model="ecoponto.localizacao.latitude"
                        type="number"
                        class="form-control"
                        placeholder="Latitude"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        v-model="ecoponto.localizacao.longitude"
                        type="number"
                        class="form-control"
                        placeholder="Longitude"
                      />
                    </td>
                  </tr>
                </tbody>
                <tr>
                    <td>
                      <input
                        v-model="ecoponto.imagem"
                        type="text"
                        class="form-control"
                        placeholder="Imagem"
                      />
                    </td>
                  </tr>
              </table>
              <button
                @click="handleAddBin"
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Adicionar
              </button>
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
import { ref } from 'vue';
import { ecopontos } from "../stores/ecopointStore";
import Navbar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Mapa from "../components/MapaHome.vue";

class Bin {
  constructor(descricao, localizacao, user,imagem) {
    this.descricao = descricao;
    this.localizacao = localizacao;
    this.user = user;
    this.imagem= imagem
  }
}

export default {
  components: {
    Navbar,
    Mapa,
    Footer,
  },
  setup() {
    const ecoponto = ref(new Bin("", { latitude: 0, longitude: 0 }, "user"));
    const store = ecopontos();

    async function handleAddBin() {
      ecoponto.value.localizacao.latitude = parseFloat(ecoponto.value.localizacao.latitude);
      ecoponto.value.localizacao.longitude = parseFloat(ecoponto.value.localizacao.longitude);

      if (ecoponto.value.descricao && ecoponto.value.localizacao.latitude && ecoponto.value.localizacao.longitude && ecoponto.value.imagem) {
        try {
          await store.add(ecoponto.value);
          console.log("Ecoponto adicionado com sucesso");
        } catch (error) {
          console.log(error);
          // Trate o erro adequadamente
        }
      } else {
        console.log("Preencha todos os campos obrigatórios");
      }
    }

    return {
      ecoponto,
      handleAddBin,
      store,
    };
  },
};
</script>

<style scoped>
.mapaPage {
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
  width: 70%;
}

#right {
  width: 30%;
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

#tituloDive {
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 1em;
  margin-bottom: 1em;
}

#footer {
  display: block;
  margin: auto;
  width: 60%;
}
</style>
