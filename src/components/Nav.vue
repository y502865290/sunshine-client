<template>
    <div>
        <t-affix offset-top="">
            <t-head-menu v-model="menu1Value" theme="light" @change="changeHandler" style="background-color: aliceblue;">
                <template #logo>
                    <img style="margin-left:5px;height: 100%;" src="../assets/image/logo.png" alt="logo"/>
                </template>
                <t-menu-item value="item1"> 菜单1 </t-menu-item>
                <t-menu-item value="item2"> 菜单2 </t-menu-item>
                <template #operations>
                    <t-button variant="text" shape="square">
                        <template #icon><t-icon name="search" /></template>
                    </t-button>
                    <t-badge dot>
                        <t-button variant="text" shape="square">
                            <template #icon><t-icon name="mail" /></template>
                        </t-button>
                    </t-badge>
                    <t-button variant="text" shape="square">
                        <template #icon><t-icon name="user" /></template>
                    </t-button>
                    <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg" size="39px" style="margin-left: 10px" />
                    <t-button variant="text" shape="square">
                        <template #icon><t-icon name="ellipsis" /></template>
                    </t-button>
                </template>
            </t-head-menu>
        </t-affix>
    </div>
</template>

<script setup>
</script>