<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我+1</button>
    </div>
</template>


<script lang="ts" setup name="Person">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

let sum = ref(0)

function add() {
    sum.value += 1;
}

// 创建
console.log('创建')

// 挂载前
onBeforeMount(() => {
    console.log('挂载前')
})

// 挂载完毕
onMounted(() => {
    console.log('子----挂载完毕')
})

// 更新前
onBeforeUpdate(()=>{
    console.log('更新前')
})

// 更新完毕
onUpdated(()=>{
    console.log('更新完毕')
})

// 卸载前
onBeforeUnmount(()=>{
    console.log('卸载前')
})

// 卸载完成
onUnmounted(()=>{
    console.log('卸载完成')
})
</script>

<style scoped>
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