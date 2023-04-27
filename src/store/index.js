import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import defaultAvatar from '../assets/image/default_avatar.jpg'

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
      avatar:null,
      surname:null,
      init:null
    },
    recordInfo:{
      id:null,
      user:null,
      stature:null,
      weight:null,
      allergy:null,
      blood:null,
      sicknessHistory:null
    }
  },
  getters:{
    getUserInfo:(state)=>state.userInfo,
    getUserId:(state)=>state.userInfo.id,
    getUserAvatar:(state) => {
      if(state.userInfo.avatar){
        return state.userInfo.avatar
      }
      return defaultAvatar
    },
    getRecordInfo:(state)=>state.recordInfo
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
      state.recordInfo = {}
    },
    setRecordInfo:(state,data) => {
      state.recordInfo = data
    },
    updateUserInfo:(state,payload)=>{
      let proxy = payload.proxy
      let recall = payload.recall
      proxy.$axios.get(proxy.$url.umsUserUrl + '/getUserInfoByToken').then((res)=>{
        const result = proxy.$analysisResult(proxy,res,true)
        if(result.code === 1){
          payload.store.commit('setUserInfo',result.data)
            if(recall){
              recall()
            }
        }
      })
    },
    updateRecordInfo:(state,payload)=>{
      let proxy = payload.proxy
      let recall = payload.recall
      proxy.$axios.get(proxy.$url.umsRecordUrl + '/getRecordByToken').then((res)=>{
        const result = proxy.$analysisResult(proxy,res,true)
        if(result.code === 1){
          payload.store.commit('setRecordInfo',result.data)
            if(recall){
              recall()
            }
        }
      })
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedstate({
      key:'vuex'
    })
  ]
})
