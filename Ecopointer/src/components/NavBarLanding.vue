<template>
  <main class="background" style="background-color: #e3f2fd;">
    <ul class="nav nav-pills mb-3 navbar fixed-top navbar-expand-lg " id="pills-tab" role="tablist">
      <li class="nav-item">
        <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="/" role="tab" aria-controls="pills-home"
          aria-selected="false" style="color: #134C67">Ecopointer</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="/map" role="tab"
          aria-controls="pills-profile" aria-selected="false" style="color: #134C67">Mapa</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="/eventos" role="tab"
          aria-controls="pills-contact" aria-selected="false" style="color: #134C67">Evento</a>
      </li>
      <li class="nav-item me-auto">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="/ajuda" role="tab"
          aria-controls="pills-contact" aria-selected="false" style="color: #134C67">Ajuda</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="" role="tab" aria-controls="pills-contact"
          aria-selected="false" data-bs-toggle="modal" data-bs-target="#myModalRegisto"
          style="color: #134C67">Registo</a>
      </li>
      <li class="nav-item ">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModalLogin"
          style="background-color: #134C67">Login</button>
      </li>
    </ul>
  </main>

  <div class="modal fade" id="myModalLogin">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Bem-vindo(a)</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="img-container"><img src="../assets/fotologin.png" width="300" height="200" alt=""></div>
          <div class="text-container"><input v-model="username1" type="text" placeholder="username" class="form-control" id="usernameL"
              aria-describedby="usern">
            <br>
            <input v-model="password" type="password" placeholder="password" id="inputPassword5" class="form-control"
              aria-describedby="passwordHelpBlock">
          </div>
          <h1>{{ username1}}</h1>
        </div>


        <div class="modal-footer">
          
          <button @click="store.login(username1,password)" type="submit" class="btn btn-primary mx-auto d-blockm" data-bs-dismiss="modal">Iniciar SessÃ£o</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="myModalRegisto">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Bem-vindo(a)</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">
          <img src="../assets/fotologin.png" width="300" height="200" alt="">
          <input type="text" placeholder="username" class="form-control" id="usernameR" aria-describedby="usernameR"
            v-model="username">
          <input v-model="name" type="text" placeholder="name" class="form-control" id="nameR" aria-describedby="nameR">
          <br>
          <input v-model="email" type="text" placeholder="email" id="emailR" class="form-control"
            aria-describedby="emailR">
          <input v-model="cidade" type="text" placeholder="cidade" id="cidadeR" class="form-control"
            aria-describedby="cidadeR">
          <br>
          <input v-model="password" type="password" placeholder="password" id="passwordR" class="form-control"
            aria-describedby="passwordR">
          <input type="password" placeholder="confpassword" id="confpasswordR" class="form-control"
            aria-describedby="confpasswordR">
          

        </div>
        <div class="modal-footer">
          <button
            @click="store.addUser( username,  name,   email, cidade,  password)"
            type="submit" class="btn btn-primary mx-auto d-blockm" data-bs-dismiss="modal">Criar
            conta</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { toHandlers } from 'vue';
import { userStore } from '../stores/Userstore';


import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = userStore();
    // storeToRefs lets todoList keep reactivity:
    const { users } = storeToRefs(store);

    return {
      users,
      store
    };
  },
};





















</script>







