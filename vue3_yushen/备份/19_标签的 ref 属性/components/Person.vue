<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="title2">成都</h2>
        <h3>熊猫</h3>
        <button @click="showLog">点我输出title2</button>
    </div>
</template>


<script lang="ts" setup name="Person">
import { reactive, ref, watch, watchEffect, defineExpose } from 'vue';

let a = ref(0)
let b = ref(0)
let c = ref(0)

// 创建一个title2，用于存储ref标记的内容
let title2 = ref();
function showLog() {
    console.log(title2.value)
}

// 使用defineExpose将组件中的数据导出交给外部
defineExpose({ a, b })
</script>

<style scoped>
.person {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: 20px auto;
}

button {
    margin-top: 10px;
    margin-right: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #42b983;
    color: white;
    cursor: pointer;
}
</style>