<template>
    <div>
        <b-container>
            <b-row cols="2">
                <b-col><img src="../assets/glogogog 1.png"></b-col>
                <b-col>
                    <p id="footerText">Esta aplicação é um projeto desenvolvido com o objetivo de aumentar a aderência a
                        reciclagem e torna-la mais divertida. Queremos que se divirtam tanto como nós a reciclar e
                        ajudar a
                        melhorar o nosso planeta.
                    </p>
                </b-col>
                <b-col>
                    <h2>Links</h2>
                </b-col>
                <b-col>
                    <b-list-group>
                        <b-list-group-item button>Home</b-list-group-item><br>
                        <b-list-group-item button>Mapa</b-list-group-item><br>
                        <b-list-group-item button>Eventos</b-list-group-item><br>
                        <b-list-group-item button>Ajuda</b-list-group-item>
                    </b-list-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style scoped>
#footer {
    width: 100%;
    height: 200px;
    bottom: auto;
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
    width: 500px;
}
</style>

