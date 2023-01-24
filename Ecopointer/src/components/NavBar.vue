<template>
  <nav class="navbar navbar-light" style="background-color: #e3f2fd;"></nav>  
      
  <main class="background" style="background-color: #e3f2fd;">
    <ul class="nav nav-pills mb-3 navbar fixed-top navbar-expand-lg " id="pills-tab" role="tablist" >
      <li class="nav-item">
        <a class="nav-link  " id="pills-home-tab" data-toggle="pill" href="/" role="tab" aria-controls="pills-home" aria-selected="false" style="color: #134C67">Ecopointer</a>
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
      <li class="nav-item " >
        <a class="nav-link " id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" style="color: #134C67">Registar</a>
      </li>
      <li class="nav-item " >
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" style="background-color: #134C67">Login</button>
      </li>
    </ul>
  </main>

  


<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Bem-vindo(a)</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <input  type="text" placeholder="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
       <br>
       <input type="password" placeholder="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button  type="submit" class="btn btn-primary mx-auto d-blockm" data-bs-dismiss="modal">Iniciar Sessão</button>
      </div>

    </div>
  </div>
</div>

  

</template>






