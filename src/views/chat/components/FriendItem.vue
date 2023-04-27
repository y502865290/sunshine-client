<template>
    <div 
        class="friend-item-contain" 
        :style="{'background-color': backgroundColor}" 
        @mouseenter="changeSelected" 
        @mouseleave="changeNotSelected">
        <div class="avatar-box">
            <t-avatar :image="defaultAvatar" size="large" class="avatar"></t-avatar>
        </div>
        <div class="info-box">
            <p class="name">你好世界</p>
        </div>
    </div>    
</template>
<script setup>
    import defaultAvatar from '@/assets/image/default_avatar.jpg'
    import { ref } from 'vue'

    const backgroundColor = ref("#ffffff")

    const changeSelected = () => {
        backgroundColor.value = '#d9d9d9'
    }

    const changeNotSelected = () => {
        backgroundColor.value = '#ffffff'
    }
</script>
<style scoped>
.friend-item-contain{
    width: 100%;
    border-radius: 7px 7px 7px 7px;
    height: 7vh;
}
.friend-item-contain .avatar-box{
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 20%;
    border-radius: 7px 0px 0px 7px;
}
.friend-item-contain .info-box{
    float: left;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 0px 7px 7px 0px;
}

.friend-item-contain .info-box .name{
    margin-left: 15px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-wrap: break-word;
    overflow: hidden;
    width: 100%;
    user-select: none;
}

</style>