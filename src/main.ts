import './assets/main.css'

import { createApp } from 'vue'
import { languages, defaultLocale } from "@/i18n/index";
import { createI18n, useI18n } from "vue-i18n";
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'

import App from './App.vue'
import router from './router'

const messages = Object.assign(languages);
const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: "RU",
  messages,
});

const app = createApp(App, {
    setup() {
        const { t } = useI18n();
        return { t };
    },
});

app.use(createPinia())
app.use(router)
app.use(i18n);
app.use(createMetaManager())

await router.isReady()
app.mount('#app')
