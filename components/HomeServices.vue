<template>
    <section class="services__section section">
        <div class="services__section__container container">
            <header>
                <h2 class="services__section__container__title small-title">
                    {{ $t(services.title) }}
                </h2>
            </header>
            <div class="services__section__container__column">
                <div class="services__section__container__column__selection">
                    
                    <h3 class="large-title">
                        {{ $t(services.subTitle) }}
                    </h3>
                    <HomeServicesDetails />
                </div>
                <ul ref="container" class="services__section__container__column__details">
                    <li 
                        v-for="service in services.list"
                        :key="service.id"
                        class="services__section__container__column__details__item"
                    >
                        <article class="services__section__container__column__details__item__contain" to="/services">
                            <header class="services__section__container__column__details__item__contain__header">
                                <figure>
                                    <AppIcon :IconName="$t(service.icon)" />
                                </figure>
                            </header>
                            <div 
                                class="services__section__container__column__details__item__contain__content"
                            >
                                <h4>
                                    {{ $t(service.title) }}
                                </h4>
                                <p>
                                    {{ $t(service.description) }}
                                </p>
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive} from '#imports'

let services = reactive({
    title: 'services.title',
    subTitle: 'services.subtitle',
    list: [
        {
            title: 'services.service_1.title',
            icon: 'services.service_1.icon',
            description: 'services.service_1.text'
        },
        {
            title: 'services.service_2.title',
            icon: 'services.service_2.icon',
            description: 'services.service_2.text'
        },
        {
            title: 'services.service_3.title',
            icon: 'services.service_3.icon',
            description: 'services.service_3.text'
        }
    ]
})

</script>

<style lang="scss" scoped>
.services__section{
    padding-block: 80px;
    &__container{
        display: flex;
        gap: 40px;
        @media(max-width:$br_mobile){
            flex-direction: column;
            gap: 20px;
        }
        h2{
            writing-mode:vertical-rl;
            transform: rotate(-180deg);
            position: sticky;
            top: 140px;
            @media(max-width:$br_mobile){
                writing-mode:horizontal-tb;
                transform: rotate(0);
                text-align: center;
            }
        }
        h3{
            position:relative; 
            z-index: 2;
            margin-bottom: 40px;
            @media(max-width: $br_tablet){
                text-align: center;
            }
        }
        &__column{
            display: grid;
            gap: 40px;
            grid-template-columns: 1fr 1fr;
            @media(max-width:$br_tablet){
                grid-template-columns: 1fr;
            }

            &__selection{
                position: relative;
            }

            &__details{
                position: relative;
                display: flex;
                gap: 16px;
                flex-direction: column;
                &__item{
                    &__contain{
                        padding-block: 40px;
                        padding-inline: 24px;
                        position: relative;
                        display: flex;
                        gap: 40px;
                        color: var(--text_color);
                        justify-content: space-between;
                        border: 1px solid var(--text_color_transparent);
                        transition: $transition_default;
                        border-radius: 40px;
                        background-color: var(--bg_color_smooth);
                        &:hover{
                            box-shadow: 0 0px 40px 0 var(--text_color_transparent);
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
                            }
                        }
                        
                        
                    }
                    &:nth-child(1){
                        figure{
                            
                            background: linear-gradient(45deg, #ff4fd0 40%, #f4f973 100%);
                            box-shadow: 12px 20px 0 0 rgba(#ff4fd0, 0.4),
                            24px 40px 0 0 rgba(#ff4fd0, 0.2);
                            color: rgba(white, 0.8);
                        }
                    }
                    &:nth-child(2){
                        figure{
                            
                            background: linear-gradient(45deg, #b01ad9 40%, #ff34c9 100%);
                            box-shadow: 12px 20px 0 0 rgba(#b01ad9, 0.4),
                            24px 40px 0 0 rgba(#b01ad9, 0.2);
                            color: rgba(white, 0.8);
                        }
                    }
                    &:nth-child(3){
                        figure{
                            background: linear-gradient(45deg, #083dec 40%, #31eaa0 100%);
                            box-shadow: 12px 20px 0 0 rgba(#083dec, 0.4),
                            24px 40px 0 0 rgba(#083dec, 0.2);
                            color: rgba(white, 0.8);
                            
                        }
                    }
                }
            }
        }
    }
}
</style>