<template>
    <div class="friend-list-contain">
        <friendItem></friendItem>
        <friendItem></friendItem>
        <friendItem></friendItem>
        <friendItem></friendItem>
        <friendItem></friendItem>
        <friendItem></friendItem>
        <friendItem></friendItem>
        <friendItem></friendItem>
        <friendItem></friendItem>
        <friendItem></friendItem>
        <friendItem></friendItem>
        <friendItem></friendItem>
    </div>
</template>
<script setup>
    import friendItem from './FriendItem.vue'
</script>
<style src="@/assets/css/scroll.css" scoped></style>
<style scoped>
.friend-list-contain{
    height: 65vh;
    overflow: auto;
}
</style>