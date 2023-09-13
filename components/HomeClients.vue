<template>
    <section class="about__clients section">
        <h4 class="about__clients__title container">
            {{ locale == 'en' ? 'Trusted by:' : 'Clientes:' }}
        </h4>
        <div class="about__clients__marquee">
            <ul class="about__clients__marquee__list container">
                <li 
                    v-for="client in clients" 
                    :key="client.name"
                    class="about__clients__marquee__list__item"
                >
                    <figure>
                        <nuxt-img 
                            :src="client.image"
                            width="140px"
                            :alt="client.name"
                            :title="client.name"
                            format="webp"
                        />
                    </figure>
                </li>
            </ul>
            <ul class="about__clients__marquee__list container" aria-hidden="true">
                <li 
                    v-for="client in clients" 
                    :key="client.name"
                    class="about__clients__marquee__list__item"
                >
                    <figure>
                        <nuxt-img 
                            :src="client.image"
                            width="140px"
                            :alt="client.name"
                            :title="client.name"
                            format="webp"
                        />
                    </figure>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { reactive, useI18n } from '#imports'
const { locale } = useI18n()
const clients = reactive([
    {name: 'Balance of Nature', image: 'images/clients/balance_of_nature.png'},
    {name: 'Frontall USA', image: 'images/clients/frontall_usa.png'},
    {name: 'Ahoy by Belago', image: 'images/clients/ahoy.png'},
    {name: 'ICI', image: 'images/clients/ici.png'},
    {name: 'Belago', image: 'images/clients/belago.png'},
    {name: 'Ebanx', image: 'images/clients/ebanx.png'},
    {name: 'Onr', image: 'images/clients/onr.png'},
    {name: 'Páprica', image: 'images/clients/paprica.png'},
    {name: 'Visionnaire', image: 'images/clients/visionnaire.png'}
])
</script>

<style lang="scss" scoped>

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
.about__clients{
    padding-block: 40px 20px;
    @media(max-width: $br_mobile){
        text-align: center;
    }
    &__title{
        font-size: $size_12px;
        font-weight: normal;
        margin-block: 12px;
        color: var(--text_color_smooth);
    }
    &__marquee{
        --gap: 16px;
        position: relative;
        display: flex;
        overflow: hidden;
        user-select: none;
        gap: var(--gap);
        @media(max-width:$br_mobile){
            margin-inline: 20px;
        }
        &:before, &:after{
            content: '';
            position: absolute;
            height: 100%;
            width: 20px;
            border-radius: 80px;
            background-color: var(--bg_color);
            box-shadow: 0 0 12px 12px var(--bg_color);
            top: 0;
            z-index: 2;
            @media(max-width:$br_mobile){
                display: none;
            }
        }
        &:before{
            left: 0;
        }
        &:after{
            right: 0;
        }
        &__list{
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-block: 12px;
            gap: var(--gap);
            min-width: 100%;
            flex-shrink: 0;
            animation: 12s scroll infinite linear;
            @media(max-width:$br_mobile){
                animation: none;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            &__item{
                display: grid;
                width: 100%;
                place-items: center;
                transition: $transition_default;
                // background-color: var(--bg_color_smooth);
                border-radius: 20px;
                // border: 1px solid var(--text_color_transparent);
                @media(max-width:$br_mobile){
                    max-width: 100px;
                }
                figure{
                    opacity: 0.6;
                    filter: var(--logo_filters);
                    transition: $transition_default;
                    display: block;
                    img{
                        display: block;
                        max-height: 100px;
                        width: auto;
                    }
                    &:hover{
                        opacity: 1;
                    }
                }
            }
        }
    }
}
</style>