<template>
    <div class="talk-box">
        <h2>我是Talk组件</h2>
        <button @click="getSentence">获取一句话</button>
        <ul>
            <li v-for="value in sentence" :key="value.id">{{ value.text }}</li>
        </ul>
    </div>
</template>
<script lang="ts" setup name="Talk">
import { reactive } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';

let sentence = reactive([
    {
        id: '1',
        text: '人生苦短，我用Vue'
    },
    {
        id: '2',
        text: '前端开发很有趣'
    },
    {
        id: '3',
        text: '代码改变世界'
    }
]);

async function getSentence(){
    let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
    console.log('请求结果：', result.data);

    let obj = {
        id: nanoid(),
        text: result.data.content
    }

    sentence.unshift(obj);
}
</script>
<style scoped>
.talk-box {
    border: 1px solid #eee;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 16px;
}
</style>