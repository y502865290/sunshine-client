<template>
    
    <t-row :gutter="[24,24]" class="contain">
        <t-col :flex="3">

            <div class="user-left-greeting">
                <div>
                    Hi，{{ store.getters.getUserInfo.nickname }}
                    <span class="regular"> 下午好，今天也要元气满满～</span>
                </div>
                    <img src="@/assets/image/logo.png" class="logo" />
            </div>

            <t-card class="user-info-list" title="个人信息" :bordered="false">
                <template #actions>
                    <t-dropdown trigger="click" :min-column-width="120">
                        <template #dropdown>
                            <t-dropdown-menu>
                                <t-dropdown-item @click="toUpdateUserInfo">
                                    <t-icon name="edit-1"></t-icon>
                                    修改个人信息
                                </t-dropdown-item>
                            </t-dropdown-menu>
                        </template>
                        <t-button theme="default" shape="square" variant="text">
                            <t-icon name="edit-1" />
                        </t-button>
                    </t-dropdown>

                </template>
                <t-row class="content" justify="space-between">
                    <t-col v-for="(item, index) in personalInfo" :key="index" class="contract" :span="3">
                        <div class="contract-title">
                        {{ item.title }}
                        </div>
                        <div class="contract-detail2">
                        {{ item.content }}
                        </div>
                    </t-col>
                </t-row>
            </t-card>

        </t-col>
        <t-col :flex="1">
            <t-card class="user-intro" :bordered="false">
                <t-avatar size="80px" image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
                <div class="name">{{ store.getters.getUserInfo.username }}</div>
                <div class="position">{{ store.getters.getUserInfo.type === 2 ? '普通用户' : '医生'}}</div>
            </t-card>
            <t-card title="常用联系人" class="user-team" :bordered="false">
                <template #actions>
                    <t-button theme="default" shape="square" variant="text">
                        <t-icon name="ellipsis" />
                    </t-button>
                </template>
                <t-list :split="false">
                </t-list>
             </t-card>
        </t-col>
    </t-row>

    <t-dialog
        header="更新用户信息"
        :visible="updateVisible"
        close-btn=""
        :onConfirm="onConfirmUpdate"
    >
        <t-form
            ref="updateForm"
            :data="updateUserInfo"
            resetType="initial"
            @submit="onSubmitUpdate"
            :rules="updateRules"
        >
            <t-form-item label="昵称" name="nickname">
                <t-input placeholder="请输入内容" v-model="updateUserInfo.nickname" />
            </t-form-item>
            <t-form-item label="姓氏" name="surname">
                <t-input placeholder="请输入内容" v-model="updateUserInfo.surname" />
            </t-form-item>
            <t-form-item label="性别" name="sex">
                <t-select v-model="updateUserInfo.sex" placeholder="请选择性别">
                    <t-option :value=1 label="男"></t-option>
                    <t-option :value=0 label="女"></t-option>
                </t-select>
            </t-form-item>
            <t-form-item label="邮箱" name="email">
                <t-input placeholder="请输入邮箱" v-model="updateUserInfo.email" />
            </t-form-item>
            <t-form-item label="电话号码" name="phone">
                <t-input type="number" placeholder="请输入电话号码" v-model="updateUserInfo.phone" />
            </t-form-item>

        </t-form>

    </t-dialog>

    <t-dialog
        header="初始化用户信息"
        :visible="initVisible"
        close-btn=""
        :onConfirm="onConfirmInit"
        :cancelBtn=null
    >
        <t-form
            :data="userInfo"
            ref="initForm"
            resetType="initial"
            @submit="onSubmitInit"
            :rules="rules"
        >
            <t-form-item label="昵称" name="nickname">
                <t-input placeholder="请输入内容" v-model="userInfo.nickname" />
            </t-form-item>
            <t-form-item label="姓氏" name="surname">
                <t-input placeholder="请输入内容" v-model="userInfo.surname" />
            </t-form-item>
            <t-form-item label="性别" name="sex">
                <t-select v-model="userInfo.sex" placeholder="请选择性别">
                    <t-option :value=1 label="男"></t-option>
                    <t-option :value=0 label="女"></t-option>
                </t-select>
            </t-form-item>
            <t-form-item label="电话号码" name="phone">
                <t-input type="number" placeholder="请输入电话号码" v-model="userInfo.phone" />
            </t-form-item>
        </t-form>
    </t-dialog>

    
</template>
<script setup>
    import { useStore } from "vuex"
    import { getCurrentInstance, reactive, ref } from 'vue'
    import { useRouter } from "vue-router"
    import { MessagePlugin } from 'tdesign-vue-next'

    const store = useStore()
    const personalInfo = ref([])
    const router = useRouter()
    const proxy = getCurrentInstance().proxy
    const userUrl = proxy.$url.umsUserUrl

    const initPersonalInfo = () => {
        const userInfo = store.getters.getUserInfo
        personalInfo.value.push({title:'用户名',content:userInfo.username})
        personalInfo.value.push({title:'昵称',content:userInfo.nickname})
        personalInfo.value.push({title:'姓氏',content:userInfo.surname})
        personalInfo.value.push({title:'性别',content:userInfo.sex === 0? '女':'男'})
        personalInfo.value.push({title:'邮箱',content:userInfo.email})
        personalInfo.value.push({title:'电话号码',content:userInfo.phone})
        personalInfo.value.push({title:'用户类型',content:userInfo.type === 1 ? '医生':'普通用户'})
        personalInfo.value.push({})
    }

    const init = () => {
        if(!store.getters.getUserInfo.id){
            store.commit('logOut')
            router.push({name:'Login'})
        }
        initPersonalInfo()
    }

    const initVisible = ref(store.getters.getUserInfo.init === 1 ? false : true)
    const initForm = ref(null)
    const userInfo = reactive({
        id:undefined,
        phone:undefined,
        sex:1,
        surname:undefined,
        nickname:undefined
    })
    const rules = {
        nickname:[
            { required:true, message:'名称必填', type:'error', trigger:'blur' },
            { required:true, message:'名称必填', type:'error', trigger:'change' }
        ],
        sex:[
            {required:true,message:'性别必填',type:'error',trigger:'change'},
            {required:true,message:'性别必填',type:'error',trigger:'blur'}
        ],
        phone:[
            {required:true,message:'电话必填',type:'error',trigger:'change'},
            {required:true,message:'电话必填',type:'error',trigger:'blur'}
        ],
        surname:[
            {required:true,message:'姓氏必填',type:'error',trigger:'change'},
            {required:true,message:'姓氏必填',type:'error',trigger:'blur'}
        ]
    }

    const onCancelInit = () => {
        initVisible.value = false
        initForm.value.reset()
    }

    const onConfirmInit = () => {
        initForm.value.submit()
    }

    const onSubmitInit = ({ validateResult,firstError,e }) => {
        e.preventDefault()
        if(validateResult === true){
            userInfo.id = store.getters.getUserId
            proxy.$axios.post(userUrl + '/init',userInfo).then((res)=>{
                const result = proxy.$analysisResult(proxy,res)
                if(result.code === 1){
                    onCancelInit()
                    getUserInfo()
                }
            })
        }else{
            MessagePlugin.warning(firstError)
        }
    }

    const getUserInfo = () => {
        proxy.$axios.get(userUrl + '/getUserInfoByToken').then((res)=>{
            const result = proxy.$analysisResult(proxy,res,true)
            if(result.code === 1){
                store.commit('setUserInfo',result.data)
                initPersonalInfo()
            }
        })
    }

    const updateVisible = ref(true)
    const updateUserInfo = reactive({
        email:null,
        sex:null,
        phone:null,
        surname:null,
        nickname:null,
        id:null
    })
    const updateRules = {
        nickname:[
            { required:true, message:'名称必填', type:'error', trigger:'blur' },
            { required:true, message:'名称必填', type:'error', trigger:'change' }
        ],
        sex:[
            {required:true,message:'性别必填',type:'error',trigger:'change'},
            {required:true,message:'性别必填',type:'error',trigger:'blur'}
        ],
        phone:[
            {required:true,message:'电话必填',type:'error',trigger:'change'},
            {required:true,message:'电话必填',type:'error',trigger:'blur'}
        ],
        surname:[
            {required:true,message:'姓氏必填',type:'error',trigger:'change'},
            {required:true,message:'姓氏必填',type:'error',trigger:'blur'}
        ],
        email:[
            {required:true,message:'邮箱必填',type:'error',trigger:'change'},
            {required:true,message:'邮箱必填',type:'error',trigger:'blur'}
        ]
    }
    const updateForm = ref(null)

    const toUpdateUserInfo = () => {
        const oldUserInfo = store.getters.getUserInfo
        updateUserInfo.email = oldUserInfo.email
        updateUserInfo.sex = oldUserInfo.sex
        updateUserInfo.phone = oldUserInfo.phone
        updateUserInfo.surname = oldUserInfo.surname
        updateUserInfo.nickname = oldUserInfo.nickname
        updateUserInfo.id = oldUserInfo.id
        updateVisible.value = true
    }

    const onSubmitUpdate = ({ validateResult, firstError, e }) => {
        e.preventDefault()
        if(validateResult === true){
            proxy.$axios.post(userUrl + '/update',updateUserInfo)
        }else{
            MessagePlugin.warning(firstError)
        }
    }



    init()
</script>
  
<style src="@/assets/css/userInfo.css" scoped></style>