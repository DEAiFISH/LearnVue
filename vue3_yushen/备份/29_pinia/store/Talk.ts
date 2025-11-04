import { defineStore } from 'pinia'

export const userTalkStore = defineStore('talk', {
    state() {
        return {
            sentence: [
                {
                    id: '1',
                    text: '人生苦短，我用Vue'
                },
                {
                    id: '2',
                    text: '前端开发很有趣'
                },
                {
                    id: '3',
                    text: '代码改变世界'
                }
            ]
        }
    }
})