<template>
  <div class="login">
    
    <div class=" container p-5">
      <form action="" class="_form card" @submit.prevent.stop="OnSubmit">
        <div class="card-header">Login</div>
        <div class="card-body">
          <div class="p-fluid">
            <div class="p-field">
              <label for="Username">Username</label>
              <InputText id="Username" type="text" placeholder="Username" v-model="form.usernameTxt"/>
              
            </div>
            <div class="p-field mt-3">
              <label for="password">Password</label>
              <InputText id="password" type="password" placeholder="Password" v-model="form.passwordTxt"/>
              
            </div>
          </div>
        </div>
        <div class="card-footer text-center">
          <button class="btn btn-outline-warning mr-3">Register</button>
          <button class="btn btn-outline-success" type="submit">Login</button>
        </div>





      </form>

    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'login',
    props: {

    },
    data() {
      return {
        form:{
          usernameTxt:'',
          passwordTxt:""

        },
        any_error:null
      }
    },
    methods:{
      OnSubmit(){
        
        this.axios.post('/auth/api-jwt/', {
          username:this.form.usernameTxt,
          password:this.form.passwordTxt
        }).then(r=>{
          
          this.$store.commit('login',r.data.token)
          this.$router.push({name:"index"})
        }).catch(()=>{
          this.any_error = "Username or password is not valid! Try again!"
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }


</style>