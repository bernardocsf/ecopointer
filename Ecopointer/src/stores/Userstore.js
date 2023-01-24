import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const userStore = defineStore('users', {
  state: () => ({
    users:[
      {username:"bruno" ,name:"bruno", email:"alguem@gmail.com", cidade:"maia", password:'123456'},
      {username:"bernardo" ,name:"bernardo", email:"alguem@gmail.com", cidade:"pombal", password:'123456'}
  ]
  
    
  }),
  getters: {
    userCount: function(){
      return this.users.length
    },
    getUsers(state){return state.users},
    getuserByid: (state) => (name) => state.users.find(user => user.name ==name),
    
  }, 
  
  actions:{
    addUser(user){
      this.users.push(user)  
    }
  },
  
  
  

})
 


 


