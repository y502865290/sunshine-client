<template>
 <div class="content">
        <div class="content-wrapper">
            <div class="nav" ref="nav">
                <div class="nav-item" id="nav-signin-btn" @click="toLogin">
                    <Icon name="login" size="30px"></Icon>
                    <span>登录</span>
                    <div class="block"></div>
                </div>
                <div class="nav-item" id="nav-signup-btn" @click="toSignUp" >
                    <Icon name="user-add" size="30px"></Icon>
                    <span>注册</span>
                    <div class="block"></div>
                </div>
            </div>
            <div class="center">
                <div class="signin-img-wrapper" ref="signInImgWrapper">
                    <div class="img-tips">
                        <!-- <h1>Start Your Work</h1>
                        <h5>One Key adn there links</h5> -->
                    </div>
                </div>
                <div class="signup-img-wrapper" ref="signUpImgWrapper" >
                    <div class="img-tips">
                        <!-- <h1>Start Your Work</h1>
                        <h5>One Key adn there links</h5> -->
                    </div>
                </div>
            </div>
            <div class="form" ref="form">
                <div class="form-wrapper">
                    <div class="signin common-style" ref="signInForm" >
                        <div class="title" v-show="!useEmail">
                            <span>使用其他方式登录:</span>
                            <span @click="toUseEmail">邮箱</span>
                        </div>
                        <div class="title" v-show="useEmail">
                            <span>使用其他方式登录:</span>
                            <span @click="toUseUsername">用户名</span>
                        </div>
                            <t-radio-group 
                                variant="primary-filled" 
                                default-value="1" 
                                v-model:value="userType" 
                                style="background-color:aliceblue;"
                            >
                                <t-radio-button value="1" >医生</t-radio-button>
                                <t-radio-button value="2">普通用户</t-radio-button>
                            </t-radio-group>

                        <div class="inputs-wrapper">
                            <div class="inputs-item items-user" v-show="!useEmail">
                                <span class="input-tips">用户名</span>
                                <input type="text" class="inputs" v-model="loginUser.username">
                            </div>
                            <div class="inputs-item items-user" v-show="useEmail">
                                <span class="input-tips">邮箱</span>
                                <input type="text" class="inputs" v-model="loginUser.email">
                            </div>
                            <div class="inputs-item items-pwd">
                                <span class="input-tips">密码</span>
                                <input type="password" class="inputs" v-model="loginUser.password">
                            </div>
                            <button class="signin-btn" @click="login">登录</button>
                        </div>
                    </div>
                    <div class="signup common-style" ref="signUpForm">
                        <div class="title animations" ref="titleAnimation">
                            <span>已经有账号   </span>
                            <span @click="toLogin">登录</span>
                        </div>
                        <div class="inputs-wrapper">
                            <t-radio-group 
                                variant="primary-filled" 
                                default-value="1" 
                                            v-model:value="userType" 
                                            style="background-color:aliceblue;"
                            >
                                <t-radio-button value="1" >医生</t-radio-button>
                                <t-radio-button value="2">普通用户</t-radio-button>
                            </t-radio-group>
                            <div class="inputs-item items-user animations" ref="usernameAnimation">
                                <span class="input-tips">用户名</span>
                                <input type="text" class="inputs" v-model="signUpUser.username">
                            </div>
                            <div class="inputs-item items-email animations" ref="emailAnimation">
                                <span class="input-tips">E-mail</span>
                                <input type="text" class="inputs" v-model="signUpUser.email">
                            </div>
                            <div class="inputs-item items-pwd animations" ref="passwordAnimation">
                                <span class="input-tips">密码</span>
                                <input type="password" class="inputs" v-model="signUpUser.password">
                            </div>
                            <button class="signin-btn animations" ref="signInAnimation" @click="signUp">注册</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {ref, reactive, getCurrentInstance} from 'vue'
    import { Icon } from 'tdesign-icons-vue-next';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    const pageInstance = getCurrentInstance();
    const proxy = pageInstance.proxy
    const signInForm = ref(null)
    const signUpForm = ref(null)
    const signInImgWrapper = ref(null)
    const signUpImgWrapper = ref(null)
    const nav = ref(null)
    const form = ref(null)
    const titleAnimation = ref(null)
    const usernameAnimation = ref(null)
    const emailAnimation = ref(null)
    const passwordAnimation = ref(null)
    const signInAnimation = ref(null)
    const useEmail = ref(false)
    const router = useRouter()

    let animationList = []
    animationList.push(titleAnimation)
    animationList.push(usernameAnimation)
    animationList.push(emailAnimation)
    animationList.push(passwordAnimation)
    animationList.push(signInAnimation)

    const toSignUp = function(){
        signInForm.value.style.top = '140%'
        signInImgWrapper.value.style.transform = 'translateY(-100%)'
        signUpImgWrapper.value.style.transform = 'translateY(-100%)'
        nav.value.classList.add('nav-form-animation-bottom')
        form.value.classList.add('nav-form-naimation-bottom')
        nav.value.classList.remove('nav-form-animation-top')
        form.value.classList.remove('nav-form-animation-top')
        signUpForm.value.style.zIndex = '1'
        signUpForm.value.style.top = '50%'
        for (let i = 0; i < animationList.length; i++){
            const temp = animationList[i]
            temp.value.style.transition = 'ls'
            temp.value.style.opacity = '1'
            temp.value.style.transform = 'translate(0,0)'
        }
    }

    const toLogin = function(){
        signInForm.value.style.top = '50%'
        signUpForm.value.style.transition = 'ls'
        signUpForm.value.style.transition = '-100%'
        signInImgWrapper.value.style.transform = 'translateY(0%)'
        signUpImgWrapper.value.style.transform = 'translateY(0%)'
        nav.value.classList.remove('nav-form-animation-bottom')
        form.value.classList.remove('nav-form-naimation-bottom')
        nav.value.classList.add('nav-form-animation-top')
        form.value.classList.add('nav-form-animation-top')
        signUpForm.value.style.zIndex = '-1'
        signUpForm.value.style.top = '-50%'
        for (let i = 0; i < animationList.length; i++){
            const temp = animationList[i]
            temp.value.style.transition = '0'
            temp.value.style.opacity = '0'
            temp.value.style.transform = 'translate(-10%,0)'
        }
    }

    const toUseEmail = function(){
        useEmail.value = true
    }

    const toUseUsername = function(){
        useEmail.value = false
    }

    /**
     * 登录注册
     */
    const userType = ref('1');
    const loginUser = reactive({username:null,password:null,email:null,type:null})
    const signUpUser = reactive({username:null,password:null,email:null})

    const signUp = function(){
        signUpUser.type = Number(userType.value)
        proxy.$axios.put(proxy.$url.umsUserUrl+'/signUp',signUpUser).then((res)=>{
            proxy.$analysisResult(proxy,res)
        })
    }

    const login = function(){
        loginUser.type = Number(userType.value)
        if(!useEmail.value){
            loginUser.email = null
            proxy.$axios.post(proxy.$url.umsUserUrl + '/loginWithUsername',loginUser).then((res)=>{
                const result = proxy.$analysisResult(proxy,res)
                if(result.code === 1){
                    initData(result.data)
                }
            })
        }else{
            loginUser.username = null
            proxy.$axios.post(proxy.$url.umsUserUrl + '/loginWithEmail',loginUser).then((res)=>{
                const result = proxy.$analysisResult(proxy,res)
                if(result.code === 1){
                    initData(result.data)
                }
            })
        }

    }

    const store = useStore()

    const initData = (data) => {
        let tokenInfo = JSON.parse(data.tokenInfo)
        localStorage.setItem('accessToken',tokenInfo.accessToken)
        localStorage.setItem('refreshToken',tokenInfo.refreshToken)
        localStorage.setItem('expiresTime',tokenInfo.expiresTime)
        store.commit('setUserInfo',JSON.parse(data.data))

        if(store.getters.getUserInfo.type === 1){
            store.commit('updateRecordInfo',{proxy,store,recall:toInitDoctorInfo})
        }else{
            store.commit('updateRecordInfo',{proxy,store,recall:goMain})
        }

        function toInitDoctorInfo(){
            store.commit('updateDoctorInfo',{proxy,store,recall:goMain})
        }
        
        function goMain(){
            router.push({name:'UserInfo'})
        }
        
    }
</script>
<style src="@/assets/css/login.css" scoped></style>