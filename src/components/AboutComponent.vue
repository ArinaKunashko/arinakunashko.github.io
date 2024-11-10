<!-- Ваш компонент -->
<template>
    <section id="about" class="pa-10 bg-backgroundAbouteMe">
      <div class="bg-backgroundResume px-lg-16 mx-lg-9 d-flex py-lg-10 flex-sm-column flex-md-column flex-lg-row flex-xl-row flex-column" height="100%">
        <div class="d-flex lg:px-16 xl:px-16 md:px-4 sm:px-4 ld:mx-9 xl:mx-9 fill-height" style="flex: 1;">
          <h2 class="text-h4 text-blockHeader mb-5">{{ t('aboutTitle') }}</h2>
        </div>
        <div class="d-flex lg:px-16 lg:mx-10 xl:px-16 xl:mx-10 md:px-4 sm:px-4 fill-height flex-column" style="flex: 1;">
          <div>
            <p class="text-body-1">{{ t('aboutContent') }}</p>
          </div>
          <div class="d-flex flex-row my-7">
            <p class="text-h3 text-blockHeader"> 2 </p>
            <p class="ml-3 text-blockHeader" style="border-top: 1px solid #e5e5e5">{{ t('experience') }}</p> 
          </div>
        </div>
      </div>
      <div class="px-lg-16 mx-lg-9">
        <v-card class="mx-auto bg-white " max-width="100%" hover>
          <v-card-item class="d-grid">
            <v-row no-gutters>
              <v-col v-for="card in cards" :key="card" cols="12" sm="4" class="pa-5">
                <v-sheet class="my-2 mx-1 py-2 bg-white text-secondary text-h6">
                  {{ card.title }}
                </v-sheet>
                <v-sheet v-if="card.techno" class="ma-1 bg-white text-black text-body-2">
                  {{ card.techno }}
                </v-sheet>
                <v-sheet v-if="card.libr" class="ma-1 bg-white text-black text-body-2">
                  {{ card.libr }}
                </v-sheet>
                <v-sheet v-if="card.languages" class="ma-1 bg-white text-black text-body-2">
                  {{ card.languages }}
                </v-sheet>
                <v-sheet v-if="card.univ" class="ma-1 bg-white text-black text-body-2">
                  {{ card.univ }}
                </v-sheet>
                <v-sheet v-if="card.text" class="ma-1 bg-white text-black text-body-2">
                  {{ card.text }}
                </v-sheet>
                <v-sheet v-if="card.udemy" class="ma-1 bg-white text-black text-body-2">
                  {{ card.udemy }}
                </v-sheet>
                <v-sheet v-if="card.linkedIn" class="ma-1 bg-white text-black text-body-2">
                  {{ card.linkedIn }}
                </v-sheet>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, watch, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useStore } from 'vuex';
  
  const store = useStore(); 
  const { t } = useI18n();
  const currentLanguage = computed(() => store.getters.currentLanguage);
  
  interface Card {
    title:string,
    univ?:string,
    text?:string,
    techno?:string,
    libr?:string,
    languages?:string,
    udemy?:string,
    linkedIn?:string
  }

  const cards = ref<Card[]>([]);
  
  const updateCards = () => {
    cards.value = [
      {
        title: t('education'),
        univ: t('univ'),
        text: t('fac'),
      },
      {
        title: t('skills'),
        techno: t('techno'),
        libr: t('libr'),
        languages: t('languages')
      },
      {
        title: t('certificates'),
        udemy: t('udemy'),
        linkedIn: t('linkedIn'),
      },
    ];
  };
  
  onMounted(updateCards);
  
  watch(currentLanguage, () => {
    updateCards();
  });
  
  </script>
  

