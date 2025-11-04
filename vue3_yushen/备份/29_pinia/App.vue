<template>
    <div id="app">
        <h2>我是app组件</h2>
        <Count />
        <Talk />
    </div>
</template>
<script lang="ts" setup name="App">
import Count from './components/Count.vue'
import Talk from './components/Talk.vue'
</script>

<style scoped></style>