import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('counter', {
  state: () => ({users:[
    {id:0 , email:"alguem@gmail.com", nome: "alguem", password:'123456'}
  ]
    
  }),
  getters: {
    getUsers(state){return state.users},
    getuserByid: (state) => (id) => state.users.find(user => user.id ==id)
  },  

})
 


 


