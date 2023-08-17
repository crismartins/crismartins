<template>
    <header id="header" class="header section">
        <div class="container__fluid">
            <div class="container__fluid__logo">
                <NuxtLink to="/">
                    <TheLogo /> <strong>Cristopher Martins</strong>
                </NuxtLink>
            </div>
            <nav class="container__fluid__menu">
                <AppMenu />
            </nav>
            <div class="container__fluid__actions">
                <AppColorSwitcher />
                <AppLangSwitcher />
            </div>
        </div>
    </header>
    <pre>
        {{ lastScroll }}
    </pre>
</template>

<script setup>
import {onMounted} from '#imports'

onMounted(() => {
    let lastScroll = 0
    let element = document.getElementById('header')
    document.addEventListener('scroll', () => {
        let position = window.pageYOffset
        
        if (position <= 0) {
            element.classList.add('active')
            element.classList.remove('inactive')
        }

        if (position > lastScroll && !element.classList.contains('inactive')) {
            // down
            element.classList.remove('active')
            element.classList.add('inactive')
        } else if (
            position < lastScroll &&
            element.classList.contains('inactive')
        ) {
            // up
            element.classList.remove('inactive')
            element.classList.add('active')
        }
        lastScroll = position
    })
})
</script>

<style lang="scss" scoped>
    .header{
        position: fixed;
        height: 100px;
        padding-block: 24px;
        display: flex;
        width: 100%;
        transition: $transition_default;
        top: 0;
        z-index: 999;
        background: var(--bg_color);
        background: linear-gradient(180deg, var(--bg_color) 70%, var(--bg_color_transparent) 90%, rgba(255, 255, 255, 0) 100%);
        &.inactive{
            top: -100%;
        }
        &.active{
            top: 0;
        }
        .container__fluid{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            align-items: center;
            @media(max-width: $br_mobile){
                display: flex;
                justify-content: space-between;
                
            }
            &__logo{
                display: flex;
                align-items: center;
                gap: 12px;
                position: relative;
                strong{
                    margin-left: 52px;
                    font-weight: 500;
                    font-size: 12px;
                    letter-spacing: 0.8px;
                    text-transform: uppercase;
                    position: absolute;
                    display: grid;
                    place-items: center;
                    height: 100%;
                    bottom: -10px;
                    opacity: 0;
                    color: var(--text_color);
                    transition: $transition_default;
                    @media(max-width:$br_mobile){
                        bottom: 0px;
                        opacity: 1;
                    }
                }
                &:hover{
                    strong{
                        bottom: 0px;
                        opacity: 1;
                    }
                }
            }
            &__menu{
                display: grid;
                place-items: center;
                @media(max-width: $br_mobile){
                    position: fixed;
                    z-index: 999;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                }
            }
            &__actions{
                display: flex;
                align-items: center;
                justify-content: flex-end;
                grid-gap: 16px;
            }
        }
    }
</style>