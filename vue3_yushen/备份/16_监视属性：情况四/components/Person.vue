<template>
    <div class="person">
        <h1>情况四:监视的是对象里的属性，那么最好写函数式，注意点：若对象监视的是地址值，需要关注对象内部，需要手动开启深度监视。</h1>
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

// 监视，情况四：监视【reactive】定义的【对象类型】的数据中的【某个属性】
// 可以通过getter函数来指定监视某个 基本类型 属性
watch(() => {return person.name},(newValue,oldValue)=>{
    console.log('nperson.ame被修改了');
    console.log('新值：', newValue);
    console.log('旧值：', oldValue);
})

// 也可以通过getter函数来指定监视某个 对象类型 属性
// 但是需要开启深度监视，否则无法监视到该对象内部属性的变化
watch(()=>{return person.car},(newValue,oldValue)=>{
    console.log('person.car被修改了');
    console.log('新值：', newValue);
    console.log('旧值：', oldValue);
},{deep: true})
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