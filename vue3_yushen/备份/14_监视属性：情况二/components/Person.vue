<template>
    <div class="person">
        <h1>情况二:监视【ref】定义的【对象类型】的数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changAge">修改年龄</button>   
        <button @click="chagePerson">修改整个人</button>
    </div>
    <br>
</template>


<script lang="ts" setup name="Person">
 import { ref, watch } from 'vue';
// 数据
let person = ref({
    name: '张三',
    age: 18
});

// 方法
function changeName() {
    person.value.name += '~';
}

function changAge() {
    person.value.age += 1;
}

function chagePerson() {
    person.value = {
        name: '李四',
        age: 20
    };
}

// 监视，情况二：监视【ref】定义的【对象类型】的数据，监视的是对象的引用地址
// 若想监视对象内部的属性变化，需要添加配置项 {deep: true}
// deep: 递归的深度监视对象内部的所有属性变化
// immediate: 立即执行第一次监视回调
watch(person, (newValue, oldValue)=>{
    console.log('person对象被修改了');
    console.log('新值：', newValue);
    console.log('旧值：', oldValue);

}, {deep: true, immediate: true});
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