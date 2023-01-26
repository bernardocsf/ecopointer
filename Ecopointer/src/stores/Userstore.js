import { defineStore } from 'pinia';
import{router} from '../router/index'

export const userStore = defineStore('userStore', {
  state: () => ({
    users: localStorage.users ? JSON.parse(localStorage.users)
      : [
        { id: 0, username: "bruno", name: "bruno", email: "alguem@gmail.com", cidade: "maia", password: '123456', xps:500 },
        { id: 1, username: "bernardo", name: "bernardo", email: "alguem@gmail.com", cidade: "pombal", password: '123456', xps:5000 },
        { id: 2, username: "admin", name: "admin", email: "admin", cidade: "pombal", password: 'admin',xps:5000 }],
  
        login: [
          {
            bool: false,
            nome: "",
          },
        ],    }),
  getters: {
    userCount: function () {
      return this.users.length
    },
    getUsers:  (state) => { return state.users},
    getuserByid: (state) => (id) => state.users.find(user => user.id == id),
    orderByXp: function() {
  

  
     this.users = this.users.sort((a, b) => b.xps-a.xps);
     return this.users
     
  
    
  
  },

  },
  

  actions: {
    updateLocalStorage() {
      localStorage.setItem('users', JSON.stringify(this.users));
    },
    addUser(username, name, email, cidade, password) {
      this.users.push({
        id: this.users.length,
        username: username,
        name: name,
        email: email,
        cidade: cidade,
        password: password,
        xps:0
      });
      this.updateLocalStorage()
      updateLocalStorage();
              localStorage.setItem("userLogado", username);
              localStorage.setItem("logado", true);
              this.login = {
                bool: true,
                nome: username,
              };
    },
    login(username, password) {
      if(username=="admin" ){
        if(password=="admin"){
          router.push('/admin'); 
          return
          
      }}
      console.log(username, password);
      if (this.users.find((user) => user.username == username)) {
        if (this.users.find((user) => user.password == password)) {
          localStorage.setItem("userLogado", username);
          localStorage.setItem("logado", true);
          this.login = { bool: true, nome: username };
          console.log("Login efetuado com sucesso");
          router.push('/home') 
        }
      }
    },
    
    eliminarUser(user){
      //this.getuserByid(user.id)
      this.users.splice(user, 1);
      this.updateLocalStorage()

      
    }
    
},
created () {
  if (localStorage.getItem("login") == "true") {
    this.login = {
      bool: true,
      nome: localStorage.getItem("userLogin"),
    };
  } else {
    this.login = {
      bool: false,
      nome: "",
    };
  }
  if (localStorage.getItem("login") == "false") {
    this.login = {
      bool: false,
      nome: "",
    };
  } else {
    this.login = {
      bool: true,
      nome: localStorage.getItem("userLogin"),
    };
  }
  ;
},
})