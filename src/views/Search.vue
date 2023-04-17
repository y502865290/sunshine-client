<template>
    <Nav></Nav>
    <t-row>
        <t-col span="1"/>
        <t-col span="7">
            <t-list>
                <t-list-item v-for="item in mainData" :key="item.id">
                    <t-tooltip placement="bottom" style="width: 500px;">
                        <p class="listItem" v-html="item.detail"></p>
                    </t-tooltip>
                    
                    <!-- <p class="listItem">{{ item.detail }}</p> -->
                </t-list-item>
            </t-list>
        </t-col>
        <t-col span="1"/>
        <t-col span="2">
            <div style="height: 500px;width: 100%; background-color: aqua;"></div>
        </t-col>
        <t-col span="1"/>
    </t-row>
</template>
<script setup>
    import { getCurrentInstance, ref } from 'vue'
    import Nav from '../components/Nav.vue'
    
    const proxy = getCurrentInstance().proxy
    const mainData = ref([])
    // const keyword = proxy.$route.query.keyword
    const keyword = "溃疡"
    const getMainData = () => {
        proxy.$axios.get(proxy.$url.mmsSicknessUrl + '/searchWithKeyword' + "?keyword=" + keyword).then((res)=>{
            if(res.data.code !== 2000){
                proxy.$analysisResult(proxy,res)
            }else{
                mainData.value = res.data.data
            }
        })
    }

    getMainData()
</script>
<style>
.listItem{
    word-wrap: break-word;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;

}
em{
    color:red
}
</style>