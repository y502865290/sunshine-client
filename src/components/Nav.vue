<template>
    <div>
        <t-affix :offset-top=0>
            <t-head-menu theme="light" class="menu">
                <template #logo v-if="!isMain">
                    <img style="margin-left:3vw;height: 8vh;" src="../assets/image/logo.png" alt="logo"/>
                </template>
                <t-menu-item value="item1" @click="toUserInfo"> 个人中心 </t-menu-item>
                <t-menu-item value="item2"> 咨询服务 </t-menu-item>
                <t-menu-item style="margin: auto;background-color: #fff;" v-if="!isMain">
                    <template #default>
                        <div class="searchBox">
                            <t-input class="input" v-model="keyword" :onEnter="search">
                                <template #suffixIcon>
                                    <Icon name="search" @click="search"></Icon>
                                </template>
                            </t-input>
                        </div>
                    </template>
                </t-menu-item>
                <template #operations>
                    <t-button variant="text" shape="square" @click="toSearch">
                        <template #icon><t-icon name="search" /></template>
                    </t-button>
                    <t-badge dot>
                        <t-button variant="text" shape="square" >
                            <template #icon><t-icon name="mail" /></template>
                        </t-button>
                    </t-badge>
                    <t-button variant="text" shape="square" @click="toUserInfo">
                        <template #icon><t-icon name="user" /></template>
                    </t-button>
                    <t-avatar 
                        :image="store.getters.getUserAvatar" 
                        size="39px" 
                        style="margin-left: 10px;cursor: pointer;"
                        @click="toUserInfo"  />
                    <t-dropdown :min-column-width="120" trigger="click" v-if="store.getters.getUserId">
                        <template #dropdown>
                            <t-dropdown-menu>
                                <t-dropdown-item class="operations-dropdown-container-item" @click="toUserInfo">
                                    <t-icon name="user-circle" ></t-icon>个人中心
                                </t-dropdown-item>
                                <t-dropdown-item class="operations-dropdown-container-item" @click="logOut" >
                                    <t-icon name="poweroff"></t-icon>退出登录
                                </t-dropdown-item>
                            </t-dropdown-menu>
                        </template>
                       
                        <t-button class="header-user-btn" theme="default" variant="text">
                            <div v-html="store.getters.getUserInfo.nickname"></div>
                            <template #suffix>
                                <t-icon name="chevron-down" />
                            </template>
                        </t-button>
                    </t-dropdown>
                    <t-button 
                        size="small" 
                        style="margin-left:15px ;margin-right: 15px;" 
                        @click="toLogin" 
                        v-if="!store.getters.getUserId"
                    >
                        登录
                    </t-button>
                </template>
            </t-head-menu>
        </t-affix>
    </div>
</template>

<script setup>
    import { Icon } from 'tdesign-icons-vue-next'
    import { getCurrentInstance, ref } from 'vue'
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    const props = defineProps({
        searchValue: undefined,
        isMain:String
    })
    const keyword = ref('')
    const proxy = getCurrentInstance().proxy
    const store = useStore()
    const router = useRouter()
    
    const init = () => {
        keyword.value = props.searchValue
    }

    const search = () => {
        if(keyword.value.trim() === ''){
            proxy.$router.push({ name:'Main' })
            return
        }
        router.push({ name:'Search',query:{ keyword:keyword.value } })
    }

    const logOut = () => {
        store.commit('logOut')
        router.push({name:'Main'})
    }

    const toLogin = () => {
        router.push({name:'Login'})
    }

    const toUserInfo = () => {
        router.push({name:'UserInfo'})
    }

    const toSearch = () => {
        router.push({name:'Main'})
    }

    init()
</script>

<style scoped>
.searchBox{
    width: 30vw;
    height: 20px;
}
.searchBox .input{
    width: 30vw;
    float: left;
}
.menu{
    background-color:#fff;
    height: 8vh;
    width: 100vw;
    margin: 0;
}
</style>