import { defineStore } from 'pinia'
const API_URL = "http://127.0.0.1:3000/"
import { EventService } from '../services/events.service';

export const eventos = defineStore('eventStore', {
  state: () => ({
    eventos: localStorage.eventos
      ? JSON.parse(localStorage.eventos)
      : 
      [{ id: 0, nome: "Plantação de árvores", descriçao: "Está a ser organizado um evento com o objetivo de agrupar o máximo de pessoas para árvores em Vila do Conde, que se realizará no dia 23 de janeiro e terá início por volta das 10:00 horas.", cidade: "maia", data: "16-11-2023 ", imagem: "./src/assets/arvore.jpg", gostos:55 },
      { id: 1, nome: "Recolha de lixo-Porto", descriçao: "Está a ser organizado um evento com o objetivo de agrupar o máximo de pessoas para recolher o lixo após um evento festivo da ESMAD, que se realizará no dia 14 de dezembro e terá início por volta das 10:00 horas.", cidade: "maia", data: "16-11-2023 ", imagem: "./src/assets/recolhalixo.jpg",gostos:80 },
      { id: 2, nome: "Recolha de lixo - Praia", descriçao: "Está a ser organizado um evento com o objetivo de agrupar o máximo de pessoas para recolher o lixo de todas as praias de Vila do Conde, que se realizará no dia 10 de dezembro e terá início por volta das 10:00 horas.", cidade: "maia", data: "16-11-2023 ", imagem: "./src/assets/recolhapraia.jpg", gostos:10 },
      { id: 3, nome: "Dia  mundial da Reciclagem", descriçao: "No dia 17 de maio assinala-se o dia Internacional da Reciclagem. Convida-se todos os utilizadores desta aplicação que contribuíram para a evolução da reciclagem a participarem num jantar solidário que se realizará no próximo sábado, dia 17 de maio.", cidade: "maia", data: "16-11-2023 ", imagem: "./src/assets/fotocard.jpg", gostos:100 }
      ]

  }),
  getters: {
    getEventos: (state) => {
      return state.eventos;

    },
    // orderByGostos(state) {
    //   return state.eventos.Evento.sort((a, b) => b.gostos - a.gostos);
    // },
    getEventoByid: (state) => (id) => state.eventos.find(evento => evento.id == id),
    
  },

  actions: 
  {
    async getAllEvents() {
      try {
        const events = await EventService.fetchAllEvents();
        this.setEvents(events);
        this.updateLocalStorage()
      } catch (error) {
        this.setEvent([]);
        this.setMessage(error);
        throw error;
      }
    },
   
    updateLocalStorage() {
      localStorage.setItem('eventos', JSON.stringify(this.eventos));
    },
    addEvento(nome, descriçao, cidade, data, imagem) {
      this.eventos.push({
        id: this.eventos.length,
        nome: nome,
        descriçao: descriçao,
        cidade: cidade,
        data: data,
        imagem: imagem,
        gostos:0
      });
      this.updateLocalStorage()
    },
    addGosto(evento){
      this.getEventoByid(evento.id)
      evento.gostos=evento.gostos+1
      this.updateLocalStorage()

      
    },
    orderById: function() {
  

  
      this.eventos = this.eventos.sort((a, b) => a.id-b.id);
      this.updateLocalStorage()
      return this.eventos
      
      
   
     
   
   },
   eliminarEvento(evento){
    //this.getuserByid(user.id)
    this.eventos.splice(evento, 1);
    
    this.updateLocalStorage()
    return this.eventos

    
  },
  setMessage(payload) {
    this.message = payload;
  },

  setEvents(payload) {
    console.log("STORE MUTATION SET_USERS: " + payload.length);
    this.eventos = payload;
  },
    
   
    
  }})