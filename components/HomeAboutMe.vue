<template>
    <section class="about__section section">
        <div class="about__section__container container">
            <h2 class="small-title">
                {{ $t(about.title) }}
            </h2>
            <h3 class="large-title">
                {{ $t(about.subTitle) }}
            </h3>

            <div class="about__section__container__stacks">
                <strong>
                    {{ $t(about.tools) }}
                </strong>
                <AppStackSkills :stacks="stackLogos" :maxItems="7" />
            </div>

            <div class="about__section__container__columns">

                <div class="about__section__container__columns__avatar">
                    <figure class="about__section__container__columns__avatar__image">
                        <strong class="about__section__container__columns__avatar__image__tag">
                            <span>
                                <AppIcon IconName="fluent-emoji:trophy" />
                            </span>
                            10+ 
                            <small>
                                {{ locale == 'en' ? 'years of experience' : 'anos de experiência' }}
                            </small>
                        </strong>
                        <NuxtImg src="/images/crismartins_avatar.png" />
                        <strong class="about__section__container__columns__avatar__image__areas logic">
                            <span>
                                <AppIcon IconName="fluent:brain-circuit-20-regular" />
                                {{ locale == 'en' ? 'Logic' : 'Lógica' }}
                            </span>
                        </strong>
                        <strong class="about__section__container__columns__avatar__image__areas creativity">
                            <span>
                                <AppIcon IconName="fluent-emoji:sparkling-heart" />
                                {{ locale == 'en' ? 'Creativity' : 'Criatividade' }}
                            </span>
                        </strong>
                    </figure>
                </div>

                
                <div v-if="locale == 'en'" class="about__section__container__columns__text" >
                    <p>I'm half designer and half frontend developer, is that makes me a incomplete  professional? I don't think so, probably the opposite, because everything I do always need to be the best a can do. Not only working on a project but also for life... could be studying to learn a new skill or improve another, handling with people I try to give my full attention for what they're saying, even with my hobbies, like to play an instrument, this is my goal...</p>
                    <br/>
                    <p>
                        <strong>I'll do my best, trust me.</strong>
                    </p>
                </div>
                <div v-else class="about__section__container__columns__text" >
                    <p>I'm half designer and half frontend developer, is that makes me a incomplete  professional? I don't think so, probably the opposite, because everything I do always need to be the best a can do. Not only working on a project but also for life... could be studying to learn a new skill or improve another, handling with people I try to give my full attention for what they're saying, even with my hobbies, like to play an instrument, this is my goal...</p>
                    <br/>
                    <p>
                        <strong>I'll do my best, trust me.</strong>
                    </p>
                </div>
            </div>
            <div class="about__section__container__buttons">
                <AppButton class="primary" hasLink="/#contact">
                    {{ $t(about.cta1) }}
                </AppButton>
                <AppButton 
                    class="outline call" 
                    target="_new" 
                    :hasLink="$t(about.cta2Link)"
                >
                    <AppIcon IconName="ph:download-simple-bold" />
                    {{ $t(about.cta2) }}
                </AppButton>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, useI18n , reactive } from '#imports'
const { locale } = useI18n()
const stackLogos = ref([
    {logo: 'devicon:figma', name: 'Figma'},
    {logo: 'skill-icons:xd', name: 'Adobe Xd'},
    {logo: 'skill-icons:photoshop', name: 'Adobe Photoshop'},
    {logo: 'skill-icons:illustrator', name: 'Adobe Illustrator'},
    {logo: 'devicon:javascript', name: 'Javascript'},
    {logo: 'devicon:html5', name: 'HTML 5'},
    {logo: 'devicon:css3', name: 'CSS 3'},
    {logo: 'devicon:sass', name: 'Sass'},
    {logo: 'devicon:bootstrap', name: 'Bootstrap'},
    {logo: 'skill-icons:jquery', name: 'JQuery'},
    {logo: 'skill-icons:wordpress', name: 'Wordpress'},
    {logo: 'devicon:vuejs', name: 'Vue.JS'},
    {logo: 'logos:nuxt-icon', name: 'Nuxt.JS'}
    // {logo: 'devicon:react', name: 'React.JS'},
    // {logo: 'logos:blender', name: 'Blender'},
    // {logo: 'devicon:flutter', name: 'Flutter'}
])

const about = reactive({
    title: 'about.title',
    subTitle: 'about.subtitle',
    tools: 'about.tools',
    cta1: 'about.cta_1',
    cta2: 'about.cta_2',
    cta2Link: 'about.cta_2_link'
})
</script>

<style lang="scss" scoped>
.about__section{
    padding-block: 80px;
    &__container{
        max-width: 920px;
        display: grid;
        position: relative;
        .small-title, .large-title{
            text-align: center;
            max-width: 600px;
            margin: auto;
        }
        &__stacks{
            margin-block: 40px;
            text-transform: uppercase;
            font-size: $size_12px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
        &__columns{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-block: 40px;
            @media(max-width: $br_mobile){
                grid-template-columns: 1fr;
            }
            &__avatar{
                display: grid;
                place-items: center;
                margin-block: 20px;
                position: relative;
                @media(max-width: $br_mobile){
                    border: none;
                }
                &__image{
                    border-radius: 50%;
                    background-color: var(--secondary);
                    background: var(--secondary_gradient);
                    // overflow: hidden;
                    position: relative;
                    display: grid;
                    place-items: center;
                    transition: $transition_default;
                    animation: pulse 2s ease infinite;
                    &__tag{
                        position: absolute;
                        background-color: var(--text_color);
                        color: var(--bg_color);
                        font-weight: 500;
                        border-radius: 40px;
                        font-size: $size_20px;
                        padding: 8px 12px;
                        border: 2px solid var(--bg_color);
                        box-shadow: 4px 8px 12px 0 var(--text_color_transparent);
                        left: 58%;
                        top: -8px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        z-index: 1;
                        span{
                            position: absolute;
                            right: -20px;
                            top: -16px;
                            font-size: 40px;
                        }
                        small{
                            text-align: left;
                            font-size: $size_14px;
                            line-height: 12px;
                            font-weight: normal;
                            max-width: 70px;
                        }
                    }
                    &__areas{
                        position: absolute;
                        aspect-ratio: 1;
                        border-radius: 50%;
                        display: grid;
                        place-items: center;
                        font-size: $size_14px;
                        font-weight: 400;
                        color: var(--text_color);
                        opacity: 0.4;
                        transition: $transition_default;
                        z-index: 0;
                        border: 2px solid var(--text_color_transparent);
                        span{
                            display: flex;
                            gap: 4px;
                            flex-direction: column;
                            transition: $transition_default;
                        }
                        i{
                            font-size: $size_28px;
                        }
                        
                        &.logic{
                            background-color: var(--tertiary);
                            font-family: Courier;
                            width: 80%;
                        }
                        &.creativity{
                            background-color: var(--tertiary );
                            width: 60%;
                        }
                    }
                    &:hover{
                        .logic{
                            transform: translateX( -90%);
                            width: 110px;
                            opacity: 1;
                            background-color: var(--bg_color);
                            border-color: var(--secondary);
                            
                        }
                        .creativity{
                            width: 110px;
                            transform: translateX( 90%);
                            opacity: 1;
                            background-color: var(--bg_color);
                            border-color: var(--secondary);
                        }
                    }
                    @media(max-width: $br_mobile){
                        .logic{
                            transform: translateX( -90%);
                            width: 110px;
                            opacity: 1;
                            background-color: var(--bg_color);
                            border-color: var(--secondary);
                            
                        }
                        .creativity{
                            width: 110px;
                            transform: translateX( 90%);
                            opacity: 1;
                            background-color: var(--bg_color);
                            border-color: var(--secondary);
                        }
                    }
                    img{
                        position: relative;
                        display: block;
                        z-index: 2;
                        max-width: 240px;
                        transition: $transition_default;
                        border-radius: 50%;
                    }
                }
            }
            &__text{
                margin-block: 24px;
                position: relative;
                
                @media(max-width: $br_mobile){
                    text-align: center;
                }
                p{
                    font-size: $size_16px;
                    line-height: $size_32px;
                    margin: 0;

                }
            }
        }
        &__buttons{
            display: flex;
            justify-content: center;
            gap: 20px;
            padding-block: 40px;
            flex-wrap: wrap;
            @media(max-width: $br_mobile){
                justify-content: center;
                .button{
                    min-width: 90%;
                }
            }
        }
    }
}
</style>