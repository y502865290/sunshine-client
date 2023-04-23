import axios from 'axios';

const server = axios.create({
        timeout:60000,
        withCredentials:true,
        headers:{
        'Content-Type':'application/json',
        'X-Requested-With':'XMLHttpRequest',
        'Accept':'application/json'}
    })

server.interceptors.request.use((request)=>{
    let expiresTime = Number(localStorage.getItem('expiresTime'))
    let refreshToken = localStorage.getItem('refreshToken')
    let accessToken = localStorage.getItem('accessToken')
    if(expiresTime && accessToken && refreshToken){
        let now = Date.now()
        request.headers['access-token'] = accessToken
        if(now >= expiresTime){
            request.headers['refresh-token'] = refreshToken
        }
    }
    return request
})

server.interceptors.response.use((res)=>{
    const accessToken = res.headers['access-token']
    const refreshToken = res.headers['refresh-token']
    const expiresTime = res.headers['token-expires']
    if(accessToken && refreshToken && expiresTime){
        localStorage.setItem('accessToken',accessToken)
        localStorage.setItem('refreshToken',refreshToken)
        localStorage.setItem('expiresTime',expiresTime)
    }
    return res
})

export default server