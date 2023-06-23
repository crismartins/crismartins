<template>
    <nuxt-link class="button" v-if="link" :to="link">
        <slot />
    </nuxt-link>
    <button class="button" v-else>
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    hasLink: {
        type: String
    }
})

const link = props.hasLink
</script>

<style lang="scss" >
.button{
    border: 2px solid var(--bg_color);
    background-color: var(--bg_color);
    border-radius: 20px;
    padding: 16px 24px;
    font-size: $size_16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text_color);
    font-weight: 500;
    cursor: pointer;
    gap: 8px;
    transition: $transition_default;
    width: fit-content;
    min-height: 52px;
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
        box-shadow: $shadow_small;
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
    &.green{
        background-color: var(--primary);
        border-color: var(--bg_color);
        box-shadow: $shadow_small;
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