<template>
  <v-container fluid
    class="main-content px-lg-10 px-sm-7 px-2 px-md-5 py-sm-0 pt-xs-15 pt-sm-15 py-md-15  py-lg-0 py-15 ">
    <v-row style="height: 80vh; position: relative;">
      <!-- Левая часть с текстом -->
      <v-col cols="12" md="12" lg="6" xl="6"
        class="text-column d-flex flex-column justify-lg-center px-lg-15 px-xs-5 justify-md-start" style="height: 100%;">
        <p v-if="!isMobile" class="text-lg-h3 text-sm-h2 py-4 text-error text-mainTitle"> {{ $t('performanceName') }}</p>
        <div v-if="isMobile" class="d-flex cont">
          <div style="flex:1">
            <p class="text-lg-h3 text-sm-h4 text-h4 py-4 text-error text-mainTitle"> {{ $t('performanceName') }}</p>
          </div>
          <div style="border-left: 1px solid ; width: 100%; flex:1; display: flex; align-items: flex-end;" class="d-flex">
            <img src="../assets/img/PhotoForMobile.png" alt="Arina" class="half-width-height ml-4" />
          </div>
        </div>

        <p class="text-lg-h3 text-sm-h4 text-h4 py-lg-4 py-0 pt-sm-10 pt-lg-0 pt-4 text-mainTitle"> {{
          $t('performanceProfession') }}</p>
        <div class="text-h5 d-flex py-2 d-flex flex-row flex-wrap">
          <p class="text-mainTitle text-lg-h4 text-sm-h4 text-h4 inline mr-lg-2 mr-md-2 mr-sm-2">{{ $t('develop') }}</p>
          <p class="text-secondary text-lg-h4 text-sm-h4 text-h4 inline "> {{ $t('technologies') }}
          </p>
        </div>
      </v-col>
      <!-- Правая часть с фотографией -->
      <v-col cols="12" md="6" class="photo-column px-15 d-flex flex-column justify-end align-end">
  <img v-if="!isMobile" src="../assets/img/Subject copy.png" alt="Arina" class="half-width-height pinned-to-bottom" />
</v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';

const show = ref(true)
const isMobile = computed(() => window.innerWidth < 1030);

</script>

<style scoped>
/* Стили для .photo-column */
.photo-column {
  padding: 0;
  height: 98%;
  position: relative; /* Add this line to make it the positioning context */
}

.pinned-to-bottom {
  position: absolute;
  bottom: 0;
}
/* Стили для .cont (в случае мобильного вида) */
.cont {
  height: 100%;
  /* Занимаем всю высоту контейнера */
}
.main-content {
  /* background-color: #BDBDBD; */
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  /* Выравниваем контент по вертикали, чтобы фото было внизу */
}
.photo-column {
  padding: 0;
}
.text-column {
  padding: 30px;
  /* Добавляем отступы к текстовой части */
}

@media screen and (min-width: 1031px) {
  .half-width-height {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important;
  }
}

@media screen and (max-width: 1030px) {
  .half-width-height {
    width: 100%;
    /* object-fit: contain; */
    border-radius: 50% !important;
  }
  .cont {
    height: 50vh;
  }
}

@media screen and (max-width: 1000px) and (min-width: 600px) {
  .half-width-height[data-v-e9eea4ec] {
    height: 57%;
  }
}</style>
