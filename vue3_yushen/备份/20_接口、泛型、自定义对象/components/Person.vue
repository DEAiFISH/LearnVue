<template>
    <div class="person">
    </div>
</template>


<script lang="ts" setup name="Person">
import { ref } from 'vue';
import { type PersonInter, type Persons } from '@/types'

// let person: PersonInter = {
//     id: 'fdsfdufs',
//     name: '张三',
//     age: 60
// }

// let personList: Array<PersonInter> = [
let personList: Persons = [
    {
        id: 'fdsfdufs',
        name: '张三',
        age: 60
    },
    {
        id: 'fdsfdufs2',
        name: '李四',
        age: 30
    },
    {
        id: 'fdsfdufs3',
        name: '王五',
        age: 20
    }
]
</script>

<style scoped>
.person {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: 20px auto;
}

button {
    margin-top: 10px;
    margin-right: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #42b983;
    color: white;
    cursor: pointer;
}
</style>