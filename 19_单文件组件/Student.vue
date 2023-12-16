<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                age: 20,
            }
        },
    }
</script>

<style>
    /* 组件的样式 */
    .demo {
        background-color: orange;
    }
</style>