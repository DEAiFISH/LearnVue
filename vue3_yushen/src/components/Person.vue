<template>
    <div class="person">
        <h2>个人信息</h2>
        <p>姓名: {{ name }}</p>
        <p>年龄: {{ age }}</p>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">增加年龄</button>
        <button @click="showTel">展示电话</button>
    </div>
</template>


<script lang="ts" setup name="Person">
import { ref } from 'vue';
// 数据
let name = ref('张三'); // 需要使用ref函数 name才是响应式
let age = ref(18); // 需要使用ref函数 age才是响应式
let tel = '18111457903'; // 此时tel不是响应式
// let x = c; // 这里的c是undefined 因为setup的生命周期在data之前


// 方法
function showTel() {
    alert(tel);
}
function changeName() {
    // 需要使用.value来修改name的值
    name.value = '李四';
    console.log(name);
}
function changeAge() {
    age.value += 1;
    console.log(age);
}
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