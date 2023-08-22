<template>
    <section class="services__section section">
        <div class="services__section__container container">
            <header>
                <h2 class="services__section__container__title small-title">
                    Services
                </h2>
            </header>
            <div class="services__section__container__column">
                <div class="services__section__container__column__selection">
                    
                    <h3 class="large-title">
                        All you need to make your Business go beyond
                    </h3>

                </div>
                <ul ref="container" class="services__section__container__column__details">
                    <li 
                        v-for="service in services"
                        :key="service.id"
                        class="services__section__container__column__details__item"
                    >
                        <NuxtLink class="services__section__container__column__details__item__contain" to="/services">
                            <header class="services__section__container__column__details__item__contain__header">
                                <figure>
                                    <AppIcon :IconName="service.icon" />
                                </figure>
                            </header>
                            <div 
                                class="services__section__container__column__details__item__contain__content"
                            >
                                <h4>
                                    {{ service.title }}
                                </h4>
                                <p>
                                    {{ service.description }}
                                </p>
                                <!-- <AppButton :ref="'target_'+service.id" class="outline small">
                                    Contract
                                </AppButton> -->
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive} from '#imports'

let services = reactive([
    {
        title: 'Graphics',
        icon: 'lucide:paint-bucket',
        description: 'UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.'
    },
    {
        title: 'UX & UI',
        icon: 'lucide:pencil-ruler',
        description: 'UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.'
    },
    {
        title: 'Development',
        icon: 'lucide:code-2',
        description: 'UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.'
    }

])

</script>

<style lang="scss" scoped>
.services__section{
    padding-block: 80px;
    &__container{
        display: flex;
        gap: 40px;
        h2{
            writing-mode:vertical-rl;
            transform: rotate(-180deg);
        }
        h3{
            position:relative; 
            z-index: 2;
        }
        &__column{
            display: grid;
            gap: 40px;
            grid-template-columns: 1fr 1fr;
            @media(max-width:$br_mobile){
                grid-template-columns: 1fr;
            }

            &__selection{
                position: relative;
                &:before{
                    content: '';
                    background: var(--tertiary);
                    position: absolute;
                    opacity: 0.4;
                    top: 20%;
                    left: 5%;
                    width: 50%;
                    aspect-ratio: 1;
                    border-radius: 100%;
                    filter: blur(100px);
                    box-shadow:  240px 20px 0 0 var(--primary), 80px 240px 0 0 var(--secondary);
                }
            }

            &__details{
                position: relative;
                display: flex;
                flex-direction: column;
                &__item{
                    &__contain{
                        padding-block: 40px;
                        padding-inline: 24px;
                        position: relative;
                        display: flex;
                        gap: 24px;
                        color: var(--text_color);
                        // align-items: center;
                        justify-content: space-between;
                        border-bottom: 1px solid var(--text_color_transparent);
                        transition: $transition_default;
                        &:hover{
                            border-radius: 40px;
                            box-shadow: 0 16px 20px 0 var(--text_color_transparent);
                            transform: scale(1.08);
                            background-color: var(--bg_color);
                        }
                        &__header{
                            figure{
                                background-color: var(--bg_color_transparent);
                                aspect-ratio: 1;
                                border-radius: 50%;
                                display: grid;
                                place-items: center;
                                font-size: 32px;
                                color: var(--text_color);
                                width: 72px;
                                margin: 0;
                                margin: auto;
                                transition: $transition_default;
                            }
                        }
                        &__content{
                            h4{
                                font-size: 24px;
                                font-weight: 400;
                                margin: 0;
                            }
                            p{
                                color: var(--text_color_smooth);
                                margin-bottom: 20px;
                            }
                        }
                        
                        
                    }
                    &:nth-child(1){
                        // grid-area: 1 / 1 / 3 / 1;
                        figure{
                            // color: var(--tertiary);
                            
                            background: linear-gradient(45deg, #ff4fd0 40%, #f4f973 100%);
                            box-shadow: 0 20px 0 0 rgba(#ff4fd0, 0.4),
                            0 40px 0 0 rgba(#ff4fd0, 0.2);
                            color: rgba(white, 0.8);
                        }
                    }
                    &:nth-child(2){
                        figure{
                            // color: var(--secondary);
                            
                            background: linear-gradient(45deg, #b01ad9 40%, #ff34c9 100%);
                            box-shadow: 0 20px 0 0 rgba(#b01ad9, 0.4),
                            0 40px 0 0 rgba(#b01ad9, 0.2);
                            color: rgba(white, 0.8);
                        }
                    }
                    &:nth-child(3){
                        figure{
                            // color: var(--primary);
                            background: linear-gradient(45deg, #083dec 40%, #31eaa0 100%);
                            box-shadow: 0 20px 0 0 rgba(#083dec, 0.4),
                            0 40px 0 0 rgba(#083dec, 0.2);
                            color: rgba(white, 0.8);
                            
                        }
                    }
                    &:nth-child(4){
                        // grid-area: 2 / 2 / 2 / 4;
                        figure{
                            background: linear-gradient(45deg, #ff5e23 40%, #f4f973 100%);
                            
                        }
                    }
                    &:last-child{
                        // grid-column: 1 / 4;
                    }
                    
                }
            }
        }
    }
}
</style>