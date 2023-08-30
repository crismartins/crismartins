<template>
    <section class="about__section section">
        <div class="about__section__container container">
            <h2 class="small-title">
                About
            </h2>
            <h3 class="large-title">
                UX/UI Designer and Frontend Developer Based in Brazil
            </h3>

            <small class="about__section__container__stacks-title">
                Current working with these tools...
            </small>
            <AppStackSkills :stacks="stackLogos" :maxItems="7" />

            <div class="about__section__container__columns">

                <div class="about__section__container__columns__avatar">
                    <figure class="about__section__container__columns__avatar__image">
                        <NuxtImg width="120px" src="/images/cristoon.svg" />
                        <strong>
                            <span>
                                ✨ 
                            </span>
                            10+ 
                            <small>
                                years of experience
                            </small>
                        </strong>
                    </figure>
                </div>

                
                <div class="about__section__container__columns__text">
                    <p>
                        I'm half designer and half frontend developer, is that makes me a incomplete  professional? I don't think so, probably the opposite, because everything I do always need to be the best a can do. Not only working on a project but also for life... could be studying to learn a new skill or improve another, handling with people I try to give my full attention for what they're saying, even with my hobbies, like to play an instrument, this is my goal...
                    </p>
                    <br/>
                    <p>
                        <strong>
                            I'll do my best, trust me.
                        </strong>
                    </p>
                </div>
            </div>
            <div class="about__section__container__buttons">
                <AppButton class="primary">
                    See more
                </AppButton>
                <AppButton class="outline call" hasLink="/#portfolio">
                    <AppIcon IconName="ph:download-simple-bold" /> Download CV
                </AppButton>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from '#imports'
const stackLogos = ref([
    {logo: 'logos:figma', name: 'Figma'},
    {logo: 'logos:adobe-xd', name: 'Adobe Xd'},
    {logo: 'logos:adobe-photoshop', name: 'Adobe Photoshop'},
    {logo: 'logos:adobe-illustrator', name: 'Adobe Illustrator'},
    {logo: 'logos:javascript', name: 'Javascript'},
    {logo: 'logos:html-5', name: 'HTML 5'},
    {logo: 'logos:css-3', name: 'CSS 3'},
    {logo: 'logos:sass', name: 'Sass'},
    {logo: 'logos:vue', name: 'Vue.JS'},
    {logo: 'logos:react', name: 'React.JS'},
    {logo: 'logos:flutter', name: 'Flutter'},
    {logo: 'logos:nuxt', name: 'Nuxt.JS'}
])
</script>

<style lang="scss" scoped>
.about__section{
    padding-block: 80px;
    &__container{
        max-width: 920px;
        display: grid;
        .small-title, .large-title{
            text-align: center;
            max-width: 600px;
            margin: auto;
        }
        &__stacks-title{
            margin-block: 40px;
            text-transform: uppercase;
            font-size: $size_12px;
        text-align: center;
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
                border-right: 2px solid var(--text_color_smooth);
                border-radius: 0 0 40px 0;
                @media(max-width: $br_mobile){
                    border: none;
                }
                &__image{
                    position: relative;
                    strong{
                        position: absolute;
                        background-color: var(--text_color);
                        color: var(--bg_color);
                        font-weight: 500;
                        border-radius: 40px;
                        font-size: $size_20px;
                        padding: 8px 12px;
                        border: 2px solid var(--bg_color);
                        box-shadow: 4px 8px 12px 0 var(--text_color_transparent);
                        left: 80%;
                        top: 10%;
                        display: flex;
                        align-items: center;
                        gap: 4px;
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
                        }
                    }
                }
            }
            &__text{
                margin-block: 24px;
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