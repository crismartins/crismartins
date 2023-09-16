<template>
    <ul v-if="maxItems != null" class="skills__stacks">
        <li 
            v-for="stack in stackList" 
            :key="stack.name"
            class="skills__stacks__item" 
        >
            <strong>{{ stack.name }}</strong>
            <AppIcon :IconName="stack.logo"/>
        </li>
        <li class="skills__stacks__button">
            <AppButton 
                class="secondary icononly"
                :class="stackList.length > maxItems ? 'opened' : ''"
                @click="showAll"
            >
                <AppIcon IconName="ph:plus-bold"/>
                <span v-if="stackList.length == maxItems">
                    {{ stacks.length - maxItems }}
                </span>
            </AppButton>
        </li>
    </ul>
    <ul v-else class="skills__stacks">
        <li 
            v-for="stack in stacks" 
            :key="stack.name"
            class="skills__stacks__item no-bg" 
        >
            <strong>{{ stack.name }}</strong>
            <AppIcon :IconName="stack.logo"/>
        </li>
    </ul>
</template>

<script setup>
import { ref, onMounted } from '#imports'
const props = defineProps({
    stacks: {
        type: Object
    },
    maxItems: {
        type: Number,
        required: false
    }
})

let stackList = ref(props.stacks)

onMounted(() => {
    if(props.maxItems != null){
        stackList.value = props.stacks.slice(0, props.maxItems)
    }else{
        stackList.value = props.stacks
    }
})

function showAll(){
    if(stackList.value.length == props.maxItems){
        stackList.value = props.stacks
    }else{
        stackList.value = props.stacks.slice(0, props.maxItems)
    }
}

</script>

<style lang="scss" scoped>
    .skills__stacks{
        display: flex;
        // margin: auto;
        align-items: center;
        flex-wrap: wrap;
        row-gap: 12px;
        column-gap: 8px;
        justify-content: center;
        &__item{
            aspect-ratio: 1;
            font-size: 20px;
            width: 36px;
            display: grid;
            place-items: center;
            transition: $transition_default;
            border-radius: 100%;
            background-color: var(--neutral);
            margin-left: -12px;
            box-shadow: 0 4px 20px 0 var(--text_color_transparent), inset 8px -4px 32px 0 var(--bg_color);
            &.no-bg{
                background-color: transparent;
                box-shadow: none;
                width: fit-content;
                margin-left: 0; 
            }
            &:first-child{
                margin-left: 0;
            }
            strong{
                background-color: var(--text_color);
                color: var(--bg_color);
                font-size: $size_8px;
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
                transform: scale(1.2);
                strong{
                    top: -28px;
                    opacity: 1;
                }
            }
        }
        &__button{
            position: relative;
            
            button{
                transition: $transition_default;
                margin-left: -12px;
                gap: 0px;
                i{
                    font-size: $size_14px;
                }
                &.opened{
                    transform: rotate(45deg);
                }
                span{
                    font-size: $size_12px;
                }
            }
        }
    }
</style>