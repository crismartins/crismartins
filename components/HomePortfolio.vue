<template>
    <section class="portfolio__section section">
        <div class="portfolio__section__container container">
            <header class="portfolio__section__container__header">
                <h2 class="small-title">
                    Lastest Works
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
                    <header class="portfolio__section__container__projects__item__header project-image">
                        <picture class="portfolio__section__container__projects__item__header__picture">
                            <img 
                                :src="project.image"
                            />
                        </picture>
                    </header>
                    <div class="portfolio__section__container__projects__item__body project-titles">
                        <h3>
                            {{ project.name }}
                        </h3>
                        <p>
                            {{ project.type }}
                        </p>
                    </div>
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
    }
    //,
    // {
    //     id: 4,
    //     image: '/images/portfolio/curitiba_app.png', 
    //     name: 'Termo 2.0', 
    //     type: 'UI/UX Design for a "find the word" web placed game', 
    //     description: 'description',
    //     stacks: [
    //         {logo: 'logos:figma', name: 'Figma'},
    //         {logo: 'logos:javascript', name: 'Javascript'},
    //         {logo: 'logos:html-5', name: 'HTML 5'},
    //         {logo: 'logos:css-3', name: 'CSS 3'},
    //         {logo: 'logos:vue', name: 'Vue.js'}
    //     ]
    // },
    // {
    //     id: 5,
    //     image: '/images/portfolio/curitiba_app.png', 
    //     name: 'Planning Poker Online Room', 
    //     type: 'Logo, UI/UX Design for a Planning Pocker App', 
    //     description: 'description',
    //     stacks: [
    //         {logo: 'logos:figma', name: 'Figma'},
    //         {logo: 'logos:javascript', name: 'Javascript'},
    //         {logo: 'logos:html-5', name: 'HTML 5'},
    //         {logo: 'logos:css-3', name: 'CSS 3'},
    //         {logo: 'logos:vue', name: 'Vue.js'}
    //     ]
    // },
    // {
    //     id: 6,
    //     image: '/images/portfolio/curitiba_app.png', 
    //     name: 'Alegrafoods', 
    //     type: 'Frontend development for a Food Company', 
    //     description: 'description',
    //     stacks: [
    //         {logo: 'logos:wordpress', name: 'Wordpress'},
    //         {logo: 'logos:jquery', name: 'JQuery'},
    //         {logo: 'logos:html-5', name: 'HTML 5'},
    //         {logo: 'logos:css-3', name: 'CSS 3'}
    //     ]
    // },
    // {
    //     id: 7,
    //     image: '/images/portfolio/curitiba_app.png', 
    //     name: 'Ebanx', 
    //     type: 'Webflow building page for a Event Landing Page', 
    //     description: 'description',
    //     stacks: [
    //         {logo: 'logos:webflow', name: 'Webflow'}
    //     ]
    // }
])

</script>

<style lang="scss" scoped>
.portfolio__section{
    padding-block: 0;
    margin-top: -4%;
    margin-bottom: 80px;
    &__container{
        width: 100%;
        display: flex;
        gap: 40px;
        &__header{
            h2{
                writing-mode:vertical-rl;
                transform: rotate(-180deg);
                // text-orientation: upright;
            }
            p{
                font-size: 20px;
            }
        }
        &__projects{
            flex-grow: 1;
            // padding: 24px;
            display: flex;
            gap: 8px;
            &__item{
                // max-width: 432px;
                // flex-shrink: 0;
                position: relative;
                &:hover{
                    picture{
                        transform: scale(1.2);
                    }
                    .project-titles{
                        opacity: 1;
                        bottom: 0;
                    }
                }
                &__header{
                    position: relative;
                    &__picture{
                        display: block;
                        max-height: 440px;
                        border-radius: 24px;
                        overflow: hidden;
                        background-color: var(--tertiary);
                        transition: $transition_default;
                        img{
                            object-fit: cover;
                            width: 100%;
                            height: 100%;
                            opacity: 0;
                        }
                    }
                    &__stacks{
                        position: absolute;
                        padding:20px;
                        top: 0;
                    }
                }
                &__body{
                    opacity: 0;
                    position: absolute;
                    width: 100%;
                    text-align: center;
                    bottom: 40px;
                    transition: $transition_default;
                    h3{
                        font-size: $size_28px ;
                        font-weight: bold;
                        margin-block: 44px 12px;
                    }
                    p{
                        font-size: $size_16px;
                    }
                }
            }
        }
    }
}
</style>