import { defineStore } from 'pinia'

export const eventos = defineStore('eventStore', {
  state: () => ({
    eventos: localStorage.eventos
      ? JSON.parse(localStorage.eventos)
      : 
      [{ id: 0, nome: "Plantação de árvores", descriçao: "Está a ser organizado um evento com o objetivo de agrupar o máximo de pessoas para árvores em Vila do Conde, que se realizará no dia 23 de janeiro e terá início por volta das 10:00 horas.", cidade: "maia", data: "16-11-2023 ", imagem: "src/assets/plantaçao_arvore.png", gostos:55 },
      { id: 1, nome: "Recolha de lixo-Porto", descriçao: "Está a ser organizado um evento com o objetivo de agrupar o máximo de pessoas para recolher o lixo após um evento festivo da ESMAD, que se realizará no dia 14 de dezembro e terá início por volta das 10:00 horas.", cidade: "maia", data: "16-11-2023 ", imagem: "/src/assets/recolha_lixo.png",gostos:80 },
      { id: 2, nome: "Recolha de lixo - Praia", descriçao: "Está a ser organizado um evento com o objetivo de agrupar o máximo de pessoas para recolher o lixo de todas as praias de Vila do Conde, que se realizará no dia 10 de dezembro e terá início por volta das 10:00 horas.", cidade: "maia", data: "16-11-2023 ", imagem: "src/assets/recolha_praia.png", gostos:10 },
      { id: 3, nome: "Dia  mundial da Reciclagem", descriçao: "No dia 17 de maio assinala-se o dia Internacional da Reciclagem. Convida-se todos os utilizadores desta aplicação que contribuíram para a evolução da reciclagem a participarem num jantar solidário que se realizará no próximo sábado, dia 17 de maio.", cidade: "maia", data: "16-11-2023 ", imagem: "src/assets/fotocard.png", gostos:100 }
      ]

  }),
  getters: {
    getEventos: (state) => {
      return state.eventos;

    },
    getEventoByid: (state) => (id) => state.eventos.find(evento => evento.id == id),
  },

  actions: 
  {
    updateLocalStorage() {
      localStorage.setItem('eventos', JSON.stringify(this.eventos));
    },
    addEvento(nome, descriçao,cidade, data, imagem) {
      this.eventos.push({
        id: this.eventos.length,
        nome: nome,
        descriçao: descriçao,
        cidade: cidade,
        data: data,
        imagem: imagem
      });
      this.updateLocalStorage()
    },
    addGosto(){
      getEventoByid: (state) => (id) => state.eventos.find(evento => evento.id == id) ,
      evento.gostos+1
    }
   
    
  }})
