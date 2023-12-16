// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    language: navigator?.language?.split("-")[0] || 'ru', // язык по умолчанию
  },
  mutations: {
    updateLanguage(state, language) {
      state.language = language;
    },
  },
  getters: {
    currentLanguage: state => state.language,
  },
});
