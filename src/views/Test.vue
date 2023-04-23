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
        v-model="avator"
        action="http://localhost:7000/upload"
        theme="image"
        tips="头像上传"
        accept="image/*"
        :auto-upload="true"
        :upload-all-files-in-one-request="true"
        :locale="{
          triggerUploadText: {
            image: '请选择图片',
          },
        }"
        @fail="handleFail"
        :formatResponse="formatResponse"
      ></t-upload>
</template>
<script setup>
import { getCurrentInstance, ref } from "vue";

    const data = ref('')
    const token = ref('')
    const proxy = getCurrentInstance().proxy
    const nowItem = ref('now token :' + localStorage.getItem('accessToken'))

    const test = ()=>{
        proxy.$axios.get("http://localhost:7000/test").then((res)=>{
            const result = proxy.$analysisResult(proxy,res)
            token.value = result.data.token
            data.value = result.data.data
        })
    }

    const exit = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('expiresTime')
    }

    const uploadImage = ref(null)
    const avator = ref([])

    const handleFail = () => {
        proxy.$message.error({content:'上传失败'})
    }

    const formatResponse = (response) => {
        return {url:response.data}
    }

</script>