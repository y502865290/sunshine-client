<template>
    <div>
        <Nav isMain="true"></Nav>
        <div class="searchDiv">
            <t-image :src="logo" class="image"></t-image>
            <t-input class="input" clearable showClearIconOnEmpty v-model="keyword" :onEnter="search">
                <template #suffixIcon>
                    <Icon name="search"></Icon>
                </template>
            </t-input>
            <t-button class="button" @click="search">搜索</t-button>
        </div>
    </div>
</template>
<script setup>
    import { Icon } from 'tdesign-icons-vue-next'
    import { useRouter } from 'vue-router'
    import logo from '../assets/image/logo.png'
    import { ref } from 'vue'
    import Nav from '../components/Nav.vue'

    const router = useRouter()
    const keyword = ref('')

    const search = () => {
        if(keyword.value.trim() === ''){
            return
        }
        router.push({ name:'Search', query:{ keyword:keyword.value } })
    }
</script>
<style scoped>
.searchDiv{
    width: 600px;
    margin: auto;
    height:300px;
    position: absolute;
    top:15%;
    left:10%;
    right:10%

}
.searchDiv .input{
    width:500px;
    float: left;
}

.searchDiv .button{
    width:99px;
    float:left;
}

.searchDiv .image{
    width:230px;
    height: 100px;
    margin: auto;
    margin-bottom:15px;
}
</style>