<template>
    <div class="theme-switcher">
        <button
            :class="colorMode.value"
            @click="toggleDarkMode(colorMode.value == 'dark' ? 'light' : 'dark')"
        >
            <span>
                <AppIcon 
                    :class="colorMode.value" 
                    :IconName="icon" 
                />
            </span>
            
        </button>
    </div>
</template>

<script setup>
import { ref } from '#imports'

const colorMode = useColorMode()
const icon = ref('ph:sun-dim')

function toggleDarkMode(theme) {
    colorMode.preference = theme
    if(theme == 'dark'){
        icon.value = 'ph:sun-dim'
    }else{
        icon.value = 'ph:moon-stars'
    }
}
</script>

<style lang="scss" scoped>
    .theme-switcher{
        button{
            background-color: transparent;
            color: var(--text-color);
            border: 0;
            width: 32px;
            height: 32px;
            cursor: pointer;
            transition: $transition_default;
            &:hover{
                color: var(--neutral);
            }
            span{
                display: grid;
                place-items: center;
                i{
                    font-size: 24px;
                }
            }
        }
    }
</style>