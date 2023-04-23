<template>
    <Nav></Nav>
   <t-row>
    <t-col :span="1">
    </t-col>
    <t-col :span="7">
        <t-card
            :title="detail.main.name"
            style="margin:30px"
        >
            <p>&emsp;&emsp;{{ detail.main.detail }}</p>
            <br/>
            <t-row>
                <t-col :span="6">
                    <span class="detail_title">英文名称:&emsp;&emsp;</span>
                    <span v-html="detail.main.englishName"></span>
                    <br/>
                    <br/>
                    <span class="detail_title">就诊科室:&emsp;&emsp;</span>
                    <span v-html="detail.subject"></span>
                    <br/>
                    <br/>
                    <span class="detail_title">遗传性:&emsp;&emsp;&emsp;</span>
                    <span v-html="detail.main.heredity"></span>
                </t-col>
                <t-col :span="6">
                    <span class="detail_title">生病补位:&emsp;&emsp;</span>
                    <span v-html="detail.main.position"></span>
                    <br/>
                    <br/>
                    <span class="detail_title">主要病因:&emsp;&emsp;</span>
                    <span v-html="detail.main.cause"></span>
                </t-col>
            </t-row>
            
        </t-card>
        <div v-if="classMap.has(1)">
            <h2 class="first_title">流行病学</h2>
            <div v-for="item in classMap.get(1)" :key="item.id" style="margin-left: 3vw;">
                <br/>
                <span class="second_title">
                    <strong v-html="item.title"></strong>
                </span>
                <br/>
                <br/>
                <p class="content" v-html="item.detail"></p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div v-if="classMap.has(2)" >
            <h2 class="first_title">病因</h2>
            <div v-for="item in classMap.get(2)" :key="item.id" style="margin-left: 3vw;">
                <br/>
                <span class="second_title">
                    <strong v-html="item.title"></strong>
                </span>
                <br/>
                <br/>
                <p class="content" v-html="item.detail"></p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div v-if="classMap.has(3)" >
            <h2 class="first_title">症状</h2>
            <div v-for="item in classMap.get(3)" :key="item.id" style="margin-left: 3vw;">
                <br/>
                <span class="second_title">
                    <strong v-html="item.title"></strong>
                </span>
                <br/>
                <br/>
                <p class="content" v-html="item.detail"></p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div v-if="classMap.has(4)" >
            <h2 class="first_title">检查</h2>
            <div v-for="item in classMap.get(4)" :key="item.id" style="margin-left: 3vw;">
                <br/>
                <span class="second_title">
                    <strong v-html="item.title"></strong>
                </span>
                <br/>
                <br/>
                <p class="content" v-html="item.detail"></p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div v-if="classMap.has(5)" >
            <h2 class="first_title">诊断</h2>
            <div v-for="item in classMap.get(5)" :key="item.id" style="margin-left: 3vw;">
                <br/>
                <span class="second_title">
                    <strong v-html="item.title"></strong>
                </span>
                <br/>
                <br/>
                <p class="content" v-html="item.detail"></p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div v-if="classMap.has(6)" >
            <h2 class="first_title">治疗</h2>
            <div v-for="item in classMap.get(6)" :key="item.id" style="margin-left: 3vw;">
                <br/>
                <span class="second_title">
                    <strong v-html="item.title"></strong>
                </span>
                <br/>
                <br/>
                <p class="content" v-html="item.detail"></p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div v-if="classMap.has(7)" >
            <h2 class="first_title">预后</h2>
            <div v-for="item in classMap.get(7)" :key="item.id" style="margin-left: 3vw;">
                <br/>
                <span class="second_title">
                    <strong v-html="item.title"></strong>
                </span>
                <br/>
                <br/>
                <p class="content" v-html="item.detail"></p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div v-if="classMap.has(8)" >
            <h2 class="first_title">日常</h2>
            <div v-for="item in classMap.get(8)" :key="item.id" style="margin-left: 3vw;">
                <br/>
                <span class="second_title">
                    <strong v-html="item.title"></strong>
                </span>
                <br/>
                <br/>
                <p class="content" v-html="item.detail"></p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div v-if="classMap.has(9)" >
            <h2 class="first_title">饮食</h2>
            <div v-for="item in classMap.get(9)" :key="item.id" style="margin-left: 3vw;">
                <br/>
                <span class="second_title">
                    <strong v-html="item.title"></strong>
                </span>
                <br/>
                <br/>
                <p class="content" v-html="item.detail"></p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div v-if="classMap.has(10)" >
            <h2 class="first_title">预防</h2>
            <div v-for="item in classMap.get(10)" :key="item.id" style="margin-left: 3vw;">
                <br/>
                <span class="second_title">
                    <strong v-html="item.title"></strong>
                </span>
                <br/>
                <br/>
                <p class="content" v-html="item.detail"></p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div v-if="classMap.has(11)"  style="margin-bottom:9vh">
            <h2 class="first_title">就医指南</h2>
            <div v-for="item in classMap.get(11)" :key="item.id" style="margin-left: 3vw;">
                <br/>
                <span class="second_title">
                    <strong v-html="item.title"></strong>
                </span>
                <br/>
                <br/>
                <p class="content" v-html="item.detail"></p>
            </div>
        </div>
    </t-col>
    <t-col :span="1"></t-col>
    <t-col :span="2">
        <div style="height:  500px;width: 100%;background-color: blue;"></div>
    </t-col>
    <t-col :span="1"></t-col>
   </t-row>
</template>

<script setup>
    import { ref, getCurrentInstance, reactive} from 'vue'
    import { useRoute } from 'vue-router'
    import Nav from '../components/Nav.vue'

    const route = useRoute()
    const proxy = getCurrentInstance().proxy
    const id = route.query.id
    const detail = reactive({
        main:{
            id:undefined,
            name:undefined,
            englishName:undefined,
            heredity:undefined,
            detail:undefined,
            position:undefined,
            cause:undefined
        },
        extra:[],
        subject:null
    })
    const classMap = ref(new Map())
    
    const getData = () => {
        proxy.$axios.get(proxy.$url.mmsSicknessUrl + '/getSicknessDetail',{ params:{ id } }).then((res)=>{
            if(res.data.code !== 2000){
                proxy.$analysisRequest(proxy,res)
            }else{
                detail.main = res.data.data.main
                detail.extra = res.data.data.extra
                detail.subject = res.data.data.subject
                initMap()
            }
        })
    }

    const initMap = () => {
        classMap.value.set(1,[])
        classMap.value.set(2,[])
        classMap.value.set(3,[])
        classMap.value.set(4,[])
        classMap.value.set(5,[])
        classMap.value.set(6,[])
        classMap.value.set(7,[])
        classMap.value.set(8,[])
        classMap.value.set(9,[])
        classMap.value.set(10,[])
        classMap.value.set(11,[])
        for(let item of detail.extra){
            let theClass = item.theClass
            classMap.value.get(theClass).push(item)
        }
        for(let key of [1,2,3,4,5,6,7,8,9,10,11]){
            if(classMap.value.get(key).length === 0){
                classMap.value.delete(key)
            }
        }
    }

    getData()


</script>

<style scoped>
.detail_title{
    color:#888;
    font-size: 12pt;
}
.first_title{
    margin-left: 3vw;
}
.second_title{
    font-size: 13pt;
}
.content{
    display: inline;
    word-wrap: break-word;
    width: 100%;
    line-height: 1vh;
    background: #fff;
    font-size: 12pt;
}
</style>
