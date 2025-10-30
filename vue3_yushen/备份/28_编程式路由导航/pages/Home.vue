<template>
    <div>
        首页组件内容
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(() => {
    setTimeout(() => {
        // 编程式跳转
        router.push({ name: 'xinwen' });
    }, 3000);
});
</script>
<style scoped>

</style>