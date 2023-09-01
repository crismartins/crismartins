<template>
    <ul class="menu__list">
        <li 
            v-for="item in menuItems" 
            :key="item.title"
            class="menu__list__item" 
        >
            <nuxt-link 
                class="menu__list__item__link" 
                :class="{ 'active' : sectionVisible == $t(item.route) }" 
                :to="{hash: $t(item.route)}"
            >
                <AppIcon :IconName="item.icon" />
                <span>{{ $t(item.title) }}</span>
            </nuxt-link>
        </li>
    </ul>
</template>

<script setup>
import { ref, reactive, onMounted } from '#imports'

const sectionVisible = ref('#home')

onMounted(() => {
    document.addEventListener('scroll', () => {
        const home = document.querySelector('#home')
        const portfolio = document.querySelector('#portfolio')
        const about = document.querySelector('#about')
        const services = document.querySelector('#services')
        const contact = document.querySelector('#contact')
        if(window.pageYOffset <= home.offsetTop + home.offsetHeight / 2){
            sectionVisible.value = '#home'
           
        }else if(window.pageYOffset <= portfolio.offsetTop + portfolio.offsetHeight / 2){
            sectionVisible.value = '#portfolio'
           
        }else if(window.pageYOffset <= about.offsetTop + about.offsetHeight / 2){
            sectionVisible.value = '#about'
           
        }else if(window.pageYOffset <= services.offsetTop + services.offsetHeight / 2){
            sectionVisible.value = '#services'
           
        }else if(window.pageYOffset <= contact.offsetTop + contact.offsetHeight / 2){
            sectionVisible.value = '#contact'
           
        }
    })
})


const menuItems = reactive([
    {
        icon: 'ph:house-duotone',
        title: 'menu.item1.title', 
        route: 'menu.item1.route'
    },
    {
        icon: 'ph:shooting-star-duotone',
        title: 'menu.item4.title', 
        route: 'menu.item4.route'
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
            margin-bottom: 24px;
            padding-inline: 16px;
            gap: 4px;
            width: 100%;
        }
        &__item{
            flex-grow: 1;
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
                    padding:12px 8px 0 8px;
                    border-radius: 40px;
                }
                i{
                    font-size: 20px;
                    display: none;
                    @media(max-width: $br_mobile){
                        display: flex;
                        justify-content: center;
                    }
                    @media(max-width: $br_smaller){
                        padding-bottom: 12px;
                        min-width: 28px;
                    }
                }
                span{
                    padding-block: 8px;
                    @media(max-width: $br_mobile){
                        padding-block: 2px 12px;
                    }
                    @media(max-width: $br_smaller){
                        display: none;
                    }
                }
                &:after{
                    content: "";
                    width: 0%;
                    height: 2px;
                    background-color: var(--secondary);
                    transition: $transition_default;
                    display: block;
                }
                &:hover, &.active{
                    color: var(--text_color);
                    &::after{
                        width: 28px;
                    }
                }
            }
        }
        
    }
</style>