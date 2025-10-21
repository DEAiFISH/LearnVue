<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"><br>
        名：<input type="text" v-model="lastName"><br>
        <!-- 全名：<span>{{ firstName }}-{{ lastName }}</span> -->
        全名：<span>{{ fullName }}</span>
        全名：<span>{{ fullName }}</span><br>
        <button @click="changeFullName">修改全名为li-si</button>
    </div>
    <br>
</template>


<script lang="ts" setup name="Person">
import { ref, computed } from 'vue';

let firstName = ref('张')
let lastName = ref('三')

// 这么定义的计算属性是只读的
// let fullName = computed(() => {
//     console.log('计算属性有缓存，只在依赖的数据变化时才会重新计算')
//     console.log('计算属性被调用')
//     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
// })

let fullName = computed({
    get() {
        return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
    },
    set(val) {
        console.log('设置了全名为：', val);
        let [str1 = '', str2 = ''] = val.split('-');
        firstName.value = str1;
        lastName.value = str2;
    }
})

function changeFullName() {
    fullName.value = 'li-si'
}
</script>

<style>
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