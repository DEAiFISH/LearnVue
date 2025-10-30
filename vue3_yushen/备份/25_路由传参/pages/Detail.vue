<template>
    <ul class="news-list">
        <li>编号：{{ route.query.id }}</li>
        <li>标题：{{ route.query.title }}</li>
        <li>内容：{{ route.query.content }}</li>
        <br>
        <li>编号：{{ route.params.id }}</li>
        <li>标题：{{ route.params.title }}</li>
        <li>内容：{{ route.params.content }}</li>
    </ul>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
// query 传参
let route = useRoute();
console.log(route.query);

// param 传参
console.log(route.params)
</script>
<style></style>