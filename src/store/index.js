import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

export default createStore({
  state: {
    userInfo:{
      id:null,
      username:null,
      phone:null,
      type:null,
      nickname:null,
      status:null,
      email:null,
      sex:null,
      avator:null,
      surname:null,
      init:null
    }
  },
  getters:{
    getUserInfo:(state)=>state.userInfo,
    getUserId:(state)=>state.userInfo.id
  },
  mutations: {
    setUserInfo:(state,data) => {
      state.userInfo = data
    },
    logOut: (state) => {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('expiresTime')
      localStorage.removeItem('refreshToken')
      state.userInfo = {}
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedstate({
      key:'userInfo'
    })
  ]
})
