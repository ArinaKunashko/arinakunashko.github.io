<template>
    <div class="text-center">
      <v-progress-circular :rotate="360" :size="100" :width="15" :model-value="value" color="teal">
        <template v-slot:default> {{ value }} % </template>
      </v-progress-circular>
    </div>
  </template>
  
  <script>
    export default {
      data () {
        return {
          interval: -1,
          value: 0,
        }
      },
      mounted () {
        this.interval = setInterval(() => {
          if (this.value === 100) {
            return (this.value = 0)
          }
          this.value += 10
        }, 1000)
      },
      beforeUnmount () {
        clearInterval(this.interval)
      },
    }
  </script>
  <style scoped>
  .v-progress-circular {
    margin: 1rem;
  }
  </style>