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

<script lang="ts">
export default {
    name: 'Person',
    setup() {
        // console.log('@@',this); // setup函数中的this是 undefined
        // 数据
        let name = '张三'; // 此时name不是响应式
        let age = 18; // 此时age不是响应式
        let tel = '18111457903'; // 此时tel不是响应式


        // 方法
        function showTel() {
            alert(tel);
        }
        function changeName() {
            name = '李四'; 
            console.log(name); // 修改了name的值 但是页面不会更新
        }
        function changeAge() {
            age += 1; 
            console.log(age); // 修改了age的值 但是页面不会更新
        }

        return {
            name,
            age,
            showTel,
            changeName,
            changeAge  
        };

        // return () => '哈哈' // 也可以返回一个渲染函数
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