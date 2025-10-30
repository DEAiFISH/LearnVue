<template>
    <div class="news-page">
        <!-- 导航区 -->
        <div class="news-list">
            <ul>
                <li v-for="news in newList" :key="news.id">
                    {{ news.title }}--
                    <!-- query 传参 -->
                    <!-- <RouterLink :to="{ name: 'neirong', query: { id: news.id, title: news.title, content: news.content } }">查看详情</RouterLink> -->

                    <!-- param 传参 -->
                    <!-- 字符串写法 -->
                    <!-- <RouterLink :to="`/new/detail/${news.id}/${news.title}/${news.content}`">查看详情</RouterLink> -->
                    <!-- 对象写法 -->
                    <RouterLink :to="{ name: 'neirong', params: { id: news.id, title: news.title, content: news.content } }">查看详情
                    </RouterLink>

                </li>
            </ul>
        </div>
        <!-- 详情区 -->
        <div class="news-content">
            <RouterView />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
const newList = reactive([
    { id: 'dasasd1', title: '很好的抗癌食物1', content: '抗癌食物的内容1' },
    { id: 'dasasd2', title: '抗癌食物的标题2', content: '抗癌食物的内容2' },
    { id: 'dasasd3', title: '抗癌食物的标题3', content: '抗癌食物的内容3' },
    { id: 'dasasd4', title: '抗癌食物的标题4', content: '抗癌食物的内容4' },
    { id: 'dasasd5', title: '抗癌食物的标题5', content: '抗癌食物的内容5' }
])
</script>
<style scoped></style>