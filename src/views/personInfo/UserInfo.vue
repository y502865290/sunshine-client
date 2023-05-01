<template>
    <div style="overflow-y: scroll;height: 92vh;">
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

            <t-card class="user-info-list" title="医生基本信息" :bordered="false" v-if="store.getters.getUserInfo.type === 1">
                <template #actions>
                    <t-dropdown trigger="click" :min-column-width="120">
                        <template #dropdown>
                            <t-dropdown-menu>
                                <t-dropdown-item @click="toUpdateUserInfo">
                                    <t-icon name="edit-1"></t-icon>
                                    修改医生信息
                                </t-dropdown-item>
                            </t-dropdown-menu>
                        </template>
                        <t-button theme="default" shape="square" variant="text">
                            <t-icon name="edit-1" />
                        </t-button>
                    </t-dropdown>

                </template>
                <t-dropdown>
                    <t-row>
                        <t-col :span="3">
                            <t-image 
                                style="cursor: pointer;"
                                :style="{ width: '13vh', height: '19vh' }"
                                fit="fill"
                                :src="defaultDoctor" />
                        </t-col>
                        <t-col :span="9">
                            <t-row >
                                <t-col :flex="1">
                                    <div class="info-title">
                                        姓名
                                    </div>
                                    <div class="info-content">
                                        {{ store.getters.getDoctorInfo.name }}
                                    </div>
                                </t-col>
                                <t-col :flex="2">
                                    <div class="info-title">
                                        身份证号
                                    </div>
                                    <div  class="info-content">
                                        {{ store.getters.getDoctorInfo.idCard }}
                                    </div>
                                </t-col>
                            </t-row>
                            <t-row >
                                <t-col style="margin-top: 3vh;" :span="12">
                                    <div class="info-title">
                                        所属
                                    </div>
                                    <div  class="info-content">
                                       {{ store.getters.getDoctorInfo.hospital }}
                                    </div>
                                </t-col>
                            </t-row>
                        </t-col>
                    </t-row>
                </t-dropdown>
            </t-card>

            <t-card class="user-info-list" title="医疗相关信息" :bordered="false">
                <template #actions>
                    <t-dropdown trigger="click" :min-column-width="120">
                        <template #dropdown>
                            <t-dropdown-menu>
                                <t-dropdown-item @click="toUpdateRecord">
                                    <t-icon name="edit-1"></t-icon>
                                    修改医疗信息
                                </t-dropdown-item>
                            </t-dropdown-menu>
                        </template>
                        <t-button theme="default" shape="square" variant="text">
                            <t-icon name="edit-1" />
                        </t-button>
                    </t-dropdown>

                </template>
                <t-row class="content" justify="space-between" v-if="recordInfo.length !== 0">
                    <t-col class="contract" :span="3">
                        <div class="contract-title">
                        {{ recordInfo[0].title }}
                        </div>
                        <div class="contract-detail2">
                        {{ recordInfo[0].content }}
                        </div>
                    </t-col>
                    <t-col class="contract" :span="3">
                        <div class="contract-title">
                        {{ recordInfo[1].title }}
                        </div>
                        <div class="contract-detail2">
                        {{ recordInfo[1].content }}
                        </div>
                    </t-col>
                    <t-col class="contract" :span="3">
                        <div class="contract-title">
                        {{ recordInfo[2].title }}
                        </div>
                        <div class="contract-detail2">
                        {{ recordInfo[2].content }}
                        </div>
                    </t-col>
                </t-row>
                <t-row class="content" justify="space-between" v-if="recordInfo.length !== 0">
                    <t-col>
                        <div class="contract-title">
                        {{ recordInfo[3].title }}
                        </div>
                        <div class="contract-detail2">
                        {{ recordInfo[3].content }}
                        </div>
                    </t-col>
                </t-row>
                <t-row class="content" justify="space-between" v-if="recordInfo.length !== 0">
                    <t-col>
                        <div class="contract-title">
                        {{ recordInfo[4].title }}
                        </div>
                        <div class="contract-detail2">
                        {{ recordInfo[4].content }}
                        </div>
                    </t-col>
                </t-row>
            </t-card>
            <div style="height: 30px;"></div>
        </t-col>
        <t-col :flex="1">
            <t-card class="user-intro" :bordered="false">
                <t-avatar 
                    size="80px" 
                    :image="store.getters.getUserAvatar"
                    @click="toUploadAvatar"
                    style="cursor: pointer; "></t-avatar>
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
    </div>

    <t-dialog
        header="更新用户信息"
        :visible="updateVisible"
        close-btn=""
        :onConfirm="onConfirmUpdate"
        :onCancel="onCancelUpdate"
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
        header="完善个人信息"
        :visible="initVisible"
        close-btn=""
        :onConfirm="onConfirmInit"
        :cancelBtn=null
        top="0%"
    >
        <t-form
            :data="initInfo"
            ref="initForm"
            resetType="initial"
            @submit="onSubmitInit"
            :rules="rules"
            
        >
            <t-form-item label="昵称" name="nickname">
                <t-input placeholder="请输入内容" v-model="initInfo.nickname" />
            </t-form-item>
            <t-form-item label="姓氏" name="surname">
                <t-input placeholder="请输入内容" v-model="initInfo.surname" />
            </t-form-item>
            <t-form-item label="性别" name="sex">
                <t-select v-model="initInfo.sex" placeholder="请选择性别">
                    <t-option :value=1 label="男"></t-option>
                    <t-option :value=0 label="女"></t-option>
                </t-select>
            </t-form-item>
            <t-form-item label="电话号码" name="phone">
                <t-input type="number" placeholder="请输入电话号码" v-model="initInfo.phone" />
            </t-form-item>
            <t-form-item label="身高" name="stature">
                <t-input-adornment append="cm">
                    <t-input style="width:260px" placeholder="请输入身高" type="number" v-model="initInfo.stature"  />
                </t-input-adornment>
            </t-form-item>
            <t-form-item label="体重" name="weight">
                <t-input-adornment append="kg">
                    <t-input style="width:260px" placeholder="请输入体重" type="number" v-model="initInfo.weight"  />
                </t-input-adornment>
            </t-form-item>
            <t-form-item label="血型" name="blood">
                <t-input placeholder="请输入血型" v-model="initInfo.blood" />
            </t-form-item>
            <t-form-item label="过敏史" name="allergy">
                <t-textarea placeholder="请输入过敏史" v-model="initInfo.allergy" />
            </t-form-item>
            <t-form-item label="过往病史" name="sicknessHistory">
                <t-textarea placeholder="请输入过往病史" v-model="initInfo.sicknessHistory" />
            </t-form-item>
        </t-form>
    </t-dialog>

    <t-dialog
        header="更改医疗信息"
        :visible="updateRecordVisible"
        close-btn=""
        :onConfirm="onConfirmUpdateRecord"
        :onCancel="onCancelUpdateRecord"
    >
        <t-form
            :data="updateRecord"
            ref="updateRecordForm"
            resetType="initial"
            @submit="onSubmitUpdateRecord"
            :rules="rules"
        >
            <t-form-item label="身高" name="stature">
                <t-input-adornment append="cm">
                    <t-input style="width:260px" placeholder="请输入身高" type="number" v-model="updateRecord.stature"  />
                </t-input-adornment>
            </t-form-item>
            <t-form-item label="体重" name="weight">
                <t-input-adornment append="kg">
                    <t-input style="width:260px" placeholder="请输入体重" type="number" v-model="updateRecord.weight"  />
                </t-input-adornment>
            </t-form-item>
            <t-form-item label="血型" name="blood">
                <t-input placeholder="请输入血型" v-model="updateRecord.blood" />
            </t-form-item>
            <t-form-item label="过敏史" name="allergy">
                <t-textarea placeholder="请输入过敏史" v-model="updateRecord.allergy" />
            </t-form-item>
            <t-form-item label="过往病史" name="sicknessHistory">
                <t-textarea placeholder="请输入过往病史" v-model="updateRecord.sicknessHistory" />
            </t-form-item>
        </t-form>
    </t-dialog>

    <t-dialog
        header="更换头像"
        :visible="avatarVisible"
        :onCancel="onCancelUpload"
        cancelBtn="返回"
        close-btn=""
        width="15vw"
        :confirmBtn="null"
    >
        <t-upload
            ref="uploadImage"
            v-model="avatar"
            style="margin-left:10%;margin-right: 10%;"
            :action="userUrl + '/uploadAvatar'"
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
            :formatResponse="formatResponse"
        >
        </t-upload>
    </t-dialog>

    <t-dialog
        header="完善医生基本信息"
        :visible="initDoctorInfoVisible"
        close-btn=""
        :onConfirm="onConfirmInitDoctor"
        :cancelBtn=null
        confirmBtn="提交审核"
        top="10%"
    >
        <t-form
            :data="initDoctorInfo"
            ref="initDoctorInfoForm"
            resetType="initial"
            @submit="onSubmitInitDoctorInfo"
            :rules="initDoctorRules"
            
        >
            <t-form-item label="真实姓名" name="name">
                <t-input placeholder="请输入内容" v-model="initDoctorInfo.name" />
            </t-form-item>
            <t-form-item label="身份证号" name="idCard">
                <t-input placeholder="请输入内容" v-model="initDoctorInfo.idCard" />
            </t-form-item>
            <t-form-item label="所属医院">
                <t-input placeholder="请输入内容" v-model="initDoctorInfo.hospital" />
            </t-form-item>
            <t-form-item label="证书">
                <t-upload
                    ref="initDoctorInfoUploadRef"
                    :auto-upload="false"
                    :action="doctorUrl + '/uploadCertificate'"
                    v-model="doctorCertificate"
                    :size-limit="{ size: 5, unit: 'MB' }"
                    :upload-all-files-in-one-request="true"
                    :onSuccess="onSuccessUploadCertificate"
                    placeholder="请选择不大于5MB的图片"
                    accept="image/*"
                    :headers="getToken()"
                />
            </t-form-item>

        </t-form>
    </t-dialog>
    
</template>
<script setup>
    import { useStore } from "vuex"
    import { getCurrentInstance, reactive, ref, watch } from 'vue'
    import { useRouter } from "vue-router"
    import { MessagePlugin } from 'tdesign-vue-next'
    import defaultDoctor from '@/assets/image/default-doctor.png';

    const store = useStore()
    const personalInfo = ref([])
    const router = useRouter()
    const proxy = getCurrentInstance().proxy
    const userUrl = proxy.$url.umsUserUrl
    const recordUrl = proxy.$url.umsRecordUrl
    const doctorUrl = proxy.$url.umsDoctorUrl

    const initPersonalInfo = () => {
        const userInfo = store.getters.getUserInfo
        personalInfo.value = []
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
        initRecordInfo()
    }

    const initVisible = ref(store.getters.getUserInfo.init === 1 ? false : true)
    const initForm = ref(null)
    const initInfo = reactive({
        id:undefined,
        phone:undefined,
        sex:1,
        surname:undefined,
        nickname:undefined,
        stature:undefined,
        weight:undefined,
        allergy:undefined,
        blood:undefined,
        user:undefined,
        sicknessHistory:undefined
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
        ],
        stature:[
            {required:true,message:'身高必填',type:'error',trigger:'change'},
            {required:true,message:'身高必填',type:'error',trigger:'blur'}
        ],
        weight:[
            {required:true,message:'体重必填',type:'error',trigger:'change'},
            {required:true,message:'体重必填',type:'error',trigger:'blur'}
        ],
        blood:[
            {required:true,message:'血型必填',type:'error',trigger:'change'},
            {required:true,message:'血型必填',type:'error',trigger:'blur'}
        ],
        allergy:[
            {required:true,message:'过敏史必填',type:'error',trigger:'change'},
            {required:true,message:'过敏史必填',type:'error',trigger:'blur'}
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
            let userInfo = {}
            userInfo.id = store.getters.getUserId
            userInfo.phone = initInfo.phone
            userInfo.sex = initInfo.sex
            userInfo.surname = initInfo.surname
            userInfo.nickname = initInfo.nickname
            proxy.$axios.post(userUrl + '/init',userInfo).then((res)=>{
                const result = proxy.$analysisResult(proxy,res)
                if(result.code === 1){
                    onCancelInit()
                    store.commit('updateUserInfo',{proxy,store})
                }
            })
            let recordInfo = {}
            recordInfo.sicknessHistory = initInfo.sicknessHistory
            recordInfo.user = store.getters.getUserId
            recordInfo.stature = Number(initInfo.stature)
            recordInfo.weight = Number(initInfo.weight)
            recordInfo.blood = initInfo.blood
            recordInfo.allergy = initInfo.allergy
            proxy.$axios.put(recordUrl + '/addRecord',recordInfo).then((res)=>{
                const result = proxy.$analysisResult(proxy,res,true)
                if(result.code === 1){
                    onCancelInit()
                    store.commit('updateRecordInfo',{proxy,store})
                }
            })
        }else{
            MessagePlugin.warning(firstError)
        }
    }

    const updateVisible = ref(false)
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

    const onConfirmUpdate = () => {
        updateForm.value.submit()
    }

    const onSubmitUpdate = ({ validateResult, firstError, e }) => {
        e.preventDefault()
        if(validateResult === true){
            proxy.$axios.post(userUrl + '/update',updateUserInfo).then((res)=>{
                const result = proxy.$analysisResult(proxy,res)
                if(result.code === 1){
                    store.commit('updateUserInfo',{proxy,store})
                    onCancelUpdate()
                }
            })
        }else{
            MessagePlugin.warning(firstError)
        }
    }

    const onCancelUpdate = () => {
        updateForm.value.reset()
        updateVisible.value = false
    }

    const avatarVisible = ref(false)
    const avatar = ref([{name:"头像.png",url:store.getters.getUserAvatar}])
    const uploadImage = ref(null)

    const toUploadAvatar = () => {
        avatar.value = [{name:"头像.png",url:store.getters.getUserAvatar}]
        avatarVisible.value = true
    }

    const onCancelUpload = () => {
        avatarVisible.value = false
    }

    const getToken = () => {
        let expiresTime = Number(localStorage.getItem('expiresTime'))
        let refreshToken = localStorage.getItem('refreshToken')
        let accessToken = localStorage.getItem('accessToken')
        let headers = {}
        if(expiresTime && accessToken && refreshToken){
            let now = Date.now()
            headers['access-token'] = accessToken
            if(now >= expiresTime){
            headers['refresh-token'] = refreshToken
            }
        }
        return headers
    }

    const formatResponse = (res) => {
        store.commit('updateUserInfo',{proxy,store})
        return {url:res.data}
    }

    const recordInfo = ref([])

    const initRecordInfo = () => {
        recordInfo.value = []
        let storeRecordInfo = store.getters.getRecordInfo
        if(!storeRecordInfo || storeRecordInfo === {} || !storeRecordInfo.id){
            return
        }
        recordInfo.value.push({title:'身高',content:storeRecordInfo.stature + 'cm'})
        recordInfo.value.push({title:'体重',content:storeRecordInfo.weight + 'kg'})
        recordInfo.value.push({title:'血型',content:storeRecordInfo.blood})
        recordInfo.value.push({title:'过敏史',content:storeRecordInfo.allergy})
        recordInfo.value.push({title:'疾病史',content:''})
    }

    const updateRecord = reactive({
        id:null,
        stature:null,
        weight:null,
        allergy:null,
        blood:null,
        user:null,
        sicknessHistory:null
    })
    const updateRecordForm = ref(null)
    const updateRecordVisible = ref(false)

    const toUpdateRecord = () => {
        let oldRecord = store.getters.getRecordInfo
        updateRecord.id = oldRecord.id
        updateRecord.user = oldRecord.user
        updateRecord.stature = oldRecord.stature
        updateRecord.weight = oldRecord.weight
        updateRecord.sicknessHistory = oldRecord.sicknessHistory
        updateRecord.allergy = oldRecord.allergy
        updateRecord.blood = oldRecord.blood

        updateRecordVisible.value = true
    }
    
    const onCancelUpdateRecord = () => {
        updateForm.value.reset()
        updateRecordVisible.value = false
    }

    const onConfirmUpdateRecord = () => {
        updateRecordForm.value.submit()
    }

    const onSubmitUpdateRecord = ({validateResult, firstError, e}) => {
        e.preventDefault()
        if(validateResult === true){
            proxy.$axios.post(recordUrl + '/updateRecord',updateRecord).then((res)=>{
                const result = proxy.$$analysisResult(proxy,res)
                if(result.code === 1){
                    store.commit('getRecordInfo',{proxy,store})
                    onCancelUpdateRecord()
                }
            })
        }else{
            MessagePlugin.warning(firstError)
        }
    }

    const initDoctorInfoVisible = ref(
        store.getters.getUserInfo.type === 2 ? false : store.getters.getDoctorInfo.init === 1 ? false : true
        )
    const initDoctorInfoUploadRef = ref(null)
    const initDoctorInfoForm = ref(null)
    const doctorCertificate = ref([])
    const initDoctorInfo = reactive({
        name:null,
        user:null,
        hospital:null,
        idCard:null
    })
    const initDoctorRules = {
        name:[
            { required:true, message:'真实姓名必填', type:'error', trigger:'blur' },
            { required:true, message:'真实姓名必填', type:'error', trigger:'change' }
        ],
        idCard:[
            { required:true, message:'身份证必填', type:'error', trigger:'blur' },
            { required:true, message:'身份证必填', type:'error', trigger:'change' }
        ]
    }
    

    const onSubmitInitDoctorInfo = ({validateResult, firstError, e}) => {
        e.preventDefault()
        if(validateResult === true){
            initDoctorInfo.user = store.getters.getUserId
            proxy.$axios.put(doctorUrl + '/addDoctorInfo',initDoctorInfo).then((res)=>{
                const result = proxy.$analysisResult(proxy,res)
                if(result.code === 1){
                    if(doctorCertificate.value.length !== 0){
                        initDoctorInfoUploadRef.value.uploadFiles()
                    }else{
                        onSuccessUploadCertificate()
                    }
                }
            })
        }else{
            MessagePlugin.warning(firstError)
        }
    }

    const onConfirmInitDoctor = () =>{
        initDoctorInfoForm.value.submit()
    }

    const onSuccessUploadCertificate = () => {
        initDoctorInfoVisible.value = false
        store.commit('updateDoctorInfo',{store,proxy})
    }

    watch(()=>store.state.recordInfo,()=>{
        initRecordInfo()
    })

    watch(()=>store.state.userInfo,()=>{
        initPersonalInfo()
    })

    init()
</script>
  
<style src="@/assets/css/userInfo.css" scoped></style>
<style scoped>
.info-title{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font: var(--td-font-body-medium);
    color: var(--td-text-color-placeholder);
}
.info-content{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 1.5vh;
    font: var(--td-font-body-medium);
    color: var(--td-text-color-primary);
}
</style>