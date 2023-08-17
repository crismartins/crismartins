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
                                <AppIcon :IconName="service.icon" />
                            </figure>
                        </header>
                        <div 
                            class="services__section__container__column__details__item__content"
                        >
                            <h4>
                                {{ service.title }}
                            </h4>
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
            grid-template-columns: 400px 1fr;

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
                // display: grid;
                // grid-template-columns:repeat(3, 1fr);
                gap: 12px;
                &__item{
                    border-radius: 120px;
                    padding: 20px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    border: 1px solid var(--text_color_transparent);
                    min-width: 200px;
                    transition: $transition_default;
                    &__header{
                        width: 100%;
                        figure{
                            background-color: var(--bg_color_transparent);
                            aspect-ratio: 1;
                            border-radius: 50%;
                            display: grid;
                            place-items: center;
                            font-size: 48px;
                            color: var(--text_color);
                            width: 120px;
                            margin: 0;
                            margin: auto;
                        }
                    }
                    &__content{
                        margin-block: 40px;
                        h4{
                            font-size: 24px;
                            font-weight: 400;
                        }
                        p{
                            color: var(--text_color_smooth);
                            margin-bottom: 40px;
                        }
                        button{
                            margin: auto;
                        }
                    }
                    // box-shadow: 0 12px 20px 0 var(--text_color_transparent);
                    // background-color: var(--pure_white);
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
                    
                }
            }
        }
    }
}
</style>