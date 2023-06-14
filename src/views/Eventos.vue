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
                                <div class="d-flex">
                                    <div class="p-2">
                                        <input v-model="nome" type="text" class="form-control"
                                            placeholder="titulo"><br>
                                        <input v-model="descricao" type="text" class="form-control"
                                            placeholder="descricao"><br>
                                    </div>
                                    <div class="p-2">
                                        <input v-model="cidade" type="text" class="form-control"
                                            placeholder="cidade"><br>
                                        <input v-model="data" type="text" class="form-control" placeholder="data"><br>
                                    </div>
                                </div>
                                <div>
                                    <input  v-model="imagem" type="text" id="avatar" name="avatar" placeholder="url imagem" >
                                </div>
                            </div>
                            <button @click="store1.addEvento(titulo, descricao, cidade, data, imagem)" type="submit"

                                class="btn btn-primary mx-auto d-blockm" data-bs-dismiss="modal">Criar
                                evento</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="cards">
                <b-container>
                    <div class="card-container">
                        <div @load="store1.updateLocalStorage()" v-for="evento in store1.orderByGostos" class="p-2"
                            :key="evento.id">
                            <div class="card">
                                <div class="card-left">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ evento.nome }}</h5><br>
                                        <p id="cardDesc" class="card-text">{{ evento.descricao }}</p><br>
                                        <p class="card-text"><button v-bind:disabled="isDisabled"
                                                @click="store1.addGosto(evento), disableButton()"
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
  constructor(nome,descricao,IDcidade,data, imagem,email,user) {
    this.nome = nome;
    this.descricao = descricao;
    this.cidade= IDcidade;
    this.data= data;
    this.email = email;
    this.imagem = imagem;
    this.user = user;
    
  }
}
import { toHandlers } from 'vue';
import { eventos } from '../stores/eventStore';
import Navbar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

import { storeToRefs } from "pinia";
import { handle } from 'express/lib/application';

export default {
    data() {
        isDisabled: false
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
    data() {
    return {
      evento: new Evento("", "","","","","",""),
      loading: false,
      message: "",
      errors: [],
      successful: false,
    };
  },
    
    methods: {
        async getEventsList() {
        
        
        
        this.$data.loading= true
      
      
      try {
        await this.store1.getAllEvents();
        console.log("AdminPage - GET USERS: " + this.store1.getEventos.length)
        this.$data.eventos = this.store1.eventos;
        console.log(this.eventos)
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
    async eventoAdd() {
      this.$data.message = '';
      this.$data.loading = true;
      this.$data.successful = false;
      this.$data.errors = [];

      if (this.evento.nome && this.evento.cidade && this.evento.data && this.evento.descricao && this.evento.email && this.evento.imagem && this.evento.user)  {
        try {
          
          
          await this.store.register(this.user);
          
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
        if (!this.user.username) {
          this.errors.push('Username required.');
        }
        if (!this.user.password) {
          this.errors.push('Password required.');
          
        }
        if (!this.user.cidade) {
          this.errors.push('Cidade required.');
      }
      if (!this.user.email) {
          this.errors.push('Email required.');
      }
      if (!this.user.morada) {
          this.errors.push('Morada required.');
      }
      if (!this.user.nome) {
          this.errors.push('Nome required.');
      }
      
    }
  },
    disableButton() {
      this.isDisabled = true;
    }
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










