<template>
    <div class="count-box">
        <h2>我是Count组件,当前求和：{{ countStore.sum }};;bigSum:{{ bigSum }}</h2>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button @click="add">+</button>
        <button @click="min">-</button>
    </div>
</template>
<script lang="ts" setup name="Count">
import { ref, toRefs } from 'vue';
import { userCountStore } from '@/store/Count';
import { storeToRefs } from 'pinia';

// let count = ref(0);
let countStore = userCountStore();
let num = ref(0);

// 使用storeToRefs只会拆解变量，不要直接使用toRefs
// let {sum} = toRefs(countStore)
let { sum, bigSum } = storeToRefs(countStore)
console.log('!!!!', storeToRefs(countStore))

// 订阅
countStore.$subscribe((mutate, state) => {
    console.log('countStore中数据发生变化', mutate, state)
})

function add() {
    // count.value += num.value;

    // 第一种修改方式
    // countStore.sum += num.value;

    // 第二种修改方式
    // countStore.$patch({
    //     sum:1
    // })

    // 第三种修改方式
    countStore.increment(num.value)
}
function min() {
    // count.value -= num.value;
    countStore.sum -= num.value;
}
</script>

<style scoped>
.count-box {
    border: 1px solid #eee;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 16px;
}

select,
button {
    margin-right: 8px;
    padding: 4px 8px;
    font-size: 16px;
}
</style>