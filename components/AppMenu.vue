<template>
    <ul class="menu__list">
        <li 
            v-for="item in menuItems" 
            :key="item.title"
            class="menu__list__item" 
        >
            <nuxt-link class="menu__list__item__link" :to="$t(item.route)">
                <AppIcon :IconName="item.icon" />
                <span>{{ $t(item.title) }}</span>
            </nuxt-link>
        </li>
    </ul>
</template>

<script setup>
import { reactive } from '#imports'
const menuItems = reactive([
    {
        icon: 'ph:house-duotone',
        title: 'menu.item1.title', 
        route: 'menu.item1.route'
    },
    {
        icon: 'ph:user-circle-duotone',
        title: 'menu.item2.title', 
        route: 'menu.item2.route'
    },
    {
        icon: 'ph:wrench-duotone',
        title: 'menu.item3.title', 
        route: 'menu.item3.route'
    },
    {
        icon: 'ph:shooting-star-duotone',
        title: 'menu.item4.title', 
        route: 'menu.item4.route'
    },
    {
        icon: 'ph:chat-circle-duotone',
        title: 'menu.item5.title', 
        route: 'menu.item5.route'
    }
]
)
</script>

<style lang="scss" scoped>
    .menu__list{
        display: flex;
        gap: 16px;
        @media(max-width: $br_mobile){
            background-color: var(--bg_color_smooth);
            border: 1px solid var(--bg_color_smooth);
            border-radius: 40px;
            backdrop-filter: blur(16px);
            margin: 0 20px 20px 20px;
            padding-inline: 16px;
            gap: 4px;
        }
        &__item{
            &__link{
                padding: 8px 16px;
                display: block;
                font-size: 14px;
                font-weight: 400;
                color: var(--text_color_smooth);
                display: grid;
                place-items: center;
                cursor: pointer;
                @media(max-width: $br_mobile){
                    font-size: 12px;
                    padding:8px 8px 0 8px;
                    border-radius: 40px;
                }
                i{
                    font-size: 20px;
                    display: none;
                    @media(max-width: $br_mobile){
                        display: flex;
                    }
                }
                span{
                    padding-block: 8px;
                    @media(max-width: $br_mobile){
                        padding-block: 2px 8px;
                    }
                }
                &:after{
                    content: "";
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 2px;
                    background-color: var(--secondary);
                    transition: $transition_default;
                    display: block;
                }
                &:hover, &.active, &.router-link-exact-active{
                    color: var(--text_color);
                    @media(max-width: $br_mobile){
                        color: var(--secondary);
                    }
                    &::after{
                        width: 28px;
                    }
                }
            }
        }
        
    }
</style>