<template>
  <v-app>
    <Loader v-if="isLoading" />
    <v-layout id="start" v-else class="overflow-visible d-flex" style="height: 60px;">
      <v-bottom-navigation v-if="!isMobile"  class="bg-background" grow >
        <div class="d-flex flex-1-1 justify-center align-center">
          <a v-scroll-to="'#about'">
            <v-btn>
              {{ $t('aboutMe') }}
            </v-btn>
          </a>
          <a v-scroll-to="'#portfolio'">
            <v-btn>
              {{ $t('portfolio') }}
            </v-btn>
          </a>
          <a v-scroll-to="'#CV'">
            <v-btn>
              {{ $t('resume') }}
            </v-btn>
          </a>
          <a v-scroll-to="'#footer'">
            <v-btn>
              {{ $t('contacts') }}
            </v-btn>
          </a>
        </div>
        <div class="d-flex justify-center align-center">
          <LanguageSwitcher />
          <div class="togglerTheme d-flex flex-row flex-nowrap align-center justify-center items-center mx-8">
            <v-switch inset color="info" v-model="darkMode" @change="toggleTheme()"></v-switch>
            <svg-icon type="mdi" :path="pathTheme" class="ml-3"></svg-icon>
          </div>
        </div>
      </v-bottom-navigation>
      <v-app-bar class="bg-background" v-if="isMobile" :elevation="2">
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
          <v-menu v-model="menu" offset-y>
            <v-list v-model:opened="open"
              class="bg-background d-flex flex-column flex-no-wrap align-center justify-center items-center">
              <v-list-item v-scroll-to="'#about'" @click="closeMenu">
                <v-list-item-title>{{ $t('aboutMe') }}</v-list-item-title>
              </v-list-item>
              <v-list-item v-scroll-to="'#portfolio'" @click="closeMenu">
                <v-list-item-title>{{ $t('portfolio') }} </v-list-item-title>
              </v-list-item>
              <v-list-item v-scroll-to="'#CV'" @click="closeMenu">
                <v-list-item-title>{{ $t('resume') }}</v-list-item-title>
              </v-list-item>
              <v-list-item v-scroll-to="'#footer'" @click="closeMenu">
                <v-list-item-title>{{ $t('contacts') }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <div class="d-flex justify-center align-center">
          <LanguageSwitcher />
          <div class="togglerTheme d-flex flex-row flex-nowrap align-center justify-center items-center mx-8 ">
            <v-switch inset color="info" v-model="darkMode" @change="toggleTheme()"></v-switch>
            <svg-icon type="mdi" :path="pathTheme" class="ml-3"></svg-icon>
          </div>
        </div>
      </v-app-bar>
    </v-layout>
    <router-view />
  </v-app>
</template>



<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiThemeLightDark } from '@mdi/js';
import { ref, computed, onMounted } from 'vue';
import { useTheme } from "vuetify";
import VueScrollTo from 'vue-scrollto';
import LanguageSwitcher from './components/LanguageSwitcher.vue';
import Loader from './components/Loader.vue';

const pathTheme = mdiThemeLightDark;
const value = ref(1);
const currentTheme = ref('customLightTheme');
const active = ref(true);
const theme = useTheme();
const darkMode = ref(false);

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? "customDarkTheme" : "customLightTheme";
  console.log(`Current theme is dark? ${theme.global.current.value.dark}`);
};

const menu = ref(false);
const isMobile = computed(() => window.innerWidth < 768);

const toggleMenu = () => {
  menu.value = !menu.value;
};

const closeMenu = () => {
  menu.value = false;
};


const isLoading = ref(true);

const simulateLoading = () => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};

onMounted(() => {
  simulateLoading();
});
</script>


<style>
.v-menu>.v-overlay__content {
  width: 100% !important;
  margin-top: 65px !important;
}


.hidden-sm-and-up {
  display: none !important;
}

.togglerTheme {
  margin-right: 1rem;
}

p {
  font-size: 16px;
}

.v-container {
  padding: 12px !important;
}

header.v-bottom-navigation.v-bottom-navigation--active.v-bottom-navigation--grow {
  height: 100% !important;
}

.v-window--show-arrows-on-hover:hover .v-window__left,
.v-window--show-arrows-on-hover:hover .v-window__right {
  transform: translateX(0);
  background-color: transparent !important;
  box-shadow: none !important;
}


@media screen and (min-width: 768px) {

  .v-row.v-row--no-gutters>[class*=v-col-]:nth-child(2) {
    border-right: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
  }

  .main-content[data-v-e9eea4ec] {
    height: 100vh;
  }

}

@media screen and (max-width: 540px) {
  .v-row.v-row--no-gutters>[class*=v-col-]:nth-child(2) {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }

  .v-timeline--vertical.v-timeline.v-timeline--side-end .v-timeline-item .v-timeline-item__opposite {
    display: none;
  }

  .main-content[data-v-e9eea4ec] {
    height: auto !important;
  }

}

.mdi:before,
.mdi-set {
  font-size: 42px;
}

.v-timeline--vertical.v-timeline {
  height: auto !important;
}

.v-bottom-navigation--active {
  box-shadow: none !important;
}

.togglerTheme {
  height: 100%;
  margin-right: 3rem
}

.v-input__details {
  display: none !important;
}

p {
  font-size: 20px;
}
</style>
