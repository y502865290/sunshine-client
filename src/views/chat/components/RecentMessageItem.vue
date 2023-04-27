<template>
    <div class="list-item-contain" :style="{'background-color':props.backgroundColor}">
        <div class="avatar-box">
            <t-avatar :image="defaultAvatar" size="large" class="avatar"></t-avatar>
        </div>
        <div class="info-box">
            <div class="info">
                <div class="name">
                    你好
                </div>
                <div class="message-box">
                    <p class="message">我我我我我我我我我我我我我我我我我我我我我我我我我我我我我</p>          
                </div>
                <div class="time">
                    5月15日 23:05
                </div>
            </div>
        </div>
    </div>    
</template>
<script setup>
    import defaultAvatar from '@/assets/image/default_avatar.jpg'

    const props = defineProps({
        backgroundColor: ()=>'#ffffff',
        isMain:String
    })
    
</script>
<style scoped>
.list-item-contain{
    width: 100%;
    border-radius: 7px 7px 7px 7px;
    height: 7vh;
}
.avatar-box{
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 20%;
    border-radius: 7px 0px 0px 7px;
}
.info-box{
    float: left;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 0px 7px 7px 0px;
}

.info-box .info{
    width: 100%;
    height: 5vh;
}

.info-box .info .name{
    margin-left: 5px;
    user-select: none;
}

.info-box .info .message-box{
    margin-left: 5px;
    float: left;
    width: 39%;
}

.info-box .info .message-box .message{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-wrap: break-word;
    overflow: hidden;
    width: 100%;
    font-size: 5pt;
    color: #9195a3;
    user-select: none;
}

.info-box .info .time{
    margin-right: 5px;
    float: right;
    font-size: 5pt;
    color: #9195a3;
    user-select: none;
}
</style>