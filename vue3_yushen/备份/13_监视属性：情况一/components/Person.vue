<template>
    <div class="person">
        <h1>情况一:监视【ref】定义的【基本类型】的数据</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changSum">加1</button>
    </div>
    <br>
</template>


<script lang="ts" setup name="Person">
import { ref, watch } from 'vue';
// 数据
let sum = ref(0);
// 方法
function changSum() {
    sum.value += 1;
}
// 监视，情况一:监视【ref】定义的【基本类型】的数据
const stopwatch = watch(sum, (newValue, oldValue) => {
    console.log('sum的值被修改了');
    console.log('新值：', newValue);
    console.log('旧值：', oldValue);

    // 解除监视
    if (newValue >= 3) {
        console.log('sum的值大于等于3，停止监视');
        stopwatch();
    }
})
</script>

<style>
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