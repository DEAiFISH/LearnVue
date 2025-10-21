<template>
    <div class="person">
        <h1>情况五:监视上述所有数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeFisrtCar">修改第一台车</button>
        <button @click="changeSecondCar">修改第二台车</button>
        <button @click="changeCar">修改整个车</button>
    </div>
</template>


<script lang="ts" setup name="Person">
import { reactive, ref, watch } from 'vue';
// 数据
let person = reactive({
    name: '张三',
    age: 18,
    car: {
        c1: '奔驰',
        c2: '宝马'
    }
});


// 方法
function changeName(){
    person.name += '~';
}
function changeAge(){
    person.age += 1;
}
function changeFisrtCar(){
    person.car.c1 = '奥迪';
}
function changeSecondCar(){
    person.car.c2 = '大众';
}
function changeCar(){
    person.car = {
        c1: '丰田',
        c2: '本田'
    };
}

// 监视
watch([()=>{return person.name},()=>{return person.car.c1}],(newValue,oldValue)=>{
    console.log('nperson.ame被修改了');
    console.log('新值：', newValue);
    console.log('旧值：', oldValue);
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