<template>
    <div class="person">
        <h2>需求：当水温达到60度或水位达到80cm时，发送请求</h2>
        <h2>当前水温：{{ temp }}C</h2>
        <h2>当前水位：{{ height }}cm</h2>
        <button @click="changeTemp">水温+1</button>
        <button @click="changeHeight">水位+10</button>
    </div>
</template>


<script lang="ts" setup name="Person">
import { reactive, ref, watch, watchEffect } from 'vue';
// 数据
let temp = ref(1);
let height = ref(0);

// 方法
function changeTemp(){
    temp.value += 1;
}
function changeHeight(){
    height.value += 10;
}

// 监视
// watch实现
// watch([temp,height],(newValue,oldValue)=>{
//     if(newValue[0]>=60 || newValue[1]>=80){
//         console.log('发送请求：水温或水位达到标准');
//     }
// })
// watchEffect实现，不需要明确指明监视的数据
watchEffect(()=>{
    console.log('watchEffect执行');
    if(temp.value >= 60 || height.value >= 80){
        console.log("发送请求：水温或水位达到标准")
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