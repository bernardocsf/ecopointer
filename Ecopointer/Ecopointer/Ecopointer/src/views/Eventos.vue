<template>
    <div class="eventoPage">
        <b-container fluid>
            <b-container>
                <b-row>
                    <b-col>
                        <Navbar />
                    </b-col>
                </b-row>
            </b-container>

            <b-container>
                <button type="button" id="loginButton" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#criarEvento">Criar Evento</button>

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
                                            <input v-model="data" type="text" class="form-control"
                                                placeholder="data"><br>
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
            </b-container>
        </b-container>
    </div>
</template>


<script>
import { toHandlers } from 'vue';
import { userStore } from '../stores/Userstore';
import Navbar from '../components/NavBar.vue'

import { storeToRefs } from "pinia";

export default {
    data() {
        return {
        }
    },
    components: {
        Navbar,
    },
    setup() {
        const store = userStore();
        // storeToRefs lets todoList keep reactivity
        return {
            store
        };
    },
};
</script>


<style scoped>
.eventoPage {
    background-color: #C6DDC5;
    background-size: cover;
    height: 2838px;
    width: 100%;
}

#desafios {
    margin: auto;
    width: 50%;
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
}
</style>











