<template>
    <div class="news-page">
        <!-- 导航区 -->
        <div class="news-list">
            <ul>
                <li v-for="news in newList" :key="news.id">
                    <button @click="showContent(news)">查看新闻</button>
                    <RouterLink
                        :to="{ name: 'neirong', query: { id: news.id, title: news.title, content: news.content } }">查看详情
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
import { RouterLink, useRouter } from 'vue-router';
const newList = reactive([
    { id: 'dasasd1', title: '很好的抗癌食物1', content: '抗癌食物的内容1' },
    { id: 'dasasd2', title: '抗癌食物的标题2', content: '抗癌食物的内容2' },
    { id: 'dasasd3', title: '抗癌食物的标题3', content: '抗癌食物的内容3' },
    { id: 'dasasd4', title: '抗癌食物的标题4', content: '抗癌食物的内容4' },
    { id: 'dasasd5', title: '抗癌食物的标题5', content: '抗癌食物的内容5' }
]);

const router = useRouter();

interface NewsItem {
    id: string;
    title: string;
    content: string;
}

function showContent(news: NewsItem) {
    router.push({ name: 'neirong', query: { id: news.id, title: news.title, content: news.content } });
}
</script>
<style scoped></style>