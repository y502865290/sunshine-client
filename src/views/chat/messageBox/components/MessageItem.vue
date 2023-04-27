<template>
    <div class="message-contain">
        <t-avatar size="large" :image="defaultAvatar" class="avatar"></t-avatar>
        <div class="message-body">
            <div class="nickname">老黑(刘医生)&nbsp;&nbsp;&nbsp;2023-3-30 20:20</div>
            <div class="bubble-left" v-if="true"> 
            你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
            </div>
            <div class="tdesign-demo-image-viewer__base" v-if="false">
                <t-image-viewer :images="[image]">
                    <template #trigger="{ open }">
                    <div class="tdesign-demo-image-viewer__ui-image">
                        <img alt="test" :src="image" class="tdesign-demo-image-viewer__ui-image--img" />
                        <div class="tdesign-demo-image-viewer__ui-image--hover" @click="open">
                        <span><BrowseIcon size="1.4em" /> 预览</span>
                        </div>
                    </div>
                    </template>
                </t-image-viewer>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>
<script setup>
    import defaultAvatar from '@/assets/image/default_avatar.jpg'
    import image from '@/assets/image/login.png'
</script>
<style scoped>
.message-contain{
    width: 100%;
    margin-bottom: 15px;
}

.message-contain .clear{
    clear: both;
}


.message-contain .avatar{
    margin: 15px;
    float: left;
}

.message-contain .message-body{
    float: left;
}

.message-body .nickname{
    margin-top: 10px;
    font-size: 5pt;
    color: #9195a3;
}

.message-contain .message-body .bubble-left{
    position: relative;
    display: table;
    height: 30px;
    max-width: 300px;
    padding:3px 6px;
    line-height: 30px;
    border-radius: 4px;
    background-color: rgb(70, 171, 221);
    overflow-wrap: anywhere;
    font-size: 11pt;
}

.message-contain .message-body .bubble-left::after {
    position: absolute;
    left: -8px;
    top: 10px;
    content: '';
    border: 4px solid transparent;
    border-right-color: rgb(70, 171, 221);
}

.tdesign-demo-image-viewer__ui-image {
  width: 100%;
  height: 100%;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>