<template>
    <div class="message-box-layout">
        <t-row>
            <t-col :span="9">
                <messageTitle></messageTitle>
                <messageList></messageList>
                <messageSend></messageSend>
            </t-col>
            <t-col :span="3">
                <div class="box"></div>
            </t-col>
        </t-row>
    </div>
</template>
<script setup>
    import messageTitle from './components/MessageTitle.vue'
    import messageList from './components/MessageList.vue'
    import messageSend from './components/MessageSend.vue'
</script>
<style scoped>
.box{
    width: 100%;
    height: 80vh;
    background-color: aquamarine;
}
.message-box-layout{
    width: 100%;
    height: 80vh;
}
</style>