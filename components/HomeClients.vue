<template>
    <section class="about__clients section">
        <h4 class="about__clients__title">
            Trusted by:
        </h4>
        <div class="container marquee">
            <ul class="about__clients__list container">
                <li 
                    v-for="client in clients" 
                    :key="client.name"
                    class="about__clients__list__item"
                >
                    <figure>
                        <nuxt-img 
                            :src="client.image"
                            width="120px"
                            :alt="client.name"
                            :title="client.name"
                            format="webp"
                        />
                    </figure>
                </li>
            </ul>
            <ul class="about__clients__list container" aria-hidden="true">
                <li 
                    v-for="client in clients" 
                    :key="client.name"
                    class="about__clients__list__item"
                >
                    <figure>
                        <nuxt-img 
                            :src="client.image"
                            width="120px"
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
import { reactive } from '#imports'
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
    text-align: center;
    padding: 40px 20px;
    &__title{
        font-size: $size_12px;
        font-weight: normal;
        margin-block: 12px;
        color: var(--text_color_smooth);
    }
    .marquee{
        --gap: 16px;
        position: relative;
        display: flex;
        overflow: hidden;
        user-select: none;
        gap: var(--gap);
    }
    &__list{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-block: 12px;
        gap: --gap;
        min-width: 100%;
        flex-shrink: 0;
        animation: 12s scroll infinite linear;
        &__item{
            display: grid;
            place-items: center;
            transition: $transition_default;
            figure{
                opacity: 0.4;
                filter: var(--logo_filters);
                transition: $transition_default;
                &:hover{
                    opacity: 1;
                }
            }
        }
    }
}
</style>