<template>
    <div class="about__clients">
        <h4>
            Customers whoe trust me
        </h4>
        <ul class="about__clients__list">
            <li 
                v-for="client in clients" 
                :key="client.name"
                class="about__clients__list__item"
            >
                <nuxt-img 
                    :src="'images/clients/'+client.image"
                    :alt="client.name"
                    :title="client.name"
                    format="webp"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { reactive } from '#imports'
const clients = reactive([
    {name: 'Ebanx', image: 'ebanx.png'},
    {name: 'Ahoy by Belago', image: 'ahoy.png'},
    {name: 'Belago', image: 'belago.png'},
    {name: 'Frontall USA', image: 'frontall-usa.png'}
])
</script>

<style lang="scss" scoped>
.about__clients{
    text-align: center;
    h4{
        font-size: $size_14px;
        font-weight: normal;
        margin-block: 12px;
    }
    &__list{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-block: 12px;
        gap: 24px;
        &__item{
            display: grid;
            place-items: center;
            transition: $transition_default;
            opacity: 0.4;
            filter: brightness(10);
            &:hover{
                opacity: 1;
            }
        }
    }
}
</style>