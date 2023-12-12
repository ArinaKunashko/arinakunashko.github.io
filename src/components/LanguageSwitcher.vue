<!-- LanguageSwitcher.vue -->
<template>
  <div>
    <v-btn @click="changeLanguage">
      <svg-icon type="mdi" :path="pathWeb"></svg-icon>
      <span>{{ currentLanguage === 'ru' ? 'Русский' : 'English' }}</span>
    </v-btn>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiWeb } from '@mdi/js';

export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      currentLanguage: 'en',
      pathWeb: mdiWeb
    };
  },
  methods: {
    changeLanguage() {
      this.currentLanguage = this.currentLanguage === 'ru' ? 'en' : 'ru';
      // Предположим, что у вас есть $i18n и $store
      console.log('-----------------', this.currentLanguage);
      if (this.$i18n && this.$store) {
        this.$i18n.locale = this.currentLanguage;
        this.$store.commit('updateLanguage', this.currentLanguage);
      } else {
        console.error("$i18n or $store is not available. Make sure they are properly configured.");
      }
    }
  }
};
</script>
