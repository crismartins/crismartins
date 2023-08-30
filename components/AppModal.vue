<template>
    <dialog class="app__modal" :open="openedModal">
        <button @click="closeModal">Close</button>
        <article class="app__modal__modal__content">
            <div class="app__modal__modal__content__gallery">
                <img :src="projectDetails.image" alt="" />
            </div>
            <div class="app__modal__modal__content__process">
                <h2>{{ projectDetails.name }}</h2>
                <h3>{{ projectDetails.type }}</h3>
                {{ projectDetails.description }}
            </div>
        </article>
    </dialog>
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

const emit = defineEmits(['close'])
const closeModal = () => {
    emit('close')
}

</script>

<style lang="scss" scoped>
.app__modal{
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: 999;
    &::backdrop {
        background: black;
        opacity: 0.5;
    }
    &__modal__content{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
</style>