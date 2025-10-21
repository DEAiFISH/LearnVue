<template>
    <div class="person">
        <h1>情况三:监视【reactive】定义的【对象类型】的数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changAge">修改年龄</button>
        <button @click="chagePerson">修改整个人</button>
    </div>
    <br>
</template>


<script lang="ts" setup name="Person">
import { reactive, watch } from 'vue';
// 数据
let person = reactive({
    name: '张三',
    age: 18
});

// 方法
function changeName() {
    person.name += '~';
}

function changAge() {
    person.age += 1;
}

function chagePerson() {
    // person = {
    //     name: '李四',
    //     age: 20
    // };

    Object.assign(person, {
        name: '李四',
        age: 20
    });
}

// 监视，情况三：监视【reactive】定义的【对象类型】的数据，默认就是深度监视
// 不能关闭深度监视
watch(person, (newValue, oldValue) => {
    console.log('person对象被修改了');
    console.log('新值：', newValue);
    console.log('旧值：', oldValue);

});
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