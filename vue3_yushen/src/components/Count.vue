<template>
    <div class="count-box">
        <h2>我是Count组件,当前求和：{{ count }}</h2>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button @click="add">+</button>
        <button @click="min">-</button>
    </div>
</template>
<script lang="ts" setup name="Count">
import { ref } from 'vue';

let count = ref(0);
let num = ref(0);

function add(){
    count.value += num.value;
}
function min(){
    count.value -= num.value;
}
</script>

<style scoped>
.count-box {
    border: 1px solid #eee;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 16px;
}   
select, button {
    margin-right: 8px;
    padding: 4px 8px;
    font-size: 16px;
}
</style>