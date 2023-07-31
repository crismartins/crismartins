<template>
    <ul class="skills__stacks">
        <li 
            v-for="(stack, index) in getList(maxItems)" 
            :key="index"
            class="skills__stacks__item" 
        >
            <strong>{{ stack.name }}</strong>
            <AppIcon :IconName="stack.logo"/>
        </li>
        <li v-if="stacks.length > maxItems" class="skills__stacks__button">
            <AppButton 
                class="gradient icononly" 
                :class="stacks.length > maxItems ? 'opened' : ''" 
                @click="getFullList"
            >
                <AppIcon IconName="ph:plus-bold"/>
            </AppButton>
        </li>
    </ul>
</template>

<script setup>
import { ref, toRefs } from '#imports'
const props = defineProps({
    stacks: {
        type: Object
    },
    maxItems: {
        type: Number
    }
})

const { stacks, maxItems } = toRefs(props)

function getList(quantity){
    return stacks.value.slice(0, quantity)
}

function getFullList(){
    if(maxItems.value < stacks.value.length){
        // return getList(Infinity)
        maxItems.value = Infinity
    }
    return stacks.value
}

</script>

<style lang="scss" scoped>
    .skills__stacks{
        display: flex;
        margin: auto;
        align-items: center;
        flex-wrap: wrap;
        &__item{
            width: 64px;
            height: 64px;
            background-color: rgba(255,255,255, 0.8);
            backdrop-filter: blur(40px);
            display: grid;
            place-items: center;
            font-size: $size_32px;
            border-radius: 64px;
            border: 2px solid var(--neutral);
            box-shadow: $shadow_small;
            transition: $transition_default;
            margin-left: -16px;
            position: relative;
            z-index: 0;
            &:first-child{
                margin-left: 0;
            }
            strong{
                background-color: var(--text_color);
                color: var(--bg_color);
                font-size: $size_12px;
                font-weight: normal;
                padding: 4px 8px;
                border-radius: $size_8px;
                position: absolute;
                top: 0;
                transition: $transition_default;
                opacity: 0;
                text-transform: uppercase;
                text-align: center;
                white-space: nowrap;
            }
            &:hover{
                z-index: 1;
                transform: scale(1.08);
                strong{
                    top: -40px;
                    opacity: 1;
                }
            }
        }
        &__button{
            position: relative;
            margin-left: -16px;
            
            button{
                transition: $transition_default;
                &.opened{
                    transform: rotate(45deg);
                }
            }
        }
    }
</style>