<template>
    <header 
        class="header section" 
        :class="onScroll.scrollTop ? 'show' : 'hide'"
    >
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
</template>

<script setup>
import {onMounted, reactive} from '#imports'

const onScroll = reactive({
    scrollTop: true,
    lastScroll: null,
    position: null
})

onMounted(() => {
    onScroll.lastScroll = 0
    document.addEventListener('scroll', () => {
        onScroll.position = window.scrollY.toFixed()
        if (onScroll.position <= 0 ) {
            onScroll.scrollTop = true
        }
        
        if (onScroll.position > onScroll.lastScroll && onScroll.position > 0) {
            onScroll.scrollTop = false
        } else if (
            onScroll.position < onScroll.lastScroll || onScroll.position < 0
        ) {
            onScroll.scrollTop = true
        }
        onScroll.lastScroll = onScroll.position

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
        transition: all 1s ease-in-out;
        z-index: 999;
        top: 0;
        &.hide{
            top: -100%;
        }
        &.show{
            top: 0;
            background-color: var(--bg_color);
            box-shadow: 0 12px 20px 12px var(--bg_color);
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
                    padding-inline: 20px;
                    transition: $transition_default;
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