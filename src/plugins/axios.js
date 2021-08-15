import axios from 'axios'

let token = localStorage.getItem("auth_token")
if(token){
    axios.defaults.headers.common['Authorization'] = 'JWT '+token
}


export default axios
