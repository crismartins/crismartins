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
                    :class="{ active : selectedProj == project.id }"
                    @touchstart="setDragStart" 
                    @touchend="swipeSlider"
                >
                    <NuxtLink class="portfolio__section__container__projects__item__contain" :to="project.name">
                        <header class="portfolio__section__container__projects__item__contain__header project-image">
                            <ul class="portfolio__section__container__projects__item__contain__header__stacks">
                                <li
                                    v-for="stack in project.stacks"
                                    :key="stack.name"
                                    class="portfolio__section__container__projects__item__contain__header__stacks__item"
                                >
                                    <AppIcon :IconName="stack.logo" />
                                </li>
                            </ul>
                            <picture class="portfolio__section__container__projects__item__contain__header__picture">
                                <img 
                                    :src="project.image"
                                />
                            </picture>
                        </header>
                        <div class="portfolio__section__container__projects__item__contain__body project-titles">
                            <h3>
                                {{ project.name }}
                            </h3>
                            <p>
                                {{ project.type }}
                            </p>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
            
            <div class="portfolio__section__container__projects__navigation section">
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
                <AppButton class="outline" hasLink="/portfolio">
                    <AppIcon IconName="ph:caret-right-bold" />
                    View portfolio
                </AppButton>
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
    }
} 
function nextProj(){
    if(selectedProj.value < projects.length ){
        selectedProj.value = selectedProj.value + 1
        return goToProj(selectedProj.value)
    }
} 

function goToProj(project) {
    selectedProj.value = project
    const scrollTo =  document.getElementById(selectedProj.value)
    scrollTo.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
    // console.log(selectedProj)
    // return selectedProj.scrollIntoView()
    // this.$refs[selectedProj.value].scrollIntoView({ behavior: 'smooth' })
    // scrollTo(selectedProj.value)
}

const dragStartPosition = ref(null)
function setDragStart(event) {
    dragStartPosition.value = event.changedTouches[0].clientX 
    //?? event.clientX
}
function swipeSlider(event) {
    const touchPosition = parseInt(event.changedTouches[0].clientX) 
    //?? parseInt(event.clientX)
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
    // margin-top: -4%;
    margin-bottom: 80px;
    &__container{
        width: 100%;
        gap: 40px;
        position: relative;
        &__header{
            position: absolute;
            z-index: 999;
            padding-left: 20px;
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
            margin-left: 100px;
            padding-inline: 40px;
            overflow: auto;
            display: flex;
            gap: 20px;
            position: relative;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            &::-webkit-scrollbar {
                display: none;
            }
            &__item{
                max-width: 380px;
                flex-shrink: 0;
                position: relative;
                &:hover{
                    picture{
                        img{
                            transform: scale(1.2);
                        }
                    }
                    .project-titles{
                        opacity: 1;
                        top: 0;
                    }
                }
                &.active{
                    .project-titles{
                        opacity: 1;
                        top: 0;
                    }

                }
                &__contain{
                    color: var(--text_color);
                    &__header{
                        position: relative;
                        &__picture{
                            display: block;
                            max-height: 440px;
                            border-radius: 24px;
                            overflow: hidden;
                            background-color: var(--tertiary);
                            img{
                                object-fit: cover;
                                min-width: 100%;
                                min-height: 100%;
                                transition: $transition_default;
                            }
                        }
                        &__stacks{
                            width: 100%;
                            background: var(--bg_color_smooth);
                            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 20%, var(--bg_color_transparent) 40%, var(--bg_color_smooth) 100%);
                            position: absolute;
                            padding:20px;
                            bottom:0;
                            display: flex;
                            align-items: flex-end;
                            gap: 12px;
                            height: 100%;
                            z-index: 999;
                            &__item{
                                font-size: 20px;
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
                            font-size: $size_28px ;
                            font-weight: 400;
                            margin-block: 20px 8px;
                        }
                        p{
                            font-size: $size_16px;
                            color: var(--text_color_smooth);
                        }
                    }
                }
            }
            &__navigation{
                display: flex;
                justify-content: space-between;
                align-items: center;
                &__arrows{
                    display: flex;
                    justify-content: space-between;
                    &__item{
                        height: 100%;
                        top: 0;
                        display: grid;
                        place-items: center;
                        // position: absolute;
                        button{
                            background-color: transparent;
                            color: var(--text_color);
                            border: none;
                        }
                        &.right-arrow{
                            right: 0;
                        }
                        &.left-arrow{
                            left: 0;
                        }
                    }
                }
                &__bullets{
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-grow: 1;
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