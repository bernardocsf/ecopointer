<template>
  <main class="background">
    <ul class="nav nav-pills mb-3 navbar fixed-top navbar-expand-lg " id="pills-tab" role="tablist" >
      <li class="nav-item">
        <a class="nav-link" id="ecopointerM" data-toggle="pill" href="/" role="tab" aria-controls="pills-home" aria-selected="false">Ecopointer</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"   id="pills-profile-tab" data-toggle="pill" href="/map" role="tab" aria-controls="pills-profile" aria-selected="false" style="color: #134C67">Mapa</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="/eventos" role="tab" aria-controls="pills-contact" aria-selected="false" style="color: #134C67">Evento</a>
      </li>
      <li class="nav-item me-auto">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="/ajuda" role="tab" aria-controls="pills-contact" aria-selected="false" style="color: #134C67">Ajuda</a>
      </li>
      <li class="nav-item">
        <button type="button" id="loginButton" class="btn btn-primary">Perfil</button>
      </li>
      <li class="nav-item">
        <button type="button" id="loginButton" class="btn btn-primary">Notificações</button>
      </li>
    </ul>
  </main>

</template>

<style scoped>

#pills-tab{
  position: relative;
  margin-left: 4%;
  margin-right: 4%;
}
.nav-link{
  color: #134C67;
  font-family: 'Keedy Sans';
}

#loginButton{
  background-color: #F7F4F3;
  color: #43804B;
  font-family: 'Keedy Sans';
}

#ecopointerM{
  font-size: 30px;
}

#loginButton:hover{
  color:#1D202C
}
.nav-link:hover{
  color: #1D202C;
}

</style>





