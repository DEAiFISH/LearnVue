<template>
    <div class="person">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}</h2>
        <button @click="changePrice">修改价格</button>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeFirstGame">修改第一个游戏</button>
        <hr>
        <h2>嵌套对象：{{ obj.a.b.c }}</h2>
        <button @click="obj.a.b.c++">修改嵌套对象</button>
    </div>
    <br>
</template>


<script lang="ts" setup name="Person">
import { reactive } from 'vue';
// 数据
let car = reactive({
    brand: '奔驰',
    price: 1000000
});
let games = reactive([
    { id: 'aysdytfsatr01', name: '王者荣耀' },
    { id: 'aysdytfsatr02', name: '和平精英' },
    { id: 'aysdytfsatr03', name: '英雄联盟' },
    { id: 'aysdytfsatr04', name: '穿越火线' },
    { id: 'aysdytfsatr05', name: 'QQ飞车' },
]);

let obj = reactive({
    a : {
        b: {
            c: 1
        }
    }
});

console.log(car);

// 方法
function changePrice() {
    car.price += 10000;
}

function changeFirstGame() {
    if (games[0]) {
        games[0].name = 'DOTA2';
    }
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