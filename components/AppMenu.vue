<template>
    <ul class="menu__list">
        <li class="menu__list__item" v-for="item in menuItems" :key="item.title">
            <nuxt-link class="menu__list__item__link" :to="{path: '/', hash: $t(item.route)}">
                <span>{{ $t(item.title) }}</span>
            </nuxt-link>
        </li>
    </ul>
</template>

<script setup>

const menuItems = ref([
        {
            title: 'menu.item1.title', 
            route: 'menu.item1.route'
        },
        {
            title: 'menu.item2.title', 
            route: 'menu.item2.route'
        },
        {
            title: 'menu.item3.title', 
            route: 'menu.item3.route'
        },
        {
            title: 'menu.item4.title', 
            route: 'menu.item4.route'
        }
    ]
)
</script>

<style lang="scss" scoped>
    .menu__list{
        display: flex;
        &__item{
            margin: 0 8px;
            &__link{
                padding: 8px 16px;
                display: block;
                font-size: 12px;
                text-transform: uppercase;
                font-weight: 400;
                color: var(--dark);
                display: grid;
                place-items: center;
                span{
                    padding-block: 8px;
                    cursor: pointer;
                }
                &:after{
                    content: "";
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 2px;
                    background-color: var(--primary);
                    transition: $transition_default;
                    display: block;
                }
                &:hover, &.router-link-exact-active{
                    &::after{
                        width: 28px;
                    }
                }
            }
        }
    }
</style>