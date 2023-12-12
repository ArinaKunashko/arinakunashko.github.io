<template>
    <section id="portfolio" class="pa-10 bg-backgroundResume">
        <div class="px-lg-16 mx-lg-9 py-lg-10">
        <div class="d-flex lg:px-16 xl:px-16 md:px-4 sm:px-4 ld:mx-9 xl:mx-9 fill-height" style="flex: 1;">
              <h2 class="text-h4 text-blockHeader mb-5">{{ $t('projects') }}</h2>
            </div>
      <v-carousel class="bg-backgroundResume" cycle height="400" hide-delimiter-background show-arrows="hover">
        <v-carousel-item v-for="(project, i) in projects" :key="i" :src="project.imgSrc">
          <v-sheet class="bg-backgroundResume" height="100%">
            <div class="d-flex flex-column px-16 mx-10 fill-height justify-center align-center">
              <div class="text-h4 my-5">{{ project.title }}</div>
              <div v-if="project.text" class="text-body-1">{{ project.text }}</div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const projects = ref([
    {
      title: 'ТехноКрой',
      text: 'Ателье промышленного пошива',
      imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      link: "http://tehnokroi.ru/"
    },
    {
      title: 'Технокрой',
      text: 'Ателье промышленного пошива',
      imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      link: "http://tehnokroi.ru/"
    },
  ])
  </script>
  
  <style scoped>
  </style>
  