<template>
    <dialog 
        aria-modal
        class="app__modal" 
        :open="openedModal" 
    >
        <div class="app__modal__container" @click.self="closeModal">
            <article class="app__modal__container__content">
                <div class="app__modal__container__content__wrap__close">
                    <AppButton 
                        aria-label="Close"
                        class="icononly outline close-modal" 
                        @click="closeModal"
                    >
                        <AppIcon IconName="ph:x-bold" />
                        <span class="visually-hidden">
                            Close
                        </span>
                    </AppButton>
                </div>
                <slot />
            </article>
        </div>
    </dialog>
</template>

<script setup>
import { toRefs, watch } from '#imports'
const props = defineProps({
    openedModal: {
        type: Boolean,
        default: false
    }
})

const { openedModal } = toRefs(props)

const emits = defineEmits(['close:modal'])
const closeModal = () => {
    emits('close:modal')
}

watch(openedModal, () => {
    document.querySelector('body').style.overflow = openedModal.value ? 'hidden' : 'unset'
})

</script>

<style lang="scss" >
.app__modal{
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: transparent;
    border: 0;
    padding: 0;
    color: var(--text-color);
    transition: $transition_default;
    &[open]{
        animation: fade 0.4s ease;
        transform: scale(1);
        &::before {
            content: '';
            background:var(--bg_color_transparent);
            backdrop-filter: blur(12px);
            position: fixed;
            width: 100%;
            height: 100%;
        }
    }
    &__container{
        display: grid;
        place-items: center;
        position: absolute;
        height: 100%;
        width: 100%;
        max-width: 100%;
        padding: 40px;
        
        @media(max-width:$br_mobile){
            padding: 0px;
            min-height: 100vh;
            min-height: 100dvh;
        }
        &__content{
            position: relative;
            background-color:var(--bg_color);
            backdrop-filter: blur(12px);
            width: 100%;
            border-radius: 24px;
            overflow: auto;
            overflow-x: hidden;
            max-height: 100%;
            display: flex;
            flex-direction: column;
            &::-webkit-scrollbar{
                display: none;
            }
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            &__wrap__close{
                position: sticky;
                top:0;
                display: flex;
                justify-content: right;
                z-index: 1;
                padding: 20px 20px 0px;
                
            }
        }
    }
}
</style>