<template>
  <section id="portfolio" class="bg-backgroundResume pa-lg-10 ">
    <div class="px-lg-16 mx-lg-9 py-lg-10">
      <div class="d-flex lg:px-16 xl:px-16 md:px-4 sm:px-4 ld:mx-9 xl:mx-9 fill-height" style="flex: 1;">
        <h2 class="text-h4 text-blockHeader mb-5 pa-sm-10 pa-lg-0 pa-md-10 pa-10 ">{{ $t('projects') }}</h2>
      </div>
    </div>
    <v-slide-group show-arrows selected-class="bg-success" class=" bg-backgroundResume px-lg-10">
      <v-slide-group-item v-for="(project, i) in projects" :key="i" class="ma-4">
        <v-card class="ma-4 bg-white" max-width="300" height="590" style=" display: flex; flex-direction: column;">
          <v-img class="align-end text-white" height="200" :src="project.imgSrc" style="max-height: 200px !important;" >
          </v-img>
          <v-card-title class="text-black bg-grey-lighten-5">{{ project.projectName }}</v-card-title>

          <v-card-subtitle class="pt-4">
            {{ $t('inTheCompany') }} {{ project.company }}
          </v-card-subtitle>
          <v-card-text>
            {{ project.describtion }}
          </v-card-text>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn color="secondary" :href="project.link" target="_blank">
              {{ $t('goToTheWebsite') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

  </section>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

const store = useStore(); 
const { t } = useI18n();
const currentLanguage = computed(() => store.getters.currentLanguage);
const projects = ref([]);


const updateProjects = () => {
  projects.value = [
    {
      projectName: 'AnyQuery',
      company: 'Diginetica',
      describtion: t('describtionAnyQuery'),
      imgSrc: new URL('@/assets/img/AlltimeAnyQuery.png', import.meta.url).href,
      link: 'https://www.alltime.ru/'
    },
    {
      projectName: 'Dolyame',
      company: 'Diginetica',
      describtion: t('describtionDolyame'),
      imgSrc: new URL('@/assets/img/Dolyame.png', import.meta.url).href,
      link: 'https://brandshop.ru/goods/450784/ddrbs/'

    },
    {
      projectName: t('mortgageCalculator'),
      company: 'Deneb',
      describtion: t('describtionCalcul'),
      imgSrc: new URL('@/assets/img/mortgageCalculator.png', import.meta.url).href,
      link: 'http://test.deneb23.ru/'

    },
    {
      projectName: 'Hilbro',
      company: 'Deneb',
      describtion: t('describtionHilbro'),
      imgSrc: new URL('@/assets/img/hilbro.png', import.meta.url).href,
      link: ''
    },
    {
      projectName: 'Технокрой',
      company: 'Deneb',
      describtion: t('describtionTkroi'),
      imgSrc: new URL('@/assets/img/tkroi.png', import.meta.url).href,
      link: 'https://tehnokroi.ru/'

    },
  ]
}
const isMobile = computed(() => window.innerWidth < 768)
// Обновление карточек при создании компонента
onMounted(updateProjects);

// Обновление карточек при изменении языка
watch(currentLanguage, () => {
  updateProjects();
});

// Обновление карточек при размонтировании компонента
onUnmounted(() => {
});
</script>
  
<style scoped>
.v-slide-group {
  touch-action: pan-y pinch-zoom !important;
}
</style>
  