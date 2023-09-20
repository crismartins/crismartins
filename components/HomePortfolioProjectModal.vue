<template>
    <AppModal 
        class="modal__project"
        :openedModal="openedModal" 
        @close:modal="closeModal" 
    >
        
        <header class="modal__project__header">
            <h2 class="modal__project__header__title">{{ projectDetails.name }}</h2>
            <h3 class="modal__project__header__subtitle">
                {{ projectDetails.client }}
            </h3>
            <ul class="modal__project__header__tags">
                <li 
                    v-for="tag in projectDetails.tags" 
                    :key="tag" 
                    class="modal__project__header__tags__item"
                >
                    {{ tag }}
                </li>
            </ul>
            
        </header>
        <div class="modal__project__body">
            <ul class="modal__project__body__gallery">
                <li 
                    v-for="item in projectDetails.gallery" 
                    :key="item.title" 
                    class="modal__project__body__gallery__item"
                >
                    <figure>
                        <NuxtImg 
                            :src="item.image" 
                            :alt="item.title" 
                            sizes="100vw sm:80vw md:600px"
                            format="webp"
                            densities="x1 x2"
                            quality="100"
                            placeholder
                        />
                        <figcaption>
                            {{ item.title }}
                        </figcaption>
                    </figure>
                </li>
            </ul>
            <div class="modal__project__body__description" v-html="projectDetails.description" />
        </div>
        <footer class="modal__project__footer">
            <small>
                Stacks:
                <AppStackSkills :stacks="projectDetails.stacks" />
            </small>
            <AppButton 
                v-if="projectDetails.live_url" 
                aria-label="View live"
                class="outline small" 
                :hasLink="projectDetails.live_url" 
                target="_blank"
            >
                View live
                <AppIcon IconName="ph:arrow-up-right-bold" />
            </AppButton>
        </footer>
    </AppModal>
</template>

<script setup>
import { toRefs } from '#imports'
const props = defineProps({
    projectDetails: {
        type: Object,
        required: true
    },
    openedModal: {
        type: Boolean,
        default: false
    }
})

const { projectDetails, openedModal } = toRefs(props)

const emits = defineEmits(['close:modal'])
function closeModal(){
    emits('close:modal')
}
</script>

<style lang="scss" scoped>
.modal__project{
    &__header{
        margin: 0 40px 0 0;
        padding: 20px;
        &__title{
            font-size: $size_20px;
            font-weight: 300;
            margin-block: 20px 8px;
        }
        &__subtitle{
            font-size: $size_14px;
            margin: 0;
            padding-block: 4px;
            font-weight: normal;
            color: var(--secondary);
            text-transform: uppercase;
        }
        &__tags{
            margin-block: 20px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            &__item{
                background-color: var(--text_color_transparent);
                color: var(--text_color);
                border-radius: 8px;
                padding: 4px 8px;
                font-size: $size_12px;
                font-weight: 400;
            }
        }
        
    }
    &__body{
        &__description{
            font-weight: normal;
            font-size: $size_16px;
            // text-align: center;
            padding-block: 28px;
            padding-inline: 20px;
        }
        &__gallery{
            text-align: center;
            // margin-block: 20px;
            display: flex;
            gap: 40px;
            overflow: auto;
            width: 100%;
            max-width: calc(100vw - 9px);
            background-color: var(--secondary);
            padding: 20px;
            &__item{
                flex-shrink: 0;
                max-width: 90%;
                max-height: 90vh;
                overflow: auto;
                box-shadow: 0 0 0 2px var(--bg_color_transparent);
                background-color: var(--bg_color_transparent);
                border-radius: 8px;
                margin-top: 40px;
                figure{
                    img{
                        border-radius: 8px;
                        max-width: 100%;
                        // max-height: 60vh;
                        display: inline-block;
                    }
                    figcaption{
                        margin-block: 20px;
                        font-size: $size_14px;
                        margin-inline: auto;
                        max-width: 600px;
                        color: var(--pure_white);
                    }
                }
            }
        }
        
    }
    &__footer{
        padding: 28px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 28px;
        small{
            text-transform: uppercase;
            color: var(--text_color_smooth);
            font-size: $size_12px;
            ul{
                margin-top: 12px;
            }
        }
        @media(max-width: $br_mobile){
            flex-direction: column;
            align-items: center;
            small{
                text-align: center;
            }
        }
    }
}
</style>