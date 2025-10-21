<template>
    <div class="person">
        <!-- <h2>姓名：{{ peroson.name}}</h2>
        <h2>年龄：{{ peroson.age}}</h2> -->
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
    <br>
</template>


<script lang="ts" setup name="Person">
import { ref, reactive, toRefs, toRef } from 'vue';
let peroson = reactive({
    name: '张三',
    age: 18
});

// 解构赋值
// name 和 age 都不是响应式的
// let {name, age} = peroson;
let {name, age} = toRefs(peroson);
console.log(toRefs(peroson));
let nl = toRef(peroson, 'age');
console.log('@@@', nl);

function changeName() {
    // peroson.name += '~';
    // name += '~';
    name.value += '~';
    // 修改name后，peroson.name也会跟着变化
    console.log(name.value, peroson.name);
}
function changeAge() {
    // peroson.age += 1;
    // age += 1;
    age.value += 1;
    // 修改age后，peroson.age也会跟着变化
    console.log(age.value, peroson.age);
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