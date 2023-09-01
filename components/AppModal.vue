<template>
    <dialog 
        aria-modal
        class="app__modal" 
        :open="openedModal" 
    >
        <div class="app__modal__container" @click.self="closeModal">
            <article class="app__modal__container__content">
                <AppButton class="icononly outline close-modal" @click="closeModal">
                    <AppIcon IconName="ph:x-bold" />
                    <span class="visibility-hidden">
                        Close
                    </span>
                </AppButton>
                <slot />
            </article>
        </div>
    </dialog>
</template>

<script setup>
import { toRefs } from '#imports'
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
    opacity: 0;
    transition: $transition_default;
    color: var(--text-color);
    &[open]{
        opacity: 1;
    }
    &__container{
        overflow: auto;
        display: grid;
        place-items: center;
        position: absolute;
        height: 100%;
        width: 100%;
        padding: 40px;
        @media(max-width:$br_mobile){
            padding: 20px;
        }
        &::before {
            content: '';
            background:var(--bg_color_transparent);
            backdrop-filter: blur(12px);
            position: fixed;
            width: 100%;
            height: 100%;
        }
        &__content{
            position: relative;
            background-color: var(--bg_color);
            background:var(--bg_color_smooth);
            backdrop-filter: blur(12px);
            width: 100%;
            max-width: 600px;
            border-radius: 24px;
            padding: 20px;
            .close-modal{
                position: absolute;
                right: 20px;
                top: 20px;
            }
        }
    }
}
</style>