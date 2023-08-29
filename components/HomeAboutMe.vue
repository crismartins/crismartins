<template>
    <section class="about__section section">
        <div class="about__section__container container">
            <h2 class="small-title">
                About
            </h2>
            <h3 class="large-title">
                UX/UI Designer and Frontend Developer Based in Brazil
            </h3>

            <!-- <HomeAboutMeDetails /> -->

            <!-- <AppStackSkills :stacks="stackLogos" :maxItems="7" /> -->

            <div class="about__section__container__text">
                <p>
                    I'm half designer and half frontend developer, is that makes me a incomplete  professional? I don't think so, probably the opposite, because everything I do always need to be the best a can do. Not only working on a project but also for life... could be studying to learn a new skill or improve another, handling with people I try to give my full attention for what they're saying, even with my hobbies, like to play an instrument, this is my goal...
                </p>
                <p>
                    <strong>
                        I'll do my best, trust me.
                    </strong>
                </p>
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
        &__text{
            padding-block: 24px;
            text-align: center;
            p{
                font-size: $size_20px;
                line-height: $size_32px;
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