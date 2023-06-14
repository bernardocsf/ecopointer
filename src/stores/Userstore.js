import { defineStore } from 'pinia';
import { router } from '../router/index';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/authservice';

export const userStore = defineStore('userStore', {
  state: () => ({
    users: localStorage.users
      ? JSON.parse(localStorage.users)
      : [
          { id: 0, username: "bruno", name: "bruno", email: "alguem@gmail.com", cidade: "maia", password: '123456', confpassword: '123456', xps: 500 },
          { id: 1, username: "bernardo", name: "bernardo", email: "alguem@gmail.com", cidade: "pombal", password: '123456', confpassword: '123456', xps: 5000 },
          { id: 2, username: "admin", name: "admin", email: "admin", cidade: "pombal", password: 'admin', confpassword: 'admin', xps: 6000 }
        ],

    message: "",
    loggedIn: localStorage.getItem('login') === 'true',
    loggedUser: localStorage.getItem('userLogin') || null
  }),

  mutations: {
    SET_MESSAGE(state, payload) {
      state.message = payload;
    },
    loginSuccess(state, payload) {
      state.loggedIn = true;
      state.loggedUser = payload;
    },
    loginFailure(state) {
      state.loggedIn = false;
      state.loggedUser = null;
    },
    logout(state) {
      state.loggedIn = false;
      state.loggedUser = null;
    },
    SET_USERS(state, payload) {
      console.log("STORE MUTATION SET_USERS: " + payload.length);
      state.users = payload;
    },
  },

  getters: {
    getMessage: (state) => state.message,
    getUsers: (state) => state.users,
    userCount(state) {
      return state.users.length;
    },
    getUserById: (state) => (id) => state.users.find((user) => user.id == id),
   orderByXp(state) {
       return state.users.users.sort((a, b) => b.xp - a.xp);
     },
    
        getLoggedIn: (state) => state.loggedIn,
        getLoggedUser: (state) => state.loggedUser,
        
  },

  actions: {
    async register(user) {
      try {
        console.log( user)
        const response = await AuthService.register(user);
        this.setMessage(response.message);
      } catch (error) {
        console.log('STORE REGISTER FAILS');
        console.log(error);
        throw error;
      }
    },
    async login(user) {
      try {
        const loggedUser = await AuthService.login(user);
        this.loginSuccess(loggedUser);
        console.log(loggedUser);

        // if successful login, navigate to pages corresponding to logged user role
        if (loggedUser.role == "admin") {
          router.push("/admin");
        } else {
          router.push("/home");
        }
      } catch (error) {
        this.loginFailure();
        throw error;
      }
    },
    logout() {
      AuthService.logout();
      
      router.push("/");
    },

    async getAllUsers() {
      try {
        const users = await UserService.fetchAllUsers();
        this.setUsers(users);
        this.updateLocalStorage()
      } catch (error) {
        this.setUsers([]);
        this.setMessage(error);
        throw error;
      }
    },
    
         async deleteUser(id) {
             try {
                
                
                 console.log(id)
                 const deleteUser = await UserService.deleteUserByID(id);
                console.log('STORE getOneUser: ')
               console.log(deleteUser)
                 // commit('SET_USERS', users);
                 //return Promise.resolve(users);
         }
             catch(error)
             {
               // console.log('STORE listUsers: ' + error);
                 this.setUsers( []);
                this.setMessage(error);
                throw error; // Needed to continue propagating the error
               //return Promise.reject(error);
            }
       },

    updateLocalStorage() {
      localStorage.setItem('users', JSON.stringify(this.users));
    },
    addUser(username, name, email, cidade, password, confpassword) {
      if (
        username === "" ||
        name === "" ||
        email === "" ||
        cidade === "" ||
        password === "" ||
        confpassword === ""
      ) {
        alert("Preencha todos os campos");
        return;
      }
      if (password !== confpassword) {
        alert("As senhas não coincidem");
        return;
      }
      if (this.users.find((user) => user.username === username)) {
        alert("Username já existe");
        return;
      }
      this.users.push({
        id: this.users.length,
        username: username,
        name: name,
        email: email,
        cidade: cidade,
        password: password,
        confpassword: confpassword,
        xps: 0
      });

      this.updateLocalStorage();
      localStorage.setItem("userLogado", username);
      localStorage.setItem("logado", true);
      this.loggedIn = true;
      this.loggedUser = {
        bool: true,
        nome: username
      };
    },
    eliminarUser(user) {
      this.users.splice(user, 1);
      this.updateLocalStorage();
    },
    terminarSessao() {
      localStorage.setItem("logado", false);
      this.loggedIn = false;
      this.loggedUser = {
        bool: false,
        nome: "",
      };
      router.push('/login');
    },

    setMessage(payload) {
      this.message = payload;
    },
    loginSuccess(payload) {
      this.loggedIn = true;
      this.loggedUser = payload;
    },
    loginFailure() {
      this.loggedIn = false;
      this.loggedUser = null;
    },
    logoutAction() {
      this.loggedIn = false;
      this.loggedUser = null;
    },
    setUsers(payload) {
      console.log("STORE MUTATION SET_USERS: " + payload.length);
      this.users = payload;
    },
  }
});
