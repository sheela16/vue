<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Tripooooooo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
   <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li> 
       <li class="nav-item">
        <router-link class="nav-link" to="/images">Images</router-link>
      </li>
   <li class="nav-item">
        <router-link class="nav-link" to="/Login">Login</router-link>
   </li>
   <li class="nav-item">
      <router-link class="nav-link" to="Register">Register</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Contact">Contact</router-link>
      </li>
     </ul>
  </div>
</nav>
<br>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: bold;
  color:black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-size:20px;
  font-style:italic;
  font-weight: bold;
  color:black;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
