<template>
  <div class="about">
    
    <div class=" container p-5">
      <form  class="_form card" @submit.prevent.stop="onSubmit">
        <div class="card-header">Register</div>
        <div class="card-body">
          <div class="p-fluid">
            <div class="p-field">
              <label for="Username">Username</label>
              <InputText id="Username" type="text" placeholder="Username" v-model="form.username"/>
            </div>
            <div class="p-field mt-3">
              <label for="password">Password</label>
              <InputText id="password" type="password" placeholder="Password" v-model="form.password"/>
            </div>
            <div class="p-field mt-3">
              <label for="confirm">Confirm</label>
              <InputText id="confirm" type="password" placeholder="Confirm" v-model="form.confirm"/>
            </div>
            <div class="p-field mt-3">
              <label for="email">Email</label>
              <InputText id="email" type="email" placeholder="Email" v-model="form.email"/>
            </div>
          </div>
        </div>
        <div class="card-footer text-center">
          <button class="btn btn-outline-warning mr-3">Login</button>
          <button class="btn btn-outline-success" type="submit">Register</button>
        </div>





      </form>

    </div>
  </div>
</template>


<script>
  export default {
    name:"register",
    data(){
      return {
        form:{
          username:'',
          passsword:"",
          email:"",
          confirm:""
        }
      }
    },
    methods:{
      onSubmit(){
        alert("JJJJ")
        this.axios.post('/auth/register/',this.form).then(r=>{
          alert(JSON.stringify(r))
          this.$router.push({name:"index"})
        })
      }
    }
  }
</script>