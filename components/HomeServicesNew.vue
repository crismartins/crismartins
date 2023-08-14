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
                        <header class="services__section__container__column__details__item__header">
                            <figure>
                                <!-- <img 
                                    :src="service.image"
                                    width="240"
                                    height="386"
                                /> -->
                            </figure>
                            <h3>
                                {{ service.title }}
                            </h3>
                        </header>
                        <div 
                            :id="'service_'+service.id"
                            class="services__section__container__column__details__item__content"
                        >
                            <p>
                                {{ service.description }}
                            </p>
                            <AppButton :ref="'target_'+service.id" class="outline">
                                Contract
                            </AppButton>
                        </div>
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
        title: 'Branding',
        image: '/images/crismartins.png',
        description: 'UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.'
    }
    ,
    {
        title: 'UX',
        image: '/images/crismartins.png',
        description: 'UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.'
    },
    {
        title: 'UI',
        image: '/images/crismartins.png',
        description: 'UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.'
    },
    {
        title: 'Development',
        image: '/images/crismartins.png',
        description: 'UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.'
    }

])

</script>

<style lang="scss" scoped>
.services__section{
    padding-block: 40px;
    &__container{
        display: flex;
        gap: 40px;
        h2{
            writing-mode:vertical-rl;
            transform: rotate(-180deg);
        }
        h3{
            margin-bottom: 40px;
        }
        &__column{
            display: grid;
            gap: 40px;
            grid-template-columns: 400px 1fr;

            &__selection{
                position: relative;
                &:before{
                    content: '';
                    background: var(--secondary);
                    position: absolute;
                    opacity: 0.6;
                    top: 20%;
                    left: 5%;
                    width: 50%;
                    aspect-ratio: 1;
                    border-radius: 100%;
                    filter: blur(120px);
                    box-shadow:  240px 20px 0 0 var(--neutral), 80px 240px 0 0 var(--tertiary);
                }
            }

            &__details{
                position: relative;
                display: grid;
                grid-template-columns:repeat(3, 1fr);
                gap: 12px;
                &__item{
                    background: var(--secondary);
                    border-radius: 40px;
                    padding: 40px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    box-shadow: 0 12px 20px 0 var(--text_color_transparent);
                    background-color: var(--pure_white);
                    &:nth-child(1){
                        grid-area: 1 / 1 / 3 / 1;
                        // background: linear-gradient(45deg, #ff5e23 40%, #f4f973 100%);
                    }
                    &:nth-child(2){
                        // background: linear-gradient(45deg, #b01ad9 40%, #ff34c9 100%);
                    }
                    &:nth-child(3){
                        // background: linear-gradient(45deg, #ff4fd0 40%, #f4f973 100%);
                    }
                    &:nth-child(4){
                        grid-area: 2 / 2 / 2 / 4;
                        // background: linear-gradient(45deg, #083dec 40%, #31eaa0 100%);
                    }
                    // &:last-child{
                    //     grid-column: 1 / 4;
                    // }
                    // &:before{
                    //     content: '';
                    //     background: var(--primary);
                    //     position: absolute;
                    //     opacity: 0.4;
                    //     top: 20%;
                    //     left: 5%;
                    //     width: 50%;
                    //     aspect-ratio: 1;
                    //     border-radius: 100%;
                    //     filter: blur(100px);
                    //     box-shadow:  240px 20px 0 0 var(--secondary), 80px 240px 0 0 var(--tertiary);
                    // }
                    &__header{
                        figure{

                        }
                        h3{

                        }
                    }
                    &__content{
                        position: relative;
                        z-index: 1;
                        width: 100%;
                        color: var(--text_color);
                    }
                }
            }
        }
    }
}
</style>