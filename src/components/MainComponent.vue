<template>
  <v-container fluid class="main-content px-10">
    <v-row>
      <!-- Левая часть с текстом о вас -->


      <v-col cols="12" md="6" class="text-column d-flex flex-column justify-lg-center px-lg-15 justify-md-start">
        <p class="text-h3 py-4 text-error text-mainTitle"> {{ $t('performance') }}</p>
        <div class="text-h5 d-flex py-2 d-flex flex-row flex-wrap">
          <p class="text-mainTitle">{{ $t('develop') }}</p>
          <p class="ml-lg-2 text-secondary"> {{ $t('technologies') }} </p>
        </div>

      </v-col>

      <!-- Правая часть с фотографией -->
      <v-col cols="12" md="6" class="photo-column px-15 d-flex">
        <v-img src="../assets/img/Subject.png" alt="Arina" class="half-width-height"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true)

</script>

<style scoped>


.main-content {
  /* background-color: #BDBDBD; */
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  /* Выравниваем контент по вертикали, чтобы фото было внизу */
}

.half-width-height {
  width: 70%;
  height: 70vh;
  /* Половина высоты экрана */
  object-fit: cover;
  /* чтобы фото занимало всю область, сохраняя пропорции */
}

.photo-column {
  padding: 0;
}

.text-column {
  padding: 30px;
  /* Добавляем отступы к текстовой части */
}
</style>
