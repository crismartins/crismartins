<template>
    <nuxt-link 
        v-if="hasLink" 
        :to="hasLink" 
        class="button" 
    >
        <slot />
    </nuxt-link>
    <button v-else class="button">
        <slot />
    </button>
</template>

<script setup>
import { toRefs } from '#imports'
const props = defineProps({
    hasLink: {
        type: String
    }
})

const { hasLink } = toRefs(props)
</script>

<style lang="scss" >
.button{
    border: 1px solid var(--text_color_transparent);
    background-color: var(--bg_color_transparent);
    backdrop-filter: blur(4px);
    border-radius: 80px;
    padding: 16px 24px;
    font-size: $size_16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text_color);
    font-weight: 400;
    cursor: pointer;
    gap: 8px;
    transition: $transition_default;
    width: fit-content;
    &:hover{
        transform: scale(1.12);
    }
    &.icononly{
        width: 52px;
        height: 52px;
        padding: 8px;
        border-radius: 52px;
        font-size: $size_28px;
    }
    &.gradient{
        background: var(--primary_gradient);
        color: var(--bg_color);
        box-shadow: var(--shadow);
        &:hover{
            transform: scale(1.08);
        }
    }
    &.outline{
        background-color: transparent;
        border-color: var(--text_color);
        color: var(--text_color);
        i{
            transition: $transition_default;
        }
        &:hover{
            background-color: var(--tertiary);
            color: var(--bg_color);
            border-color: var(--tertiary);
            i{
                animation: calling 2s infinite;
            }
        }
    }
    &.primary{
        background: var(--secondary_gradient);
        border: none;
        box-shadow: 0 8px 40px 0 var(--shadow);
        color: var(--pure_white);
        &:hover{
            backdrop-filter: opacity(0.2);
            box-shadow: 0 12px 60px 0 var(--shadow);
        }
    }
    &.secondary{
        background-color: var(--tertiary);
        color: var(--bg_color);
        border-color: var(--tertiary);
        box-shadow: var(--shadow);
        &:hover{
            background-color: var(--text_color);
            color: var(--bg_color);
        }
    }

    @keyframes calling {
        0%{
            transform: translateY(-8px);
            opacity: 1;
        }
        60%{
            transform: translateY(4px);
            opacity: 1;
        }
        95%{
            transform: translateY(12px);
            opacity: 0;
        }
        100%{
            transform: translateY(-8px);
            opacity: 0;
        }
    }
}
</style>