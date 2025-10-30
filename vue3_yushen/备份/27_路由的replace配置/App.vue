<template>
  <div class="title">
    <Header></Header>
    <!-- 导航区 -->
    <div class="navigate">
      <!-- // 路由路径跳转 -->
      <RouterLink :to="{ path: '/home' }" replace>首页</RouterLink>
      <RouterLink to="/new" active-class="active" replace>新闻</RouterLink>
      <!-- // 路由命名跳转 -->
      <RouterLink :to="{ name: 'guanyu' }" replace>关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      此处暂时各种组件
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router';
import Header from './components/Header.vue';
</script>

<style>
.title {
  text-align: center;
}

.navigate {
  margin: 20px 0;
}

.navigate a {
  margin: 0 15px;
  text-decoration: none;
  color: #42b983;
}

.main-content {
  border: 1px solid #ccc;
  padding: 20px;
  min-height: 200px;
}
</style>