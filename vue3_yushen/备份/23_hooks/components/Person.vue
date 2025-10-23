<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我+1</button>
        <hr>
        <img v-for="dog in dogList" :key="dog.id" :src="dog.image">
    </div>
</template>


<script lang="ts" setup name="Person">
import useDog from '@/hooks/useDog';
import useSum from '@/hooks/useSum';

const {sum,changeSum} = useSum()
const {dogList} = useDog()
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

img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 5px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>