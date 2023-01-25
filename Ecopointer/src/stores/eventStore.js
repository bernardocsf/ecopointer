import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const Eventstore = defineStore('counter', () => {
    state: () => {users:[
      {id:0 , nome:"Apanhar lixo na praia", data: "16/12/2024", admin:"Gustavo123", 
  
      }
    ]
    }
    getters :{
      
        
      
      
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
          passwordConfir: passwordConfir
        });
        this.updateLocalStorage()
      },
      login(username, password) {
        console.log(username, password);
        if (this.users.find((user) => user.username == username)) {
          if (this.users.find((user) => user.password == password)) {
            console.log("Login efetuado com sucesso");
            router.push('/map') 
          }
        }
      },
    },
  })