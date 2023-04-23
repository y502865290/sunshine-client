<template>
    <Nav :searchValue="keyword"></Nav>
    <t-row>
        <t-col :span="7">
            <t-row>
                <t-col :span="2"></t-col>
                <t-col :span="10">
                    <span class="resultTotal">搜索到{{ mainData.length }}条结果</span>
                    <t-list class="tag">
                        <t-list-item v-for="item in mainData" :key="item.id">
                            <div class="listItemBox">
                                <t-link theme="primary" size="large" @click="toDetail(item.id)">
                                    <p class="listItemTitle" v-html="item.name"></p>
                                </t-link>
                                <t-tooltip placement="bottom" :content="item.detailContent">
                                    <p ref="testRef" class="listItemDetail" v-html="item.detail"></p>
                                </t-tooltip>
                            </div>
                        </t-list-item>
                    </t-list>
                    <t-pagination 
                        style="margin-left: 16px;" 
                        :total="total" 
                        :current="currentPage"
                        :pageSizeOptions="[]" 
                        @current-change="onCurrentChange"
                        show-jumper
                    />
                </t-col>
            </t-row>
            <!-- <t-list>
                <t-list-item v-for="item in mainData" :key="item.id">
                    <div class="listItemBox">
                        <t-link theme="primary" size="large">
                            <p class="listItemTitle" v-html="item.name"></p>
                        </t-link>
                        <t-tooltip placement="bottom" :content="item.detailContent">
                            <p ref="testRef" class="listItemDetail" v-html="item.detail"></p>
                        </t-tooltip>
                    </div>
                </t-list-item>
            </t-list> -->
        </t-col>
        <t-col :span="1"/>
        <t-col :span="2">
            <div style="height: 500px;width: 100%;background-color: aqua;" ></div>
        </t-col>
        <t-col :span="2"/>
    </t-row>
</template>
<script setup>
    import { getCurrentInstance, ref, watch } from 'vue'
    import Nav from '../components/Nav.vue'
    import { useRoute, useRouter } from 'vue-router';
    
    const proxy = getCurrentInstance().proxy
    const mainData = ref([])
    const route = useRoute()
    const keyword = ref(route.query.keyword)
    const currentPage = ref(1)
    const total = ref(undefined)
    const router = useRouter()

    const getMainData = (pageNum) => {
        proxy.$axios.get(proxy.$url.mmsSicknessUrl + '/searchWithKeyword',{ 
            params:{ keyword:keyword.value, pageNum } 
        })
        .then((res)=>{
            if(res.data.code !== 2000){
                proxy.$analysisResult(proxy,res)
            }else{
                mainData.value = res.data.data.data
                total.value = res.data.data.total
                setContent()
            }
        })
    }

    const onCurrentChange = () => {
        getMainData(currentPage.value)
    }

    const setContent = () => {
        for(let item of mainData.value){
            item.detailContent = item.detail.replaceAll('<span>','').replaceAll('</span>','')
        }
    }

    const toDetail = (id) => {
        proxy.$router.push({name:'SicknessDetail',query:{id}})
    }

    const init = () => {
        if(route.query.keyword){
            getMainData(1)
        }else{
            router.push({name:'Main'})
        }
    }

    watch(() => route.query,(newValue) => {
        keyword.value = newValue.keyword
        getMainData()
    })

    init()
</script>
<style scoped>
.listItemDetail{
    word-wrap: break-word;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;

}
.listItemTitle{
    font-size: 17pt;
}
.listItemBox{
    display: block;
}
::v-deep .listItemTitle span{
    color:red
}
::v-deep .listItemDetail span{
    color:red
}
.resultTotal{
    line-height: 39px;
    font-size: 13px;
    color: #9195a3;
    margin-left: 16px;
}
</style>