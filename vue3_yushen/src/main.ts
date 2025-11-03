import { createApp } from "vue";
import App from "./App.vue";
// 引入pinia
import { createPinia } from "pinia";

const app = createApp(App);
// 创建pinia实例并挂载到vue应用上
app.use(createPinia());
app.mount('#app')

