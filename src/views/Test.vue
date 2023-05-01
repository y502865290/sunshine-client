<template>
    <span v-html="nowItem"></span>
    <br/>
    <span v-html=" 'data:' + data"></span>
    <br/>
    <span v-html=" 'token:' +  token"></span>
    <br/>
    <t-button @click="test">test</t-button>
    <t-button @click="exit">退出登录</t-button>
    <t-upload
        ref="uploadImage"
        v-model="avatar"
        action="http://localhost:7000/ums/user/uploadAvatar"
        theme="image"
        tips="头像上传"
        accept="image/*"
        :auto-upload="true"
        :upload-all-files-in-one-request="true"
        :headers="getToken()"
        :locale="{
          triggerUploadText: {
            image: '请选择图片',
          },
        }"
        @fail="handleFail"
        :formatResponse="formatResponse"
      ></t-upload>


      <t-button @click="getData">抓数据</t-button>

</template>

<script setup>
    import { getCurrentInstance, ref } from "vue";

    const data = ref('')
    const token = ref('')
    const proxy = getCurrentInstance().proxy
    const nowItem = ref('now token :' + localStorage.getItem('accessToken'))

    const test = ()=>{
        proxy.$axios.get("http://localhost:7000/").then((res)=>{
            const result = proxy.$analysisResult(proxy,res)
            token.value = result.data.token
            data.value = result.data.data
        })
    }

    const getToken = () => {
    let expiresTime = Number(localStorage.getItem('expiresTime'))
    let refreshToken = localStorage.getItem('refreshToken')
    let accessToken = localStorage.getItem('accessToken')
    let headers = {}
        if(expiresTime && accessToken && refreshToken){
            let now = Date.now()
            headers['refresh-token'] = accessToken
            if(now >= expiresTime){
                headers['refresh-token'] = refreshToken
            }
        }
    return headers
    }

    const exit = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('expiresTime')
    }

    const uploadImage = ref(null)
    const avatar = ref([])

    const handleFail = () => {
        proxy.$message.error({content:'上传失败'})
    }

    const formatResponse = (response) => {
        return {url:response.data}
    }


</script>