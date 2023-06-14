<template>
    <hr>
    <b-container>
        <div id="footer" class="d-flex">

            <div class="p-5">
                <img src="../assets/logoFooter.webp">
                <p id="footerText">Esta aplicação é um projeto desenvolvido com o objetivo de aumentar a
                    aderência a
                    reciclagem e torna-la mais divertida. Queremos que se divirtam tanto como nós a reciclar
                    e
                    ajudar a
                    melhorar o nosso planeta.
                </p>
            </div>
            <div id="footerText" class="p-5">
                <b-col>
                    <h2 style="font-family: keedy Sans; font-size: 30px">Links</h2>
                </b-col>
                <b-col>
                    <b-list-group>
                        <b-list-group-item button>Home</b-list-group-item><br>
                        <b-list-group-item button>Mapa</b-list-group-item><br>
                        <b-list-group-item button>Eventos</b-list-group-item><br>
                        <b-list-group-item button>Ajuda</b-list-group-item>
                    </b-list-group>
                </b-col>
            </div>
            <div class="p-5">
                <img id="icon" src="../assets/faceIcon.svg">
                <img id="icon" src="../assets/instaIcon.svg">
                <img id="icon" src="../assets/emailIcon.svg">

            </div>
        </div>
    </b-container>

</template>

<style scoped>
hr {
    color: #1D202C;
    display: block;
    margin-top: 5em;
    margin-bottom: 0.5em;
    margin-left: auto;
    margin-right: auto;
    border-width: 2px;
    width: 80%
}

footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    margin: auto;
    width: 10%;
}

#footerLogo {
    width: 100px;
    height: 100px;
    margin-left: 100px;
    margin-bottom: 50px;
}

#footerText {
    font-family: "Inter";
    font-size: 20px;
    color: #1D202C;
}

#icon {
    margin-top: 20px;
}
</style>

