<template>
  <div id="app">

    <div class="container-fluid">
      <nav class="navbar navbar-inverse">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <img src="./assets/logo.png" class="navbar-brand" >
          <router-link  class="navbar-brand" to="/dashboard">Jigsaw</router-link>
        </div>

        <div class="collapse navbar-collapse" id="navbar-collapse-4">
          <ul class="nav navbar-nav">
            <li><router-link to="/dashboard">Dashboard</router-link></li>
            <li><router-link to="/person">Person</router-link></li>
            <li><router-link to="/business">Business</router-link></li>
          </ul>
        </div>
      </nav>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>

  export default {
    name: 'app',

    data() {
      return {}
    }
  }
</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
