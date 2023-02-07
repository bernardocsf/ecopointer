<template>
  <main class="background">
    <ul class="nav nav-pills mb-3 navbar fixed-top navbar-expand-lg" id="pills-tab" role="tablist">
      <li class="nav-item">
        <a class="nav-link" id="ecopointerM" data-toggle="pill" href="/" role="tab" aria-controls="pills-home"
          aria-selected="false">Ecopointer</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="/map" role="tab"
          aria-controls="pills-profile" aria-selected="false">Mapa</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#" role="tab" aria-controls="pills-contact"
          aria-selected="false">Evento</a>
      </li>
      <li class="nav-item me-auto">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#" role="tab" aria-controls="pills-contact"
          aria-selected="false">Ajuda</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="" role="tab" aria-controls="pills-contact" aria-selected="false"
          data-bs-toggle="modal" data-bs-target="#myModalRegisto">Sign Up</a>
      </li>
      <li class="nav-item ">
        <button type="button" id="loginButton" class="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#myModalLogin">LogIn</button>
      </li>
    </ul>

    <div class="modal fade" id="myModalLogin">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="d-flex">
            <div class="img-container">
              <img src="../assets/fotologin.png" width="280" height="400">
            </div>
            <div>
              <div class="modal-header">
                <h4 class="modal-title">Bem-vindo(a) de volta</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <div class="text-container">
                  <input v-model="username1" type="text" class="form-control" placeholder="username">
                  <br>
                  <input v-model="password" type="password" class="form-control" placeholder="password">
                  <br>
                  <button @click="store.login(username1, password)" type="submit" class="btn btn-primary"
                    data-bs-dismiss="modal">Iniciar Sessão</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="myModalRegisto">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="d-flex">
            <div class="img-container">
              <img src="../assets/fotologin.png" width="280" height="400">
            </div>
            <div>
              <div class="modal-header">
                <h4 class="modal-title">Bem-vindo(a)</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div class="modal-body">
                <div class="text-container">
                  <div class="d-flex">
                    <div class="p-2">
                      <input v-model="username" type="text" class="form-control" placeholder="username"><br>
                      <input v-model="email" type="text" id="emailR" class="form-control" placeholder="email"><br>
                      <input v-model="password" type="password" class="form-control" placeholder="password"><br>
                    </div>
                    <div class="p-2">
                      <input v-model="name" type="text" class="form-control" placeholder="name"><br>
                      <input v-model="cidade" type="text" id="cidadeR" class="form-control" placeholder="cidade"><br>
                      <input v-model="passwordConfir" type="password" class="form-control" placeholder="confpassword"><br>
                    </div>
                  </div>
                </div>
                <button @click="store.addUser(username, name, email, cidade, password)" type="submit"
                class="btn btn-primary mx-auto d-blockm" data-bs-dismiss="modal">Criar
                conta</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>


<script>
import { toHandlers } from 'vue';
import { userStore } from '../stores/Userstore';


import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = userStore();
    // storeToRefs lets todoList keep reactivity:


    return {

      store

    };
  },
  beforeUpdate() {
    this.store.updateLocalStorage();
  },
};
</script>

<style scoped>
.nav {
  position: relative;
  margin-left: 4%;
  margin-right: 4%;
}

.nav-link {
  color: #F7F4F3;
  font-family: 'Keedy Sans';
  font-size: 18px;
}

.nav-link:hover {
  color: #1D202C;
}

#ecopointerM {
  font-size: 30px;
}

#ecopointerM:hover {
  color: #1D202C;
}

#loginButton {
  background-color: #F7F4F3;
  font-family: 'Keedy Sans';
  color: #43804B;
  font-size: 18px;
}

#loginButton:hover {
  color: #1D202C
}

#myModalLogin {
  --bs-modal-width: 800px;
  --bs-modal-width: 800px;
}

#myModalRegisto {
  --bs-modal-width: 850px;
}

.modal-header {
  padding-top: 5em;
  padding: 2em;
}

.modal-title {
  font-family: 'Keedy Sans', bold;
  font-size: 30px;
}
</style>
