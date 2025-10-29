<template>
    <ul class="news-list">
        <li>编号：{{ route.query.id }}</li>
        <li>标题：{{ route.query.title }}</li>
        <li>内容：{{ route.query.content }}</li>
    </ul>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
let route = useRoute();
console.log(route.query);
</script>
<style></style>