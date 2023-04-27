<template>
    <Nav></Nav>
    <div  class="background">
        <div class="box">
            <t-row>
                <t-col :span="3">
                    <Aside></Aside>
                </t-col>
                <t-col :span="9">
                    <router-view></router-view>
                </t-col>
            </t-row>
        </div>
    </div>
</template>

<script setup>
    import Nav from '../../components/Nav.vue'
    import Aside from './components/Aside.vue'
</script>

<style scoped>
.background{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 92vh;
    background-color: aqua;
}
.box{
    width: 80vw;
    height: 80vh;
    background-color: rgba(242, 242, 242, 0.95);
}

</style>