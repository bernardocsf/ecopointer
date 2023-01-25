<template>
  <div class="homePage">
    <b-container fluid>
      <b-container>
        <b-row>
          <b-col>
            <Navbar />
          </b-col>
        </b-row>
      </b-container>
      <b-container id="desafios">
        <b-row>
          <b-col>
            <span id="titleUm">Desafios da semana</span>
            <span id="subTitleUm">Novos desafios em menos de 72 horas</span>
          </b-col>
        </b-row>
      </b-container>

    </b-container>
    <div>
      <table>
        
      </table>
    </div>
  </div>
</template>


<script>
import { toHandlers } from 'vue';
import { userStore } from '../stores/Userstore';
import Navbar from '../components/NavBar.vue'

import { storeToRefs } from "pinia";

export default {
  data() {
    return {
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        {
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson',
          _rowVariant: 'danger'
        },
        {
          age: 40,
          first_name: 'Thor',
          last_name: 'MacDonald',
          _cellVariants: { age: 'info', first_name: 'warning' }
        },
        { age: 29, first_name: 'Dick', last_name: 'Dunlap' }
      ]
    }
  },

  components: {
    Navbar,
  },
  setup() {
    const store = userStore();
    // storeToRefs lets todoList keep reactivity

    return {
      store
    };
  },
};
</script>


<style scoped>
.homePage {
  background-color: #C6DDC5;
  background-size: cover;
  height: 2838px;
  width: 100%;
}

#desafios {
  margin: auto;
  width: 50%;
}

#titleUm {
  font-family: "Keedy Sans";
  font-size: 45px;
  color: #134C67;
}

#subTitleUm {
  font-family: "Keedy Sans";
  font-size: 20px;
  color: #134C67;
}
</style>











