// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    language: 'en', // язык по умолчанию
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
