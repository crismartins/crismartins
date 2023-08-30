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
    border: 2px solid var(--text_color_transparent);
    background-color: var(--bg_color_transparent);
    backdrop-filter: blur(4px);
    border-radius: 40px;
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
    @media(max-width:$br_mobile){
        font-size: $size_20px;
        padding: 20px 32px;
    }
    &.icononly{
        width: 52px;
        aspect-ratio: 1;
        padding: 8px;
        border-radius: 52px;
        font-size: $size_28px;
        &:hover{
            transform: scale(1.12);
        }
    }

    &.call{
        i{
            transition: $transition_default;
        }
        &:hover{
            i{
                animation: calling 2s infinite;
            }
        }
    }
    
    &.outline{
        background-color: transparent;
        border-color: var(--text_color_transparent);
        color: var(--text_color);
        &:hover{
            background-color: var(--text_color);
            color: var(--bg_color);
            border-color: var(--text_color);
        }
        &.inverted{
            border-color: var(--bg_color_transparent);
            color: var(--bg_color);
            &:hover{
                background-color: var(--bg_color);
                color: var(--text_color);
                border-color: var(--bg_color);
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
            transform: scale(1.12);
        }
    }
    &.secondary{
        background: var(--text_color);
        color: var(--bg_color);
        border: none;
        &:hover{
            background: var(--tertiary);
            color: var(--pure_white);
        }
    }
    &.small{
        padding: 12px 16px;
        font-size: $size_14px;
        width: auto;
        @media(max-width:$br_mobile){
            font-size: $size_16px;
            padding: 16px 20px;
        }
    }
    &.link{
        padding-inline: 0;
        border: none;
        background-color: transparent;
        color: var(--secondary);
        &:hover{
            text-decoration: underline;
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