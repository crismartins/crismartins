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
            <p class="modal__project__body__description">
                {{ projectDetails.description }}
            </p>
            <div class="modal__project__body__gallery">
                <!-- <picture>
                    <nuxt-img 
                        v-if="projectDetails.image"
                        :src="projectDetails.image" 
                        :alt="projectDetails.name" 
                    />
                </picture> -->
                <figure v-for="item in projectDetails.gallery" :key="item.title">
                    <nuxt-img 
                        :src="item.image" 
                        :alt="item.title" 
                    />
                    <figcaption>
                        {{ item.title }}
                    </figcaption>
                </figure>
            </div>
        </div>
        <footer class="modal__project__footer">
            <AppStackSkills :stacks="projectDetails.stacks" />
            <AppButton 
                v-if="projectDetails.live_url" 
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
            text-align: center;
            padding-block: 12px;
        }
        &__gallery{
            text-align: center;
            margin-block: 40px;
            display: flex;
            flex-direction: column;
            figure{
                flex-shrink: 0;
                img{
                    border-radius: 12px;
                    min-width: 100%;
                    min-height: 100%;
                    object-fit: cover;
                    display: block;
                    margin-top: 40px;
                }
                figcaption{
                    margin-block: 40px;
                    margin-inline: auto;
                    max-width: 600px;
                }
            }
        }
        &__tools-title{
            font-size: $size_12px;
            font-weight: 300;
            margin-block: 8px;
            text-align: center;
        }
    }
    &__footer{
        padding-block: 20px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        @media(max-width: $br_mobile){
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>