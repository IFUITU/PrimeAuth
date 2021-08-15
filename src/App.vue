<template>
  <div id="nav">
    <div class="text-center">
      <!-- <Dialog header="LLLL" :visible="true">
        This is Dialog Component from main.js 
      </Dialog> -->
      <router-link to="/#/login" v-if="$store.state.user == null">Login</router-link> |
      <router-link :to="{name:'reg'}">Register</router-link> |
      <a href="#" v-if="$store.state.user != null" @click="$store.commit('logout')">Logout</a>
      {{$store.state.isAuthenticated}}
      
      <div v-if="$store.state.user != null">
        
        <div  class="border userINfo mt-3" @click="$router.push({name:'index'})">
          <strong id="usernameID">{{$store.state.user.username}}</strong>
        </div>

      </div>

    </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#2c3e50;
  font-weight: bold;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.userINfo{
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: absolute;
  left: 47.5%;
}

#usernameID{
  top: 13px;
  left: 0;
  right: 0;
  

  position: absolute;
}
</style>
