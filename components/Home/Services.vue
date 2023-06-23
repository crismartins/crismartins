<template>
    <section class="services__section section">
        <div class="services__section__container container">
            <div class="services__section__container__column">
                <div class="services__section__container__column__selection">
                    <h2 class="small-title">
                        Services
                    </h2>
                    <h3 class="large-title">
                        All you need to make your Business go beyond
                    </h3>

                    <ul class="services__section__container__column__selection__list">
                        <li class="services__section__container__column__selection__list__item">
                            <AppButton 
                                class="gradient" 
                                :class="service_1 ? 'active' : 'inactive'"
                                @click="goService(1)"
                            >
                                <strong>
                                    <AppIcon IconName="ph:devices-duotone" />
                                    UX/UI Design
                                </strong>
                                <AppIcon IconName="ph:arrow-right" />
                            </AppButton>
                        </li>
                        <li class="services__section__container__column__selection__list__item">
                            <AppButton 
                                class="gradient" 
                                :class="service_2 ? 'active' : 'inactive'"
                                @click="goService(2)"
                            >
                                <strong>
                                    <AppIcon IconName="ph:terminal-window-duotone" />
                                    Web Development
                                </strong>
                                <AppIcon IconName="ph:arrow-right" />
                            </AppButton>
                        </li>
                        <li class="services__section__container__column__selection__list__item">
                            <AppButton 
                                class="gradient" 
                                :class="service_3 ? 'active' : 'inactive'"
                                @click="goService(3)"
                            >
                                <strong>
                                    <AppIcon IconName="ph:bezier-curve-duotone" />
                                    Branding
                                </strong>
                                <AppIcon IconName="ph:arrow-right" />
                            </AppButton>
                        </li>
                        <li class="services__section__container__column__selection__list__item">
                            <AppButton 
                                class="gradient" 
                                :class="service_4 ? 'active' : 'inactive'"
                                @click="goService(4)"
                            >
                                <strong>
                                    <AppIcon IconName="ph:pencil-line-duotone" />
                                    Illustration
                                </strong>
                                <AppIcon IconName="ph:arrow-right" />
                            </AppButton>
                        </li>
                    </ul>

                </div>
            </div>
            <div class="services__section__container__column">
                <ul ref="container" class="services__section__container__column__details">
                    <li 
                        v-for="service in services"
                        :key="service.id"
                        class="services__section__container__column__details__item"
                    >
                        <article 
                            :id="'service_'+service.id"
                            :style="layer0"
                            class="services__section__container__column__details__item__card"
                        >
                            <img 
                                :src="service.image"
                                width="240"
                                height="386"
                            />

                            <p>
                                {{ service.description }}
                            </p>
                            <AppButton :ref="'target_'+service.id" class="outline">
                                That's what I need!
                            </AppButton>
                        </article>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive} from '#imports'
import { useElementVisibility, useParallax } from '@vueuse/core'

let services = ref([
    {
        id: 1,
        image: '/images/crismartins.png',
        description: 'UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.'
    },
    {
        id: 2,
        image: '/images/crismartins.png',
        description: 'UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.'
    },
    {
        id: 3,
        image: '/images/crismartins.png',
        description: 'UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.'
    },
    {
        id: 4,
        image: '/images/crismartins.png',
        description: 'UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.'
    }
])
const selected = ref(1)

const target_1 = ref(null)
const service_1 = useElementVisibility(target_1)
const target_2 = ref(null)
const service_2 = useElementVisibility(target_2)
const target_3 = ref(null)
const service_3 = useElementVisibility(target_3)
const target_4 = ref(null)
const service_4 = useElementVisibility(target_4)
const container = ref(null)
const parallax = reactive(useParallax(container))

const layer0 = computed(() => ({
    transition: '.3s ease-out all',
    transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
        parallax.tilt * 20
    }deg)`,
}))

function goService(id){
    const element = document.getElementById('service_'+id)
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
    selected.value = id
}

</script>

<style lang="scss" scoped>
.services__section{
    padding-block: 40px;
    &__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        &__column{
            &__selection{
                position: sticky;
                top: 0;
                min-height: 100vh;
                justify-content: center;
                display: flex;
                flex-direction: column;
                z-index: 1;
                &__list{
                    margin-block: 40px;
                    &__item{
                        padding-block: 8px;
                        button{
                            width: 100%;
                            justify-content: space-between;
                            font-size: $size_24px;
                            padding: 12px 20px;
                            transform: scale(1.08);
                            
                            &.inactive{
                                transform: scale(1);
                                background: transparent;
                                color: var(--text_color);
                                border: none;
                                box-shadow: none;
                                & > i:last-child{
                                    opacity: 0;
                                }
                            }
                            strong{
                                display: flex;
                                align-items: center;
                                font-weight: 500;
                                gap: 16px;
                                i{
                                    font-size: 60px;
                                }
                            }
                        }
                    }
                }
            }

            &__details{
                margin: 24px;
                position: relative;
                display: grid;
                grid-template-columns: 1fr;
                gap: 80px;
                &__item{
                    min-height: 100vh;
                    display: grid;
                    place-items: center;
                    position: relative;
                    &:before{
                        content: '';
                        background: var(--primary);
                        position: absolute;
                        opacity: 0.4;
                        top: 20%;
                        left: 5%;
                        width: 50%;
                        aspect-ratio: 1;
                        border-radius: 100%;
                        filter: blur(100px);
                        box-shadow:  240px 20px 0 0 var(--secondary), 80px 240px 0 0 var(--tertiary);
                    }
                    &__card{
                        position: relative;
                        z-index: 1;
                        border: 2px solid var(--pure_white);
                        background-color: rgba(255,255,255, 0.4);
                        backdrop-filter: blur(40px);
                        border-radius: 24px;
                        padding: 40px;
                        text-align: center;
                        button{
                            margin: auto;
                        }
                    }
                }
            }
        }
    }
}
</style>