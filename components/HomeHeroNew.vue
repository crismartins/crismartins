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
                <button class="hero__section__container__presentation__button">
                    <figure class="hero__section__container__presentation__button__avatar">
                        <NuxtImg 
                            src="/images/crismartins.png" 
                            width="80px"
                            format="webp"
                            quality="100"
                        />
                    </figure>
                    <span>
                        More about
                    </span>
                </button>
            </div>
            <div class="hero__section__container__text">
                <div class="hero__section__container__text__wrapper">
                    <p class="hero__section__container__text__wrapper__name small-title">
                        Cristopher Martins
                    </p>
                    <h1 class="hero__section__container__text__wrapper__title">
                        Designer. Developer.
                    </h1>
                    <AppButton class="green">
                        Portfolio
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
    {logo: 'logos:vue', title: 'Vue.JS'},
    // {logo: 'logos:flutter', title: 'Flutter'},
    {logo: 'logos:nuxt', title: 'Nuxt.JS'}
])
</script>
  
<style lang="scss" scoped>
.hero__section{
    min-height: 100vh;
    display: grid;
    place-items: center;
    &__container{
        padding-top: 0;
        flex-grow: 1;
        &__presentation{
            position: relative;
            display: grid;
            place-items: center;
            margin-bottom:80px;
            &__skills{
                position: absolute;
                display: grid;
                place-items: center;
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
                        width: 40px;
                        display: grid;
                        place-items: center;
                        border-radius: 100%;
                        background: var(--primary_gradient);
                        margin-left: -20px;
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
                background-color: black;
                border-radius: 100px;
                padding: 8px;
                border: 0;
                display: grid;
                grid-template-columns: 0fr;
                place-items: center;
                transition: $transition_default;
                &:hover{
                    grid-template-columns: 2fr;
                    figure{
                        transform: scale(1);
                    }
                }
                span{
                    overflow: hidden;
                    transition: $transition_default;
                    white-space: nowrap;
                    color: white;
                    display: none;
                }
                &__avatar{
                    flex-shrink: 0;
                    overflow: hidden;
                    width: 40px;
                    height: 40px;
                    border-radius: 100px;
                    background-color: var(--tertiary);
                    display: grid;
                    place-items: center;
                    margin: 0;
                    transform: scale(2);
                    transition: $transition_default;
                    img{
                        max-width: 100%;
                        max-height: 100%;
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