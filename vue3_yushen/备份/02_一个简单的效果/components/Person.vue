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
    data() {
        return {
            name: '张三',
            age: 18,
            tel: '18111457903'
        }
    },
    methods: {
        showTel() {
            alert(this.tel)
        },
        changeName() {
            this.name = '李四'
        },
        changeAge() {
            this.age += 1
        }
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