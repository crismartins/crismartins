<template>
    <section class="portfolio__section">
        <div class="portfolio__section__container">
            <header class="portfolio__section__container__header">
                <h2 class="small-title">
                    {{ $t(portfolio.title) }}
                </h2>
            </header>
            <ul class="portfolio__section__container__projects">
                <li 
                    v-for="(project, index) in projects" 
                    :id="project.id"
                    :key="project.id"
                    class="portfolio__section__container__projects__item"
                    @touchstart="setDragStart" 
                    @touchend="swipeSlider"
                >
                    <div 
                        :class="{ active : selectedProj == project.id }"
                        class="portfolio__section__container__projects__item__contain" 
                        @click="goToProj(project.id)"
                    >
                        <header class="portfolio__section__container__projects__item__contain__header project-image">
                            <picture class="portfolio__section__container__projects__item__contain__header__picture" @click="viewDetails(index)">
                                <NuxtImg 
                                    :alt="project.name"
                                    :src="project.image"
                                    width="400px"
                                    height="400px"
                                    format="webp"
                                    quality="100"
                                    densities="x1 x2"
                                    preload
                                />
                            </picture>
                            <div class="portfolio__section__container__projects__item__contain__header__info">
                                
                                <AppStackSkills class="portfolio__section__container__projects__item__contain__header__info__stacks" :stacks="project.stacks" />

                            </div>
                        </header>
                        
                        <div class="portfolio__section__container__projects__item__contain__body project-titles">
                            <h3 class="portfolio__section__container__projects__item__contain__body__title">
                                {{ project.name }}
                            </h3>
                            <h4 class="portfolio__section__container__projects__item__contain__body__subtitle">
                                {{ project.client }}
                            </h4>
                        </div>
                        <footer class="portfolio__section__container__projects__item__contain__footer project-titles">
                            <ul class="portfolio__section__container__projects__item__contain__footer__tags">
                                <li 
                                    v-for="tag in project.tags" 
                                    :key="tag" 
                                    class="portfolio__section__container__projects__item__contain__footer__tags__item"
                                >
                                    {{ tag }}
                                </li>
                            </ul>
                            
                        </footer>
                    </div>
                </li>
            </ul>
            <div class="section">
                <div class="portfolio__section__container__projects__navigation container">
                    <ul class="portfolio__section__container__projects__navigation__arrows">
                        <li class="portfolio__section__container__projects__navigation__arrows__item left-arrow">
                            <button 
                                aria-label="Previous"
                                class="outline" 
                                @click="prevProj"
                            >
                                <AppIcon IconName="ph:arrow-left" />
                            </button>
                        </li>
                        <li class="portfolio__section__container__projects__navigation__arrows__item right-arrow">
                            <button 
                                aria-label="Next"
                                class="outline" 
                                @click="nextProj"
                            >
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
                            <button 
                                :aria-label="project.name"
                                :class="{ active : selectedProj == project.id }" 
                                @click="goToProj(project.id)" 
                            >
                                <span class="visually-hidden">
                                    {{ project.name }}
                                </span>
                            </button>
                        </li>
                    </ul>
                    <AppButton 
                        :aria-label="$t(portfolio.button)"
                        class="primary" 
                        hasLink="/#services"
                    >
                        {{ $t(portfolio.button) }}
                        <AppIcon IconName="ph:caret-right-bold" />
                    </AppButton>
                </div>
            </div>

            <HomeClients />

            <HomePortfolioProjectModal
                :projectDetails="openedDetails" 
                :openedModal="showModal"
                @close:modal="closeModal"
            />

        </div>
    </section>
</template>

<script setup>
import { ref } from '#imports'
const props = defineProps({
    projects: {
        type: Object,
        required: true
    }
})

const { projects } = props

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
    const scrollTo =  document.getElementById(project)
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

const portfolio = {
    title: 'portfolio.title',
    button: 'portfolio.button'
}

const showModal = ref(false)

const openedDetails = ref(projects)

function viewDetails(index){
    openedDetails.value = projects[index]
    showModal.value = true
}

function closeModal(){
    showModal.value = false
}

</script>

<style lang="scss" scoped>
.portfolio__section{
    padding-block: 0;
    // margin-top: -12vh;
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
            z-index: 4;
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
                margin-inline: -28px;
                max-width: 400px;
                @media(max-width:$br_mobile){
                    max-width: 98%;
                    margin-inline: -12px;
                }
                &__contain{
                    display: block;
                    transform: scale(0.84);
                    color: var(--text_color);
                    position: relative;
                    transition: $transition_default;
                    z-index: 1;
                    &__header{
                        position: relative;
                        &__picture{
                            cursor: pointer;
                            overflow: hidden;
                            border-radius: 32px;
                            display: grid;
                            place-items: center;
                            width: 100%;
                            aspect-ratio: 1;
                            box-shadow: 0 12px 20px 0px var(--bg_color);
                            position: relative;
                            &:before{
                                content: '';
                                position: absolute;
                                z-index: 1;
                                width: 100%;
                                height: 40%;
                                bottom: 0px;
                                background: var(--text_color_smooth);
                                background: linear-gradient(180deg, rgba(255, 255, 255, 0) 20%, var(--text_color_transparent) 40%, var(--text_color) 100%);
                            }
                            img{
                                object-fit: cover;
                                max-width: 100%;
                                max-height: 100%;
                                transition: $transition_default;
                                display: block;
                            }
                        }
                        &__info{
                            display: flex;
                            position: absolute;
                            bottom:0;
                            width: 100%;
                            align-items: center;
                            justify-content: space-between;
                            padding: 20px;
                            z-index: 1;
                            &__stacks{
                                justify-content: flex-start;
                            }
                        }
                    }
                    &__body{
                        opacity: 0;
                        position: relative;
                        width: 100%;
                        top: -40px;
                        transition: $transition_default;
                        &__title{
                            font-size: $size_20px;
                            font-weight: 400;
                            margin-block: 20px 8px;
                        }
                        &__subtitle{
                            font-size: $size_14px;
                            margin:0;
                            padding-block: 4px;
                            font-weight: normal;
                            color: var(--secondary);
                            text-transform: uppercase;
                        }
                        .button{
                            margin-block: 24px;

                        }
                    }
                    &__footer{
                        opacity: 0;
                        position: relative;
                        width: 100%;
                        top: -40px;
                        transition: $transition_default;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 20px;
                        position: relative;
                        &__tags{
                            margin-block: 20px;
                            display: flex;
                            gap: 8px;
                            flex-wrap: wrap;
                            &__item{
                                background-color: var(--text_color_transparent);
                                color: var(--text_color_smooth);
                                border-radius: 8px;
                                padding: 4px 8px;
                                font-size: $size_12px;
                                font-weight: 400;
                            }
                        }
                    }
                    &:hover{
                        z-index: 4;
                        transform: scale(0.84) translateY(5vh);
                        @media(max-width:$br_mobile){
                            z-index: 1;
                        }
                        picture{
                            box-shadow: 0 80px 80px 80px var(--bg_color);
                        }
                        .project-titles{
                            opacity: 1;
                            top: 0;
                        }
                    }
                    &.active{
                        transform: scale(1);
                        z-index: 2;
                        picture{
                            box-shadow: 0 40px 80px 80px var(--bg_color);
                        }
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
                margin-block: 40px;
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