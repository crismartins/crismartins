<template>
    <section class="hero__section section">
        <div class="hero__section__container container">
            <div class="hero__section__container__presentation">
                <ul class="hero__section__container__presentation__skills">
                    <li 
                        v-for="(skill, index) in hardSkills" 
                        :key="index"
                        class="hero__section__container__presentation__skills__item"
                        :class="'skill_' + index"
                    >
                        <span class="hero__section__container__presentation__skills__item__icon">
                            <AppIcon :IconName="skill.logo" />
                            <small>
                                {{ skill.title }}
                            </small>
                        </span>
                    </li>
                </ul>
                <NuxtLink to="/about" class="hero__section__container__presentation__button">
                    <figure class="hero__section__container__presentation__button__avatar">
                        <NuxtImg 
                            src="/images/crismartins_avatar.png"
                            format="webp"
                            width="200px"
                            quality="100"
                            densities="1 2 3 4"
                        />
                    </figure>
                    <div>
                        <span>
                            About Me
                        </span>
                    </div>
                </NuxtLink>
            </div>
            <div class="hero__section__container__text">
                <div class="hero__section__container__text__wrapper">
                    <p class="hero__section__container__text__wrapper__name small-title">
                        I'm Cristopher Martins
                    </p>
                    <h1 class="hero__section__container__text__wrapper__title gradient-font">
                        Designer / Developer.
                    </h1>
                    <AppButton class="primary">
                        Get in Touch
                    </AppButton>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import { reactive } from '#imports'
const hardSkills = reactive([
    {logo: 'logos:figma', title: 'Figma'},
    {logo: 'logos:adobe-xd', title: 'Adobe Xd'},
    {logo: 'logos:adobe-photoshop', title: 'Adobe Photoshop'},
    {logo: 'logos:adobe-illustrator', title: 'Adobe Illustrator'},
    {logo: 'logos:javascript', title: 'Javascript'},
    {logo: 'logos:html-5', title: 'HTML 5'},
    {logo: 'logos:css-3', title: 'CSS 3'},
    {logo: 'logos:sass', title: 'Sass'},
    // {logo: 'logos:vue', title: 'Vue.JS'},
    // {logo: 'logos:flutter', title: 'Flutter'},
    // {logo: 'logos:nuxt', title: 'Nuxt.JS'}
])
</script>
  
<style lang="scss" scoped>
.hero__section{
    min-height: 90vh;
    min-height: 90dvh;
    display: grid;
    place-items: center;
    &__container{
        padding-block: 16% 80px;
        flex-grow: 1;
        &__presentation{
            position: relative;
            display: grid;
            place-items: center;
            margin-bottom:32px;
            &__skills{
                position: absolute;
                display: grid;
                place-items: center;
                z-index: -1;
                &__item{
                    position: absolute;
                    aspect-ratio: 1;
                    border-radius: 100%;
                    border: 2px solid var(--text_color_transparent) ;
                    display: flex;
                    align-items: center;
                    animation: rotate 12s infinite linear;
                    &__icon{
                        aspect-ratio: 1;
                        font-size: 24px;
                        width: 44px;
                        display: grid;
                        place-items: center;
                        border-radius: 100%;
                        background-color: var(--neutral);
                        margin-left: -20px;
                        box-shadow: 0 4px 20px 0 var(--text_color_transparent), inset 8px -4px 32px 0 var(--bg_color);
                    }
                    small{
                        background-color: var(--tertiary);
                        opacity: 0;
                        position: absolute;
                    }
                    &:nth-child(1){
                        width: 220px;
                        transform: rotate(45deg);
                        animation: rotate 16s infinite linear;
                        span{
                            opacity: 1;
                        }
                    }
                    &:nth-child(2){
                        width: 320px;
                        transform: rotate(90deg);
                        animation: rotate 12s infinite linear;
                    }
                    &:nth-child(3){
                        width: 420px;
                        transform: rotate(180deg);
                        animation: rotate 8s infinite linear;
                    }
                    &:nth-child(4){
                        width: 520px;
                        transform: rotate(300deg);
                        animation: rotate 16s infinite linear;

                    }
                    &:nth-child(5){
                        width: 620px;
                        transform: rotate(200deg);
                        animation: rotate 8s infinite linear;

                    }
                    &:nth-child(6){
                        width: 720px;
                        transform: rotate(0deg);
                        animation: rotate 12s infinite linear;

                    }
                    &:nth-child(7){
                        width: 820px;
                        transform: rotate(0deg);
                        animation: rotate 16s infinite linear;

                    }
                    &:nth-child(8){
                        width: 920px;
                        transform: rotate(0deg);
                        animation: rotate 8s infinite linear;

                    }
                    &:nth-child(9){
                        width: 1020px;
                        transform: rotate(0deg);
                        animation: rotate 12s infinite linear;

                    }
                    &:nth-child(10){
                        width: 1120px;
                        transform: rotate(0deg);
                        animation: rotate 16s infinite linear;

                    }
                }
            }
            &__button{
                background-color: var(--bg_color);
                border: 0;
                border-radius: 100px;
                padding: 8px;
                display: flex;
                grid-template-columns: 2fr;
                align-items: center;
                position: relative;
                z-index: 8;
                animation: pulse 2s infinite ease;
                
                div{
                    transition: $transition_default;
                    display: grid;
                    grid-template-columns: 0fr;
                    span{
                        display: flex;
                        overflow: hidden;
                        transition: $transition_default;
                        white-space: nowrap;
                        color: var(--pure_white);
                    }
                }

                &:hover{
                    background-color: var(--tertiary);
                    figure{
                        width: 40px;
                    }
                    div{
                        grid-template-columns: 1fr;
                        span{
                        padding: 8px 20px 8px 8px;
                        }
                    }
                }
                
                
                &__avatar{
                    flex-shrink: 0;
                    overflow: hidden;
                    width: 100px;
                    aspect-ratio: 1;
                    border-radius: 100px;
                    background-color: var(--secondary);
                    display: grid;
                    place-items: center;
                    margin: 0;
                    transition: $transition_default;
                    img{
                        min-width: 100%;
                        min-height: 100%;
                        object-fit: cover;
                        object-position: top;
                    }
                }
            }
        }
        &__text{
        display: grid;
        place-items: center;
        position: relative;
        &:before{
            content: '';
            display: block;
            background-color: var(--bg_color);
            border-radius: 100%;
            width: 100%;
            height: 100%;
            filter: blur(40px);
            position: absolute;

        }
        &__wrapper{
            display: grid;
            place-items: center;
            position: relative;
            z-index: 2;
            &__name{
                text-align: center;
            }
            &__title{
                margin-block: 4px;
                font-size: $size_72px;
                text-align: center;
                font-weight: 600;
            }
            button{
                margin-top: 40px;
            }
        }
        }
        &__image{
            position: absolute;
            z-index: -1;
        }
    }
    &__cta{
        display: grid;
        grid-template-columns: 454px 1fr;
        align-items: center;
        padding-block: 20px;
        @media(max-width:$br_tablet){
            grid-template-columns: 1fr;
        }
        p{
            font-size: $size_14px;
        }
        &__buttons{
            display: flex;
            justify-content: flex-end;
            gap: 12px;
        }
    }
}
</style>