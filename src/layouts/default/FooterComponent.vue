<template>
  <div id="footer" class="bg-backgroundFooter d-flex flex-column">

    <div class="d-flex flex-row">

      <div class="d-flex flex-column px-lg-16 mx-lg-9 py-lg-10 py-5 px-10">
        <h2 class="text-h5 text-mainTitle mb-5"> {{ $t('slogan') }}</h2>
        <div class="d-flex flex-row my-3 justify-start">
          <svg-icon type="mdi" :path="pathDownLoad"></svg-icon>
          <a v-if="$t('downloadRes')=== 'Скачать резюме'" href="/Kunashko Arina CV Frontend Developer.pdf" download="CV_Arina_Kunashko_Frontend_dev.pdf"
            class="text-body-1 text-footerText text-decoration-none ml-3">
            {{ $t('downloadRes') }}
          </a>
          <a v-if="$t('downloadRes')=== 'Download resume'" href="/Arina Kunashko  CV Frontend Developer.pdf" download="CV_Arina_Kunashko_Frontend_dev.pdf"
            class="text-body-1 text-footerText text-decoration-none ml-3">
            {{ $t('downloadRes') }}
          </a>
        </div>

      </div>

      <div class="d-flex flex-column px-lg-16 mx-lg-9 py-lg-10 py-5 px-10">
        <div class="d-flex justify-start">
          <h2 class="text-h4 text-mainTitle mb-5 d-flex">{{ $t('navigate') }}</h2>
        </div>
        <a v-for="link in links" :key="link" color="footerText" class="d-flex justify-start text-body-1 text-footerText text-decoration-none py-2"
          rounded="xl" :href="link.href" v-scroll-to="link.href">
          {{ link.text }}
      </a>
      </div>

      <div
        class="px-lg-16 mx-lg-9 d-flex py-lg-10 d-flex flex-column py-5 px-10 flex-lg-column flex-sm-column flex-md-column flex-sm-column flex-column flex-xs-column">
        <div class="d-flex justify-start">
          <h2 class="text-h4 text-mainTitle mb-5">{{ $t('contact') }}</h2>
        </div>
        <div class="pb-5 ">
          <div class="d-flex flex-row my-3 justify-start">
            <svg-icon type="mdi" :path="pathLinked"></svg-icon>
            <a target="_blank" href="https://www.linkedin.com/in/arina-kunashko/"
              class="text-body-1 text-footerText text-decoration-none ml-3">
              LinkedIn
            </a>
          </div>
          <div class="d-flex flex-row my-3 justify-start">
            <svg-icon type="mdi" :path="pathGit"></svg-icon>
            <a target="_blank" href="https://github.com/ArinaKunashko"
              class="text-body-1 text-footerText text-decoration-none ml-3">
              GitHub
            </a>
          </div>
          <div class="d-flex flex-row my-3  justify-start">
            <svg-icon type="mdi" :path="pathEmail"></svg-icon>
            <a v-if="!isMobile" target="_blank" :href="emailLink"
              class="text-body-1 text-footerText text-decoration-none ml-3">
              {{ myEmail }}
            </a>
            <a v-else  @click="openEmailClient" class="text-body-1 text-footerText text-decoration-none ml-3">
              {{ myEmail }}
            </a>
          </div>

        </div>

      </div>
    </div>
    <v-col class="text-center mt-4" cols="12">
      {{ new Date().getFullYear() }} — <strong>Arina Kunashko</strong>
    </v-col>
  </div>
</template>

<script setup>
import VueScrollTo from 'vue-scrollto';
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiLinkedin, mdiEmail, mdiGithub, mdiFileDownloadOutline } from '@mdi/js';



const pathLinked = ref(mdiLinkedin)
const pathEmail = ref(mdiEmail)
const pathGit = ref(mdiGithub)
const pathDownLoad = ref(mdiFileDownloadOutline)


const myEmail = 'kunashkoa@gmail.com';
const emailLink = computed(() => `mailto:${myEmail}`);

const openEmailClient = () => {
  window.location.href = emailLink.value;
};
const store = useStore(); // Получаем доступ к хранилищу
const { t } = useI18n();
const currentLanguage = computed(() => store.getters.currentLanguage);

const links = ref([]);

const updateLinks = () => {
  links.value = [
    {
      text: t('start'),
      href: "#start"
    },
    {
      text: t('aboutMe'),
      href: "#about"
    },
    {
      text: t('portfolio'),
      href: "#portfolio"
    },
    {
      text: t('resume'),
      href: "#CV"
    },

  ]
}

const isMobile = computed(() => window.innerWidth < 768)
// Обновление карточек при создании компонента
onMounted(updateLinks);

// Обновление карточек при изменении языка
watch(currentLanguage, () => {
  updateLinks();
});

// Обновление карточек при размонтировании компонента
onUnmounted(() => {
  // Очистка ресурсов, если необходимо
});
</script>

<style scoped>
@media (max-width: 767px) {
  #footer .d-flex {
    flex-direction: column;
    flex-wrap: wrap;
  }

  #footer .d-flex.flex-row {
    flex-direction: column;
    flex-wrap: wrap;
  }

  #footer .px-lg-16 {
    padding: 10px; /* Adjust the padding for small screens */
  }
  
  /* Add more responsive styles as needed */
}
</style>