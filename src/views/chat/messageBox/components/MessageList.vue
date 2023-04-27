<template>
    <div class="message-list-box">
        <messageItem></messageItem>
        <messageItem></messageItem>
        <messageItem></messageItem>
    </div>
</template>
<script setup>
    import messageItem from './MessageItem.vue'
</script>
<style src="@/assets/css/scroll.css" scoped></style>
<style scoped>
.message-list-box{
    height: 53vh;
    width: 100%;
    overflow: auto;
    border-bottom: 0.5px solid #aaaaaa;
}

</style>