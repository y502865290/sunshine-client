<template>  
    <Nav></Nav>
    <div style="height: 92vh;">
        <t-layout >
            <t-aside>
                <t-menu theme="light" v-model="select" style="margin-right: 50px" height="550px">
                    <t-menu-item value="userInfo" @click="toUserInfo">
                        <template #icon>
                            <t-icon name="user" />
                        </template>
                        个人主页
                    </t-menu-item>
                    <t-menu-item value="follow" @click="toFollow" v-if="store.getters.getUserInfo.type === 1">
                        <template #icon>
                            <t-icon name="star" />
                        </template>
                        关注
                    </t-menu-item>
                </t-menu>
            </t-aside>
            <t-layout>
                <t-content>
                    <router-view></router-view>
                </t-content>
            </t-layout>
        </t-layout>
    </div>
   
</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import Nav from '@/components/Nav.vue'
    import { useStore } from 'vuex'
    
    const select = ref('userInfo')
    const router = useRouter()
    const store = useStore()


    const toUserInfo = () => {
        router.push({name:'UserInfo'})
    }

    const toFollow = () => {
        router.push({name:'Follow'})
    }

    toUserInfo()

</script>