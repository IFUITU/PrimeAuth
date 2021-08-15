import axios from 'axios'
import { createStore } from 'vuex'
import routes from '../router/index'
// Create a new store instance.
const store = createStore({
  state () {
    return {
      isAuthenticated:false,
      user:null
    }
  },
  mutations: {
   login(state, value){
      if(value){
          localStorage.setItem('auth_token',value)
          axios.defaults.headers.common['Authorization'] = 'JWT '+value


          axios.get('/auth/me/').then(r=>{
            store.state.user = r.data.user
            state.isAuthenticated = true
          }).catch((r)=>{
            alert(JSON.stringify(r))
          })

          
          routes.push({name:"index"})
      }
   },

   logout(state){
       state.isAuthenticated = false,
       state.user=null,
       localStorage.removeItem("auth_token")
       delete axios.defaults.headers.common['Authorization'] 

       routes.push({name:"login"})

   }
  }
})

export default store