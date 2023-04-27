<template>
    <div class="">
        <t-row>
            <t-col :flex="1">
                <div class="left">
                    <t-avatar size="3.5vw" class="avatar"> W </t-avatar>
                </div>
            </t-col>
            <t-col :flex="3.9">
                <div class="right">
                    <div class="searchBox">
                        <t-input class="search" size="small">
                        </t-input>
                    </div>
                    <div class="main">
                        <t-tabs theme="card" v-model="select" style="height: 100%" size="medium">
                            <t-tab-panel value="recent">
                                <template #label> 
                                    <div class="tabs-icon">
                                        <t-icon name="home" class="tab-icon" /> 
                                    </div>
                                </template>
                                <template #panel>
                                    <messageList></messageList>
                                </template>
                            </t-tab-panel>
                            <t-tab-panel value="second">
                                <template #label> 
                                    <t-icon name="user" class="tab-icon" /> 
                                </template>
                                <template #panel>
                                    <friend-list></friend-list>
                                </template>
                            </t-tab-panel>
                            <t-tab-panel value="third">
                                <template #label> 
                                    <t-icon name="home" class="tab-icon" /> 
                                </template>
                                third
                            </t-tab-panel>
                        </t-tabs>
                    </div>
                </div>

            </t-col>
        </t-row>
    </div>
</template>
<script setup>
    import { ref } from "vue";
    import friendList from './FriendList.vue'
    import messageList from './RecentMessageList.vue'
    const select = ref('recent')

</script>
<style scoped>
.left{
    height: 80vh;
    width: 100%;
    text-align: center;
    background-color: rgb(47, 47, 47);
}

.avatar{
    margin-top: 10px;
}

.right{
    height: 80vh;
    width: 100%;
    background-color:rgb(222, 220, 218);
    border: 0.5px solid #aaaaaa; 
}
.right .main{
    width: 15.3vw;
    height: 71vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
    margin-left: 0.3vw;
    margin-right: 0.3vw;
    border: 0.5px solid #aaaaaa;
}

.right .main .tab-icon{
    width:2.95vw;
}

.right .searchBox{
    height: 3.9vh;
    width: 100%;
    background-color: rgb(242, 242, 242);
    padding-top: 3.1vh;
}
.right .searchBox .search{
    margin: auto;
    width: 15vw;
}
</style>