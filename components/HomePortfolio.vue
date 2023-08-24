<template>
    <section class="portfolio__section">
        <div class="portfolio__section__container">
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
                    :id="project.id"
                    :key="project.id"
                    class="portfolio__section__container__projects__item"
                    @touchstart="setDragStart" 
                    @touchend="swipeSlider"
                >
                    <div 
                        :class="{ active : selectedProj == project.id }"
                        class="portfolio__section__container__projects__item__contain" 
                    >
                        <header class="portfolio__section__container__projects__item__contain__header project-image">
                            <picture class="portfolio__section__container__projects__item__contain__header__picture">
                                <NuxtImg 
                                    :src="project.image"
                                    width="600px"
                                    height="600px"
                                    format="webp"
                                    quality="100"
                                />
                            </picture>
                            <div class="portfolio__section__container__projects__item__contain__header__info">
                                <ul class="portfolio__section__container__projects__item__contain__header__info__stacks">
                                    <li
                                        v-for="stack in project.stacks"
                                        :key="stack.name"
                                        class="portfolio__section__container__projects__item__contain__header__info__stacks__item"
                                    >
                                        <AppIcon :IconName="stack.logo" />
                                    </li>
                                </ul>
                                
                            </div>
                        </header>
                        <div class="portfolio__section__container__projects__item__contain__body project-titles">
                            <h3>
                                {{ project.name }}
                            </h3>
                            <p>
                                {{ project.type }}
                            </p>
                            <AppButton :isLink="project.name" class="outline small">
                                Details
                                <AppIcon IconName="ph:plus-bold" />
                            </AppButton>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="section">
                <div class="portfolio__section__container__projects__navigation container">
                    <ul class="portfolio__section__container__projects__navigation__arrows">
                        <li class="portfolio__section__container__projects__navigation__arrows__item left-arrow">
                            <button class="outline" @click="prevProj">
                                <AppIcon IconName="ph:arrow-left" />
                            </button>
                        </li>
                        <li class="portfolio__section__container__projects__navigation__arrows__item right-arrow">
                            <button class="outline" @click="nextProj">
                                <AppIcon IconName="ph:arrow-right" />
                            </button>
                        </li>
                    </ul>
                    <ul class="portfolio__section__container__projects__navigation__bullets">
                        <li 
                            v-for="project in projects" 
                            :key="project.id"
                            class="portfolio__section__container__projects__navigation__bullets__item"
                        >
                            <button :class="{ active : selectedProj == project.id }" @click="goToProj(project.id)" />
                        </li>
                    </ul>
                    <AppButton class="primary" hasLink="/portfolio">
                        View Portfolio
                        <AppIcon IconName="ph:caret-right-bold" />
                    </AppButton>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from '#imports'

const selectedProj = ref(1)

function prevProj(){
    if(selectedProj.value > 1 ){
        selectedProj.value = selectedProj.value - 1
        return goToProj(selectedProj.value)
    }else{
        selectedProj.value = projects.length
        return goToProj(selectedProj.value)
    }
} 
function nextProj(){
    if(selectedProj.value < projects.length ){
        selectedProj.value = selectedProj.value + 1
        return goToProj(selectedProj.value)
    }else{
        selectedProj.value = 1
        return goToProj(selectedProj.value)
    }
} 

function goToProj(project) {
    selectedProj.value = project
    const scrollTo =  document.getElementById(selectedProj.value)
    scrollTo.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
}

const dragStartPosition = ref(null)
function setDragStart(event) {
    dragStartPosition.value = event.changedTouches[0].clientX ?? event.clientX
}
function swipeSlider(event) {
    const touchPosition = parseInt(event.changedTouches[0].clientX) ?? parseInt(event.clientX)
    if(Math.abs(touchPosition - dragStartPosition.value) > 20) {
        if(touchPosition > dragStartPosition.value) {
            prevProj()
            return
        }
        nextProj()
    }   
}

const projects = reactive([
    {
        id: 1,
        image: '/images/portfolio/ahoy_cover.png', 
        name: 'Ahoy', 
        type: 'UI/UX Design for Recruitment Application', 
        description: 'description',
        stacks: [
            {logo: 'logos:adobe-xd', name: 'Adobe Xd'},
            {logo: 'logos:adobe-illustrator', name: 'Adobe Illustrator'}
        ]
    },
    {
        id: 2,
        image: '/images/portfolio/bon_cover.png', 
        name: 'Balance of Nature', 
        type: 'Homepage Development', 
        description: 'description',
        stacks: [
            {logo: 'logos:html-5', name: 'HTML 5'},
            {logo: 'logos:css-3', name: 'CSS 3'},
            {logo: 'logos:javascript', name: 'Javascript'},
            {logo: 'logos:vue', name: 'Vue.js'},
            {logo: 'logos:nuxt', name: 'Nuxt.js'}
        ]
    },
    {
        id: 3,
        image: '/images/portfolio/onr_app_cover.png', 
        name: 'Onr', 
        type: 'Mobile App Redesign', 
        description: 'description',
        stacks: [
            {logo: 'logos:figma', name: 'Figma'}
        ]
    },
    {
        id: 4,
        image: '/images/portfolio/planing_pocker_cover.png', 
        name: 'Planing Poker Online Room', 
        type: 'Logo, UI/UX Design for a Sprint Planning App', 
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
        image: '/images/portfolio/curitiba_app_cover.png', 
        name: 'Curitiba App', 
        type: 'UI/UX Design for City Hall Services App', 
        description: 'description',
        stacks: [
            {logo: 'logos:adobe-xd', name: 'Adobe Xd'},
            {logo: 'logos:adobe-illustrator', name: 'Adobe Illustrator'}
        ]
    },
    {
        id: 6,
        image: '/images/portfolio/ebanx_lp_cover.png', 
        name: 'Ebanx', 
        type: 'Webflow building page for a Event Landing Page', 
        description: 'description',
        stacks: [
            {logo: 'logos:webflow', name: 'Webflow'}
        ]
    },
    {
        id: 7,
        image: '/images/portfolio/alegra_website_cover.png', 
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
        id: 8,
        image: '/images/portfolio/mago_jardineiro_cover.png', 
        name: 'Mago Jardineiro', 
        type: 'One Page Website Design', 
        description: 'description',
        stacks: [
            {logo: 'logos:adobe-xd', name: 'Adobe Xd'},
            {logo: 'logos:adobe-photoshop', name: 'Adobe Photoshop'},
            {logo: 'logos:adobe-illustrator', name: 'Adobe Illustrator'}
        ]
    }
])

</script>

<style lang="scss" scoped>
.portfolio__section{
    padding-block: 0;
    margin-top: -12vh;
    margin-bottom: 80px;
    @media (max-width: $br_mobile) {
        margin-top: 0;
    }
    &__container{
        width: 100%;
        gap: 40px;
        position: relative;
        &__header{
            position: absolute;
            z-index: 2;
            padding: 0 0 40px 20px;
            height: 100%;
            @media(max-width:$br_mobile){
                padding: 0 0 40px 0;
                position: relative;
                text-align: center;
            }
            h2{
                writing-mode:vertical-rl;
                transform: rotate(-180deg);
                // position: sticky;
                // top: 140px;
                @media(max-width:$br_mobile){
                    writing-mode:horizontal-tb;
                    transform: rotate(0);
                }
            }
            p{
                font-size: 20px;
            }
        }
        &__projects{
            padding-inline: 100px;
            overflow: auto;
            display: flex;
            justify-content: flex-start;
            gap: 8px;
            position: relative;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            &::-webkit-scrollbar {
                display: none;
            }
            @media(max-width:$br_mobile){
                margin: 0;
                padding-inline: calc(3% + 20px);
            }
            &__item{
                flex-shrink: 0;
                position: relative;
                margin-inline: -40px;
                max-width: 600px;
                @media(max-width:$br_mobile){
                    max-width: 98%;
                    margin-inline: -12px;
                }
                &__contain{
                    display: block;
                    transform: scale(0.84);
                    overflow: hidden;
                    color: var(--text_color);
                    position: relative;
                    transition: $transition_default;
                    z-index: 1;
                    &__header{
                        position: relative;
                        overflow: hidden;
                        border-radius: 32px;
                        &__picture{
                            overflow: hidden;
                            border-radius: 32px;
                            display: block;
                            width: 100%;
                            aspect-ratio: 1;
                            img{
                                object-fit: cover;
                                max-width: 100%;
                                max-height: 100%;
                                transition: $transition_default;
                            }
                        }
                        &__info{
                            display: flex;
                            position: absolute;
                            bottom:0;
                            background: var(--bg_color_smooth);
                            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 20%, var(--bg_color_transparent) 40%, var(--bg_color_smooth) 100%);
                            width: 100%;
                            align-items: center;
                            justify-content: space-between;
                            padding: 20px;
                            &__stacks{
                                display: flex;
                                gap: 12px;
                                z-index: 2;
                                &__item{
                                    font-size: 20px;
                                }
                            }
                        }
                    }
                    &__body{
                        opacity: 0;
                        position: relative;
                        width: 100%;
                        top: -40px;
                        transition: $transition_default;
                        h3{
                            font-size: $size_24px ;
                            font-weight: 400;
                            margin-block: 20px 8px;
                        }
                        p{
                            font-size: $size_16px;
                            color: var(--text_color_smooth);
                        }
                        .button{
                            margin-block: 24px;

                        }
                    }
                    &:hover{
                        z-index: 4;
                        transform: scale(0.84) translateY(5vh);
                        .project-titles{
                            opacity: 1;
                            top: 0;
                        }
                    }
                    &.active{
                        transform: scale(1);
                        z-index: 2;
                        .project-titles{
                            opacity: 1;
                            top: 0;
                        }
    
                    }
                }
            }
            &__navigation{
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 24px;
                @media(max-width: $br_mobile){
                    flex-direction: column;
                    padding-inline: 20px;
                    gap: 40px;
                }
                &__arrows{
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                    width: 100%;
                    position: absolute;
                    top: 28vh;
                    left: 0;
                    padding-inline: 20px;
                    &__item{
                        height: 100%;
                        top: 0;
                        display: grid;
                        place-items: center;
                        button{
                            color: var(--text_color_smooth);
                            border: none;
                            padding: 12px 0;
                            font-size: $size_32px;
                            background-color: var(--bg_color_transparent);
                            aspect-ratio: 1;
                            border-radius: 50%;
                            padding: 8px;
                            transition: $transition_default;
                            &:hover{
                                color: var(--bg_color);
                                transform: scale(1.2);
                                background-color: var(--text_color_smooth);
                            }
                        }
                        &.right-arrow{
                            right: 0;
                            z-index: 5;
                        }
                        &.left-arrow{
                            left: 0;
                            z-index: 5;
                        }
                    }
                }
                &__bullets{
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    &__item{
                        button{
                            background-color: var(--text_color_transparent);
                            border: 0;
                            border-radius: 40px;
                            width: 8px;
                            height: 8px;
                            padding: 0;
                            transition: $transition_default;
                            &:hover{
                                background-color: var(--text_color_smooth);
                            }
                            &.active{
                                background-color: var(--secondary);
                                width: 48px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>