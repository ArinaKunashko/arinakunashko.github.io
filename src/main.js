/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import { createI18n } from 'vue-i18n';
import store from '@/store/store' // Подключаем ваш стор

// Импортируйте файлы с переводами
import enMessages from './locales/en';
import ruMessages from './locales/ru';


// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en',
  messages: {
    en: enMessages,
    ru: ruMessages,
  },
});

app.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
}).use(i18n).use(store).mount('#app')


