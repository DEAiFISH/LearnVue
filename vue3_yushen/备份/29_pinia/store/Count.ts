import { defineStore } from 'pinia'

export const userCountStore = defineStore('count', {
    // 真正存储数据的地方
    state() {
        return {
            sum: 6
        }
    },
    // actions中放置的是动作方法，用于响应组件中的“动作”
    actions: {
        increment(count: number) {
            console.log("increment被调用了！")
            console.log("countStore中的this关键词", this)
            this.sum += count
        }
    },
    getters:{
        bigSum(){
            return 999
        }
    }
})
