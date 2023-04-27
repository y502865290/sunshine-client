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
      <t-dialog
        header="抓数据"
        close-btn=""
        :onCancel="cancel"
        :visible="getDataVisible"
        width="70vw"
        placement="20%"
        :confirmBtn="null"

      >
            <span>导入</span>
            <br/>
            <span v-show="finish" style="color:blue">解析结果如下</span>
            <t-textarea 
                v-model="sourceData"
                placeholder="请输入HTML源代码"
                :autosize="{ maxRows:20, minRows:20 }"
            />
            <t-button style="margin-top: 15px;" @click="toPutInDatabase">导入数据库</t-button>
            <t-button style="margin-left: 15px;margin-top: 15px;" @click="toAnalysis">解析HTML</t-button>
      </t-dialog>
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

    const getDataVisible = ref(false)
    const finish = ref(false)
    const sourceData = ref()

    const getData = () => {
        getDataVisible.value = true
    }

    const cancel = () => {
        getDataVisible.value = false
    }

    const toAnalysis = () => {

    }

</script>