<template>
    <div>
        <t-head-menu v-model="menu1Value" theme="light" @change="changeHandler" style="background-color: aliceblue;">
            <t-menu-item value="item1"> 个人中心 </t-menu-item>
            <t-menu-item value="item2"> 咨询服务 </t-menu-item>
            <template #operations>
                <t-button variant="text" shape="square">
                    <template #icon><t-icon name="search" /></template>
                </t-button>
                <t-badge dot>
                    <t-button variant="text" shape="square">
                        <template #icon><t-icon name="mail" /></template>
                    </t-button>
                </t-badge>
                <t-button variant="text" shape="square">
                    <template #icon><t-icon name="user" /></template>
                </t-button>
                <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg" size="39px" style="margin-left: 10px" />
                <t-button variant="text" shape="square">
                    <template #icon><t-icon name="ellipsis" /></template>
                </t-button>
            </template>
        </t-head-menu>
        <div class="searchDiv">
            <t-image :src="logo" class="image"></t-image>
            <t-input class="input" clearable showClearIconOnEmpty>
                <template #suffixIcon>
                    <Icon name="search"></Icon>
                </template>
            </t-input>
            <t-button class="button">搜索</t-button>
        </div>
    </div>
</template>
<script setup>
    import { Icon } from 'tdesign-icons-vue-next';
    import logo from '../assets/image/logo.png'
</script>
<style>
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