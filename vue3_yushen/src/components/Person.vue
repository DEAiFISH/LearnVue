<template>
    <div class="person">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}</h2>
        <button @click="changePrice">修改价格</button>
        <button @click="changeCar">修改汽车</button>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeFirstGame">修改第一个游戏</button>
    </div>
    <br>
</template>


<script lang="ts" setup name="Person">
import { ref, reactive } from 'vue';
// 基本数据 ==========>  ref
// 对象、数组 ========>  reactive, ref
// 对象层级较深 ======>  reactive
// 数据
let car = ref({
    brand: '奔驰',
    price: 1000000
});
let games = ref([
    { id: 'aysdytfsatr01', name: '王者荣耀' },
    { id: 'aysdytfsatr02', name: '和平精英' },
    { id: 'aysdytfsatr03', name: '英雄联盟' },
    { id: 'aysdytfsatr04', name: '穿越火线' },
    { id: 'aysdytfsatr05', name: 'QQ飞车' },
]);

// reactive 不能包装基本类型的数据
// let name = reactive('张三');

console.log(car);

// 方法
function changePrice() {
    car.value.price += 10000;
}

function changeFirstGame() {
    if (games.value[0]) {
        games.value[0].name = 'DOTA2';
    }
}
function changeCar() {
    // 若car是reactive对象
    Object.assign(car , {
        brand: '奥迪',
        price: 300000
    });

    // 若car是ref对象
    car.value = {
        brand: '奥迪',
        price: 300000
    };

    console.log('@@@@', car);
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