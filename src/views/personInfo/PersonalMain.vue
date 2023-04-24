<template>  
    <Nav></Nav>
    <div style="height: 92vh;">
        <t-layout >
            <t-aside>
                <t-menu theme="light" value="dashboard" style="margin-right: 50px" height="550px">
                    <t-menu-item value="dashboard">
                        <template #icon>
                            <t-icon name="dashboard" />
                        </template>
                        个人主页
                    </t-menu-item>
                </t-menu>
            </t-aside>
            <t-layout>
                <t-content>
                    <router-view></router-view>
                </t-content>
            </t-layout>
        </t-layout>
    </div>
   
</template>
<script setup>
    import Nav from '../../components/Nav.vue'
</script>