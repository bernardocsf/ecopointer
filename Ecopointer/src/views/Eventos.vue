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
                                        <input v-model="titulo" type="text" class="form-control"
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
                                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
                                </div>
                            </div>
                            <button @click="this.store.addEvento(titulo, descricao, cidade, data)" type="submit"
                                class="btn btn-primary mx-auto d-blockm" data-bs-dismiss="modal">Criar
                                evento</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cards">
                <b-container>
                    <div class="card-container">
                        <div @load="store1.updateLocalStorage()" v-for="evento in store1.eventos" class="p-2" :key="evento.id">
                            <div class="card">
                                <div class="card-left">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ evento.nome }}</h5><br>
                                        <p id="cardDesc" class="card-text">{{ evento.descriçao }}</p><br>
                                        <p class="card-text"><small class="text-muted">{{ evento.data }}</small>
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
import { toHandlers } from 'vue';
import { eventos } from '../stores/eventStore';
import Navbar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

import { storeToRefs } from "pinia";

export default {
    data() {

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










