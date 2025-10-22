<template>
  <person inValue="哈哈" :personList="personList"/>
</template>

<script lang="ts" setup name="App">
import { reactive } from 'vue';
import Person from './components/Person.vue';
import type { Persons } from './types';

let personList = reactive<Persons>([
  {
    id: '001',
    name: '张三',
    age: 18
  },
  {
    id: '002',
    name: '李四',
    age: 20
  },
  {
    id: '003',
    name: '王五',
    age: 22,
    x: 101
  }
])
</script>

<style></style>