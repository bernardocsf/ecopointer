<template>
  <main class="background">
    <ul class="nav nav-pills mb-3 navbar fixed-top navbar-expand-lg" id="pills-tab" role="tablist">
      <li class="nav-item">
        <a class="nav-link" id="ecopointerNav" data-toggle="pill" role="tab" aria-controls="pills-home"
          aria-selected="false">Ecopointer</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab"
          aria-controls="pills-profile" aria-selected="false">Mapa</a>
      </li>
      <li class="nav-item me-auto">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" role="tab" aria-controls="pills-contact"
          aria-selected="false">Evento</a>
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
            <div class="p-0">
              <div class="img-container">
                <img src="../assets/fotologin.webp" width="280" height="400">
              </div>
            </div>
            <div class="p-2">
              
          
              <div class="modal-header">
                <h4 class="modal-title">Bem-vindo(a)</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <div class="form-group">
          <div 
            v-if="message" 
            class="alert alert-danger" 
            role="alert">
            {{ message }}
          </div>
        </div>
   
        
                <div class="text-container">
                  <input v-model="user1.username" type="text" class="form-control" placeholder="username">
                  <br>
                  <input v-model="user1.password" type="password" class="form-control" placeholder="password">
                  <br>
                  <p id="changeModal">Não tens conta? <a href="" data-bs-toggle="modal"
                      data-bs-target="#myModalRegisto">Regista-te</a> aqui</p>
                  <br>
                  <button @click="handleLogin" type="submit" id="isButton" class="btn btn-primary" 
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
            <div class="p-0">
              <div class="img-container">
                <img src="../assets/fotologin.webp" width="280" height="400">
              </div>
            </div>
            <div class="p-2">
              <div class="modal-header">
                <h4 class="modal-title">Bem-vindo(a)</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <div class="text-container">
                  <div class="d-flex">
                    <div class="p-2">
                      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
      <div
        v-if="errors.length>0" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
        {{ errors }}
      </div>
                      <input v-model="user.username" type="text" class="form-control" placeholder="username"><br>
                      <input v-model="user.email" type="text" id="emailR" class="form-control" placeholder="email"><br>
                      <input v-model="user.password" type="password" class="form-control" placeholder="password"><br>
                    </div>
                    <div class="p-2">
                      <input v-model="user.nome" type="text" class="form-control" placeholder="name"><br>
                      <input v-model="user.cidade" type="text" id="cidadeR" class="form-control" placeholder="cidade"><br>
                      <input v-model="user.morada" type="text" class="form-control"
                        placeholder="morada"><br>
                    </div>
                  </div>
                </div>
                <button @click="handleRegister()" type="submit" id="rsButton"
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
class User {
  constructor(username,nome,IDcidade,morada,tipoUSer,email, password,) {
    this.username = username;
    this.nome = nome;
    this.cidade= IDcidade;
    this.morada= morada;
    this.email = email;
    this.tipoUSer = tipoUSer;
    this.password = password;
  }
}
class User1 {
  constructor(username, password,) {
    this.username = username;
    
    this.password = password;
  }
}
import { toHandlers } from 'vue';
import { userStore } from '../stores/Userstore';
import { storeToRefs } from "pinia";
import { router } from '../router/index';

export default {
  setup() {
    const store = userStore();
    return {
      store
    };
  },
  data() {
    return {
      user: new User("", "","","","user","",""),
      user1: new User1("", ""),
      loading: false,
      message: "",
      errors: [],
      successful: false,
    };
  },
  methods: {
    
    async handleLogin() {
  const store = userStore();
  
  this.$data.loading = true;
  this.$data.errors = [];
  console.log(this.user1);
  if (this.user1.username && this.user1.password) {
    console.log(this.user1);
    // makes request by dispatching an action
    try {
      await store.login(this.user1);
      console.log(this.user1);

      console.log("LOGIN: AFTER AWAIT: " + store.loggedUser.length);

      // if successful login, navigate to pages corresponding to logged user role
      if (store.loggedUser.role == "admin")
        router.push("/admin");
      else 
        router.push("/home");
    } catch (error) {
      // console.log("LOGIN: ERROR: " + this.getLoggedIn);
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
      this.errors.push("Username required.");
      console.log(this.errors);
    }
    if (!this.user.password) {
      this.errors.push("Password required.");
      console.log(this.errors);
    }
  }
},
async handleRegister() {
      this.$data.message = '';
      this.$data.loading = true;
      this.$data.successful = false;
      this.$data.errors = [];

      if (this.user.username && this.user.password && this.user.cidade && this.user.email && this.user.morada && this.user.nome)  {
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

  },
  
 
  
};
</script>

<style scoped>
.nav {
  position: relative;
  margin-left: 4%;
  margin-right: 5%;
}

.nav-link {
  color: #F7F4F3;
  font-family: 'Keedy Sans';
  font-size: 18px;
}

.nav-link:hover {
  color: #1D202C;
}

#ecopointerNav {
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
  --bs-modal-width: 750px;
}

#myModalRegisto {
  --bs-modal-width: 850px;
}

.modal-header {
  padding-top: 2em;
  padding-left: 3em;
  padding-right: 3em;
  border-bottom: none;
}

.modal-body {
  padding-left: 3em;
  padding-right: 3em;
}

.modal-title {
  font-family: 'Keedy Sans', bold;
  font-size: 30px;
}

.form-control {
  outline: 0;
  border-width: 0 0 2px;
}

h4.modal-title {
  color: #134C67;
  font-size: 40px;
}

#isButton {
  background-color: #134C67;
  font-family: 'Keedy Sans';
  font-size: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#rsButton {
  background-color: #134C67;
  font-family: 'Keedy Sans';
  font-size: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#changeModal {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #134C67;
}

#changeModal a {
  color: #134C67;
}
</style>
