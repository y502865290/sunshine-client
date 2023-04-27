<template>
    <div class="send-box">
        <div class="control-panel">
            <i 
                title="表情"
                class="icon"
                :class="{'icon-emoji':!emojiSelect,'icon-emoji-select':emojiSelect}"
                @click="changeSelectEmoji"
            >
            </i>
        </div>
        <textarea class="message-area" maxlength="1500" v-model="message"></textarea>
        <t-button 
            theme="success" 
            size="small" 
            class="send-button">
            发送
        </t-button>
        <t-button 
            theme="danger" 
            size="small" 
            @click="reset"
            class="send-button">
            清空
        </t-button> 
    </div>
</template>
<script setup>
    // import icon from '@/assets/icon/emoji-happy.png'
    import {ref} from 'vue'

    const emojiSelect = ref(false)
    const message = ref()

    const changeSelectEmoji = () =>{
        emojiSelect.value = true
        setTimeout(()=>{emojiSelect.value = false},300)
    }

    const reset = () => {
        message.value = ''
    }
</script>
<style src="@/assets/css/scroll.css" scoped></style>
<style scoped>
.send-box{
    border-bottom: 0.5px solid #aaaaaa;
    width: 100%;
    height: 19.8vh;
}
.send-box .message-area{
    overflow-x: hidden;
    box-sizing: border-box;
    height: calc(100% - 8.5vh);
    width: 100%;
    outline: none;
    border: none;
    font-size: 12pt;
    margin: 0;
    border-radius: 5px;
    padding-left: 0.5vw;
    background-color: rgba(0,0,0, 0);
    resize: none;
}
.send-box .send-button{
    float: right;
    height: 3vh;
    margin-top: 0;
    margin-right: 1vw;
}
.control-panel{
    height: 3.5vh;
    padding-top: 0.5vh;
}

.icon{
    display: block;
    width: 2.5vh;
    height: 2.5vh;
    margin-left: 1vw;
    cursor: pointer;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;  
    float: left;
    
}

.icon-emoji{
    background-image: url('../../../../assets/icon/emoji-happy.png');
}

.icon-emoji-select{
    background-image: url('../../../../assets/icon/emoji-happy-select.png');
}



</style>