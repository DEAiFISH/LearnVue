
import { reactive, onMounted } from 'vue';
import axios from 'axios'
import type { Dogs } from '@/types';

export default function () {


    // https://dog.ceo/api/breed/keeshond/images/random

    let dogList = reactive<Dogs>([])

    onMounted(() => {
        for (let index = 1; index <= 10; index++) {
            axios.get('https://dog.ceo/api/breed/keeshond/images/random')
                .then(res => {
                    dogList.push({
                        id: index,
                        image: res.data.message
                    })
                })
                .catch(err => {
                    console.log('请求失败', err);
                });
        }
        console.log(dogList)
    })

    return { dogList, onMounted }
}