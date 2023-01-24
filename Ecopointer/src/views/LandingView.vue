<template>
    <div class="landingPage" >
        <b-container fluid>
            <b-container>
                <b-row>   
                    <b-col> <NavbarLanding /> </b-col>
                </b-row>
            </b-container>
            <b-container>
                <b-row>
                    <b-col cols="12" md="8">
                        <h1 id="titulo1">Uma nova forma de reciclar...</h1>
                        <p id="desc1">Com a EcoPointer, reciclar tornou-se muito mais interativo! Compartilha a tua contribuição para melhorar o nosso planeta, enquanto podes ganhar prémios e recompensas pelo caminho!!</p>
                    </b-col>
                </b-row>
            </b-container>
            <b-container>
                <b-row>
                    <b-col>
                        <h1 id="titulo2">Encontra ecopontos no mapa!</h1>
                        <p id="desc2">Disponibilizamos no nosso mapa os ecopontos mais próximos de ti. No entanto, não são os únicos. A tua contribuição é fundamental para a atualização do mapa.</p>
                    </b-col>
                </b-row>
            </b-container>
            <b-container>
                <b-row>
                    <b-col>
                        <h1 id="titulo3">Participa em eventos!</h1>
                        <p id="desc3">A reciclagem não é a única maneira de ajudar o planeta. Podes conferir uma grande variedade de eventos ecológicos e ambientais e sentir-te acolhido pela nossa comunidade!</p>
                    </b-col>
                </b-row>
            </b-container>
        </b-container>
    </div>
</template>

<script>
import NavbarLanding from '../components/NavBarLanding.vue'

export default {
    components: {
        NavbarLanding,
    },
}
</script>


<style scoped>
.landingPage {
    background-image: url('src/assets/LandingPageBG.png');
    background-size: cover;
    height: 2838px;
    width: 100%;
}

h1 {
    font-family: "Keedy Sans";
    font-size: 45px;
    color: #1D202C;
    position: absolute;
}
#titulo1 {
    left: 80px;
    top: 150px;
}
#titulo2 {
    right: 80px;
    top: 800px;
}
#titulo3 {
    left: 80px;
    top: 1400px;
}

p {
    font-family: "Inter";
    font-size: 24px;
    color: #C6DDC5;
}
</style>

