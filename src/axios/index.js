import axios from 'axios';
const server = axios.create({
    timeout:60000,
    withCredentials:true,
    headers:{
        'Content-Type':'application/json',
        'X-Requested-With':'XMLHttpRequest',
        "Accept":"application/json"
    }
})
export default server