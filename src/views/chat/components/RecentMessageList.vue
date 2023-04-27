<template>
    <div class="list-contain">
        <listItem v-for="(item,index) in itemList" :key="index" @click="select(index)" :background-color="item.backgroundColor"></listItem>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import listItem from './RecentMessageItem.vue'
    const itemList = ref([])
    let last = -1

    const init = ()=>{
        for(let i = 0;i < 12;i++){
            itemList.value.push({backgroundColor:'#fffffff'})
        }
    }

    const select = (index) => {
        if(last !== -1){
            itemList.value[last].backgroundColor = '#ffffff'
        }
        itemList.value[index].backgroundColor = '#d9d9d9';
        last = index
    }

    init()
</script>
<style src="@/assets/css/scroll.css" scoped></style>
<style scoped>
.list-contain{
    height: 65vh;
    overflow: auto;
}
</style>