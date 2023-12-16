<template>
    <section id="CV" class="bg-backgroundResume pa-10">
        <div class="px-lg-16 mx-lg-9 py-lg-10">
            <div class="d-flex lg:px-16 xl:px-16 md:px-4 sm:px-4 ld:mx-9 xl:mx-9 fill-height" style="flex: 1;">
                <h2 class="text-h4 text-blockHeader mb-5">{{ $t('resume') }}</h2>
            </div>
            <div style="width: 100%;">
                <v-timeline v-if="!isMobile" align="start">
                    <v-timeline-item v-for="(experience, i) in experiences" :key="i" :dot-color="experience.color"
                        size="small">
                        <template v-slot:opposite>
                            <div :class="`font-weight-regular text-subtitle-1 pt-1 headline text-${experience.color}`"
                                v-text="experience.date"></div>
                        </template>
                        <div>
                            <h2
                                :class="`my-2 font-weight-regular text-h4 mt-n1 headline font-weight-light mb-4 text-${experience.color}`">
                                {{ experience.company }} </h2>
                            <p class="text-h5 mt-2">
                                {{ experience.position }}
                            </p>
                            <p class="text-subtitle-2 mt-2">{{ $t('responsibilities') }}</p>
                            <p class="text-body-2">
                                {{ experience.role }}
                            </p>
                            <p v-if="experience.achievements !== ''" class="text-subtitle-2 mt-2">{{ $t('achievements') }}
                            </p>
                            <p class="text-body-2">
                                {{ experience.achievements }}
                            </p>
                        </div>
                    </v-timeline-item>
                </v-timeline>
                <v-timeline v-if="isMobile" side="end" align="start" class="px-lg-16 mx-lg-9 px-sm-3">
                    <v-timeline-item v-for="(experience, i) in experiences" :key="i" :dot-color="experience.color"
                        size="small">
                        <template>
                            <div :class="`font-weight-regular text-subtitle-1 pt-1 headline text-${experience.color}`"
                                v-text="experience.date"></div>
                        </template>
                        <div>
                            <h2
                                :class="`my-2 font-weight-regular text-h4 mt-n1 headline font-weight-light mb-4 text-${experience.color}`">
                                {{ experience.company }} </h2>
                            <p class="text-h5 mt-2">
                                {{ experience.position }}
                            </p>
                            <p class="text-subtitle-2 mt-2">{{ $t('responsibilities') }}</p>
                            <p class="text-body-2">
                                {{ experience.role }}
                            </p>
                            <p v-if="experience.achievements !== ''" class="text-subtitle-2 mt-2">{{ $t('achievements') }}
                            </p>
                            <p class="text-body-2">
                                {{ experience.achievements }}
                            </p>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

const store = useStore(); // Получаем доступ к хранилищу
const { t } = useI18n();
const currentLanguage = computed(() => store.getters.currentLanguage);

const experiences = ref([]);

const updateExperiences = () => {
    experiences.value = [
        {
            company: 'Stocrm',
            color: 'light-blue-darken-1',
            date: t('dateStocrm'),
            position: t('position'),
            role: t('roleStocrm'),
            achievements: t('achievementsStocrm')
        },
        {
            company: 'Deneb',
            color: 'teal-lighten-1',
            date: t('dateDeneb'),
            position: t('position'),
            role: t('roleDeneb'),
            achievements: t('achievementsDeneb')
        },
        {
            company: 'Diginetica',
            color: 'green',
            date: t('dateDigi'),
            position: t('position'),
            role: t('roleDigi'),
            achievements: t('achievementsDigi'),
        },
        {
            company: t('freelance'),
            color: 'pink',
            date: t('dateFreelance'),
            position: t('position'),
            role: t('roleFreelance'),
            achievements: ''
        }
    ]
}

const isMobile = computed(() => window.innerWidth < 768)
// Обновление карточек при создании компонента
onMounted(updateExperiences);

// Обновление карточек при изменении языка
watch(currentLanguage, () => {
    updateExperiences();
});

// Обновление карточек при размонтировании компонента
onUnmounted(() => {
    // Очистка ресурсов, если необходимо
});
</script>

