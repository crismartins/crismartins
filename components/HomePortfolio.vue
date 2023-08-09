<template>
    <section class="portfolio__section">
        <div class="portfolio__section__container section container">
            <header class="portfolio__section__container__header">
                <h2 class="small-title">
                    Portfolio
                </h2>
                <!-- <p>
                    Welcome to the Portfolio area... here you'll find some selected works that I'm proud of have the opportunity to work in, hope you like.
                </p> -->
            </header>
            <ul class="portfolio__section__container__projects">
                <li 
                    v-for="project in projects" 
                    :key="project.id"
                    class="portfolio__section__container__projects__item"
                >
                    <header class="portfolio__section__container__projects__item__header">
                        <picture class="portfolio__section__container__projects__item__header__picture">
                            <img 
                                :src="project.image"
                            />
                        </picture>
                        <div class="portfolio__section__container__projects__item__header__stacks">
                            <HomeStackSkills :stacks="project.stacks" maxItems="4" />
                        </div>
                    </header>
                    <h3>
                        {{ project.name }}
                    </h3>
                    <p>
                        {{ project.type }}
                    </p>
                </li>
                
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive } from '#imports'
const projects = reactive([
    {
        id: 1,
        image: '/images/portfolio/curitiba_app.png', 
        name: 'Ahoy', 
        type: 'UI/UX Design for Recruitment App', 
        description: 'description',
        stacks: [
            {logo: 'logos:adobe-xd', name: 'Adobe Xd'},
            {logo: 'logos:adobe-illustrator', name: 'Adobe Illustrator'}
        ]
    },
    {
        id: 2,
        image: '/images/portfolio/curitiba_app.png', 
        name: 'Curitiba App', 
        type: 'UI/UX Design for City Hall Services App', 
        description: 'description',
        stacks: [
            {logo: 'logos:adobe-xd', name: 'Adobe Xd'},
            {logo: 'logos:adobe-illustrator', name: 'Adobe Illustrator'}
        ]
    },
    {
        id: 3,
        image: '/images/portfolio/curitiba_app.png', 
        name: 'Hourglass', 
        type: 'UI/UX and Frontend development for Time Management System', 
        description: 'description',
        stacks: [
            {logo: 'logos:figma', name: 'Figma'},
            {logo: 'logos:javascript', name: 'Javascript'},
            {logo: 'logos:html-5', name: 'HTML 5'},
            {logo: 'logos:css-3', name: 'CSS 3'},
            {logo: 'logos:vue', name: 'Vue.js'}
        ]
    },
    {
        id: 4,
        image: '/images/portfolio/curitiba_app.png', 
        name: 'Termo 2.0', 
        type: 'UI/UX Design for a "find the word" web placed game', 
        description: 'description',
        stacks: [
            {logo: 'logos:figma', name: 'Figma'},
            {logo: 'logos:javascript', name: 'Javascript'},
            {logo: 'logos:html-5', name: 'HTML 5'},
            {logo: 'logos:css-3', name: 'CSS 3'},
            {logo: 'logos:vue', name: 'Vue.js'}
        ]
    },
    {
        id: 5,
        image: '/images/portfolio/curitiba_app.png', 
        name: 'Planning Poker Online Room', 
        type: 'Logo, UI/UX Design for a Planning Pocker App', 
        description: 'description',
        stacks: [
            {logo: 'logos:figma', name: 'Figma'},
            {logo: 'logos:javascript', name: 'Javascript'},
            {logo: 'logos:html-5', name: 'HTML 5'},
            {logo: 'logos:css-3', name: 'CSS 3'},
            {logo: 'logos:vue', name: 'Vue.js'}
        ]
    },
    {
        id: 6,
        image: '/images/portfolio/curitiba_app.png', 
        name: 'Alegrafoods', 
        type: 'Frontend development for a Food Company', 
        description: 'description',
        stacks: [
            {logo: 'logos:wordpress', name: 'Wordpress'},
            {logo: 'logos:jquery', name: 'JQuery'},
            {logo: 'logos:html-5', name: 'HTML 5'},
            {logo: 'logos:css-3', name: 'CSS 3'}
        ]
    },
    {
        id: 7,
        image: '/images/portfolio/curitiba_app.png', 
        name: 'Ebanx', 
        type: 'Webflow building page for a Event Landing Page', 
        description: 'description',
        stacks: [
            {logo: 'logos:webflow', name: 'Webflow'}
        ]
    }
])

</script>

<style lang="scss" scoped>
.portfolio__section{
    padding-block: 0;
    margin-top: -10%;
    overflow: auto;
    &__container{
        // max-width: 1000px;
        &__header{
            h2{
                // writing-mode:vertical-rl;
                // transform: rotate(-180deg);
                // text-orientation: upright;
            }
            p{
                font-size: 20px;
            }
        }
        &__projects{
            // padding: 24px;
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 8px;
            max-width: 1000px;
            &__item{
                // max-width: 432px;
                // flex-shrink: 0;
                &__header{
                    position: relative;
                    &__picture{
                        display: block;
                        max-height: 440px;
                        border-radius: 24px;
                        overflow: hidden;
                        img{
                            object-fit: cover;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    &__stacks{
                        position: absolute;
                        padding-inline:20px;
                        top: calc(100% - 32px);
                    }
                }
                h3{
                    font-size: $size_28px ;
                    font-weight: 300;
                    margin-block: 44px 12px;
                }
                p{
                    font-size: $size_16px;
                }
            }
        }
    }
}
</style>