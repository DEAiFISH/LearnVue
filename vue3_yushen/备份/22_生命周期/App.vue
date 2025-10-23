<template>
  <person v-if="isShow" />
  <button @click="changeIsShow">隐藏</button>
</template>

<script lang="ts" setup name="App">
import { ref, onMounted } from 'vue';
import Person from './components/Person.vue';

let isShow = ref(true)

function changeIsShow() {
  isShow.value = !isShow.value
}



// 挂载完毕
onMounted(() => {
  console.log('父----挂载完毕')
})

</script>

<style></style>