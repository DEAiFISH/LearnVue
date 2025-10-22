<template>
    <div class="person">
        <ul>
            <li v-for="p in personList" key="p.id">
                {{ p.id }}-{{ p.name }}-{{ p.age }}{{ p.x ? '-' + p.x : '' }}<br />
            </li>
        </ul>
    </div>
</template>


<script lang="ts" setup name="Person">
import type { Persons } from '@/types';
import { defineProps, withDefaults } from 'vue';

// 接收 inValue
// defineProps(['inValue'])

// 接收 inValue，同时保存
// let inValue = defineProps(['inValue','a'])


// 不能直接打印 inValue
// console.log(inValue)


// defineProps(['inValue', 'personList'])

// 接收+限制类型
// defineProps<{personList:Persons}>()


// 接收 + 限制类型 + 限制必要性 + 制定默认值
withDefaults(defineProps<{personList?:Persons}>(),{
    personList:() => [{
        id:'sdfsdf',
        name:'第三方淡粉色',
        age:18
    }]
})

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