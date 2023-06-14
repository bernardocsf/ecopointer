<template>
    <div class="eventoPage">
        <b-container fluid>
            <b-container>
                <Navbar />
            </b-container>

            <div id="header">
                <b-container>
                    <button type="button" id="btnCriarEvento" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#criarEvento">Criar Evento</button>
                        
                </b-container>
                
            </div>

            <div class="modal fade" id="criarEvento">
                
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Novo evento</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            
                            <div class="text-container">
                                <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
       
        
      </div>
      <div
        v-if="errors.length>0"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ errors }}
       
        
      </div>
                                <div class="d-flex">
                                    <div class="p-2">
                                        <input v-model="evento.nome" type="text" class="form-control"
                                            placeholder="titulo"><br>
                                        <input v-model="evento.descricao" type="text" class="form-control"
                                            placeholder="descricao"><br>
                                    </div>
                                    <div class="p-2">
                                        <input v-model="evento.cidade" type="text" class="form-control"
                                            placeholder="cidade"><br>
                                        <input v-model="evento.data" type="data" class="form-control" placeholder="data"><br>
                                    </div>
                                </div>
                                <div>
                                    <input  v-model="evento.imagem" type="text" id="avatar" name="avatar" placeholder="url imagem" >
                                </div>
                               
                            </div>
                            <button @click="handleAddEvento()" type="submit"

                                class="btn btn-primary mx-auto d-blockm" data-bs-dismiss="modal">Criar
                                evento</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="cards">
                <b-container>
                    <div class="card-container">
                        <div @load="store1.updateLocalStorage()" v-for="(evento, number) in store1.orderByGostos" class="p-2"
                            :key="number">
                            <div class="card">
                                <div class="card-left">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ evento.nome }}</h5><br>
                                        <p id="cardDesc" class="card-text">{{ evento.descricao }}</p><br>
                                        <p id="cardDesc" class="card-text">{{ evento.data }}</p><br>
                                        <p class="card-text"><button v-bind:disabled="isDisabled"
                                                @click="updtateEventBy(evento._id, evento)"
                                                style="border:none; background-color: #FFFFFF"><img
                                                    src="../assets/gosto.webp" alt=""></button>
                                            {{evento.gostos}}
                                        </p>
                                    </div>
                                </div>
                                <div class="card-right">
                                    <img class="card-img-top" alt="..." :src="evento.imagem">
                                </div>
                            </div>
                        </div>
                    </div>
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
class Evento {
  constructor(nome,descricao,IDcidade,data,imagem, user,) {
    this.nome = nome;
    this.descricao = descricao;
    this.cidade= IDcidade;
    this.data= data;
    this.imagem = imagem;
    this.user = user;
  }
}
import { toHandlers } from 'vue';
import { eventos } from '../stores/eventStore';
import Navbar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

import { storeToRefs } from "pinia";



export default {
    data() {
    return {
        evento: new Evento( "","","","","","user"),
      number: 0,
      isDisabled: false,
      message: "",
      errors: [],
      loading: false,
      eventos: localStorage.eventos,
    };
  },
    components: {
        Navbar,
        Footer
    },
    setup() {
        const store1 = eventos();
        store1.updateLocalStorage()
        // storeToRefs lets todoList keep reactivity

        return {
            store1,
        };

    },
    methods: {
    disableButton() {
      this.isDisabled = true;
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
    async handleAddEvento() {
        console.log(this.data);
        console.log(this.evento);
      this.$data.message = '';
      this.$data.loading = true;
      this.$data.successful = false;
      this.$data.errors = [];

      if (this.evento.cidade && this.evento.data && this.evento.descricao  && this.evento.imagem && this.evento.nome)  {
        try {
            console.log("deu");
          
          await this.store1.add(this.evento);
          
          this.$data.successful = true;
        } catch (error) {
          console.log(error);
          this.$data.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        } finally {
          this.$data.loading = false;
        }
      } else {
        this.$data.loading = false;
        if (!this.evento.cidade) {
          this.errors.push('Cidade required.');
        }
        if (!this.evento.data) {
          this.errors.push('Data required.');
          
        }
        if (!this.evento.descricao) {
          this.errors.push('Descrição required.');
      }
      
      if (!this.evento.imagem) {
          this.errors.push('Imagem required.');
      }
      if (!this.evento.nome) {
          this.errors.push('Nome required.');
      }
      
    }
  },
  async updtateEventBy(id, evento) {
      this.$data.loading = true;

      // console.log("AdminPage - GET USERS started...");
      try {
        await this.store1.updateEvento(id, evento);
        console.log("AdminPage - GET USERS: " + this.store1.getAllEvents.length);
        this.$data.eventos = this.store1.eventos;
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
    this.getEventsList();
  },
};

</script>


<style scoped>
.eventoPage {
    background-color: #C6DDC5;
    background-size: cover;
    width: 100%;
}

.card-container {
    width: 100%;
}

.card {
    width: 100%;
    background-color: white;
    padding: 20px;
    box-shadow: 0px 0px 10px #ccc;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
}

.card-left {
    width: 78%;
}

.card-right img {
    width: 40vh;
}

.card-right {
    width: 22%;
}

#header {
    padding-left: 5em;
    padding-right: 5em;
    padding-top: 1em;
    padding-bottom: 1em;
}

.card {
    font-family: "Keedy Sans";
    color: #134C67;
    border-radius: 15px;
}

.card-title {
    font-family: "Keedy Sans";
    font-size: 25px;
}

#cards {
    padding-left: 5em;
    padding-right: 5em;
    padding-top: 1em;
    padding-bottom: 1em;
}

#btnCriarEvento {
    font-family: "Keedy Sans";
    background-color: #134C67;
    border-color: #134C67;
    border-width: 3px
}

#cardDesc {
    width: 80%;
}


#footer {
    display: block;
    margin: auto;
    width: 60%;
}
</style>










