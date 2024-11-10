<template>
  <div class="text-center">
    <v-progress-circular :rotate="360" :size="100" :width="15" :model-value="value" color="teal">
      <template v-slot:default> {{ value }} % </template>
    </v-progress-circular>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

    const value = ref<number>(0);
    let interval: number | undefined;

    onMounted(() => {
      interval = window.setInterval(() => {
        if (value.value === 100) {
          value.value = 0;
        } else {
          value.value += 10;
        }
      }, 1000);
    });

    onBeforeUnmount(() => {
      if (interval) {
        clearInterval(interval);
      }
    });

</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>