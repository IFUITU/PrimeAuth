import '@babel/polyfill'
import 'mutationobserver-shim'
import './assets/css/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import axios from '@/plugins/axios'
import VueAxios from 'vue-axios'
import store from './store/store'
import PrimeVue from 'primevue/config'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                          //icons




function init(){
    const app = createApp(App)
    app.use(router)
    app.use(VueAxios, axios)
    app.use(PrimeVue)
    app.use(store)

    app.component('Dialog',Dialog); app.component('InputText',InputText)

    app.mount('#app')
}


var token = localStorage.getItem('auth_token')
if(token){
    let ref_jwt = ''
    axios.post("/auth/api-jwt-ref/", {"token":token}).then(r=>{
        ref_jwt = r.data.token
    })
    alert(JSON.stringify(ref_jwt))

    axios.get('/auth/me/').then(r=>{
        
        // this.$store.state.commit('login', token)
        
        store.state.user = r.data.user
        this.$state.commit("login",token)
        init()
    }).catch((r)=>{
        
        alert(JSON.stringify(r))
        init()
    })
}else{
    init()
}






