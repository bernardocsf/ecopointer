<script setup>
import Navbar from '../components/NavBarLanding.vue'
import FooterUwU from '../components/Footer.vue'
</script>

<template>
    <div class="backGround">
        <div>
            <Navbar/>
        </div>
        <div >
            <h1>Uma nova forma de reciclar...</h1>
            <p>Com a EcoPointer, reciclar tornou-se muito mais interativo! Compartilha a tua contribuição para melhorar o nosso planeta, enquanto podes ganhar prémios e recompensas pelo caminho!</p>
            <img src="../assets/Asset 5.1.png" alt="EcoPointer" width="500" height="500">
            <h1>
                Encontra ecopontos no mapa!
            </h1>
            <p>Disponibilizamos no nosso mapa os ecopontos mais próximos de ti. No entanto, não são os únicos. A tua contribuição é fundamental para a atualização do mapa.</p>
            <h1>Participa em eventos!</h1>
            <p>A reciclagem não é a única maneira de ajudar o planeta. Podes conferir uma grande variedade de eventos ecológicos e ambientais e sentir-te acolhido pela nossa comunidade!</p>
        </div>
        
    </div>
    <div>
            <FooterUwU/>
    </div>

</template>

<style scoped>
    .backGround {
        background-color: #43804B;
        width: 100%;
    }
    h1 {
        color: red;
    }
</style>
