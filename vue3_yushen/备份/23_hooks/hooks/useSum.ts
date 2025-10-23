
import { ref } from 'vue';

export default function () {
    let sum = ref(0)

    function changeSum() {
        sum.value += 1;
    }

    // 向外提供东西
    return { sum, changeSum }
}
