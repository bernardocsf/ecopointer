<template>
    <div class="landingPage">
        <b-container fluid>
            <b-container>
                <b-row>
                    <b-col>
                        <NavbarLanding />
                    </b-col>
                </b-row>
            </b-container>
            
        </b-container>
    <FooterLanding />
    </div>
</template>

<script>
import NavbarLanding from '../components/NavBarLanding.vue'
import FooterLanding from '../components/FooterLanding.vue';

export default {
    components: {
        NavbarLanding,
        FooterLanding
    },
}
</script>

<style scoped>
.landingPage {
    background-image: url('src/assets/LandingPageBG.png');
    background-size: cover;
    height: 410vh;
    width: 100%;
}

h1 {
    position: absolute;
    font-family: "Keedy Sans";
    font-size: 2.5vw;
    color: #1D202C;
}

#titulo1 {
    left: 80px;
    top: 110px;
}

#titulo2 {
    right: 80px;
    top: 620px;
}

#titulo3 {
    left: 80px;
    top: 1180px;
}

p {
    font-family: "Inter";
    font-size: 1.5vw;
    color: #C6DDC5;
}

#desc1 {
    position: inherit;
    width: 40vw;
    left: 80px;
    top: 190px;
}

#desc2 {
    position: inherit;
    text-align: end;
    width: 40vw;
    left: 820px;
    top: 700px;
}

#desc3 {
    position: inherit;
    width: 40vw;
    left: 80px;
    top: 1260px;
}
</style>

