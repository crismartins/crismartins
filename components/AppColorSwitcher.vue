<template>
    <div class="theme-switcher">
        <button
            :aria-label="selectThemeTitle"
            :class="colorMode.value"
            @click="toggleDarkMode(colorMode.value == 'dark' ? 'light' : 'dark')"
        >
            <span>
                <AppIcon 
                    :class="colorMode.value" 
                    :IconName="icon"
                />
                <small>
                    {{ selectThemeTitle }}
                </small>
            </span>
            
        </button>
    </div>
</template>

<script setup>
import { ref } from '#imports'

const colorMode = useColorMode()
const icon = ref('cris-icon:light-theme')
const selectThemeTitle = ref('')


onMounted(() => {
    if(colorMode.value == 'dark'){
        icon.value = 'cris-icon:light-theme'
        selectThemeTitle.value = 'Light Mode'
    }else{
        icon.value = 'cris-icon:dark-theme'
        selectThemeTitle.value = 'Dark Mode'
    }
})

function toggleDarkMode(theme) {
    colorMode.preference = theme
    if(theme == 'dark'){
        icon.value = 'cris-icon:light-theme'
        selectThemeTitle.value = 'Light Mode'
    }else{
        icon.value = 'cris-icon:dark-theme'
        selectThemeTitle.value = 'Dark Mode'
    }
}
</script>

<style lang="scss" scoped>
    .theme-switcher{
        display: grid;
        place-items: center;
        button{
            background-color: var(--primary);
            color: var(--text-color);
            border: 0;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            cursor: pointer;
            padding: 0;
            transition: $transition_default;
            &:hover{
                color: var(--neutral);
            }
            span{
                display: grid;
                place-items: center;
                position: relative;
                i{
                    font-size: $size_28px;
                }
                small{
                    position: absolute;
                    text-transform: uppercase;
                    background-color: var(--text_color);
                    border-radius: 50% 50% 0 50%;
                    aspect-ratio: 1;
                    width: 32px;
                    padding: 4px;
                    color: var(--bg_color);
                    font-size: $size_8px;
                    top: -12px;
                    left: -20px;
                    transition: $transition_default;
                    opacity: 0;
                    display: grid;
                    place-items: center;
                    border: 1px solid var(--bg_color);
                }
            }
            &:hover{
                span{
                    small{
                        top: -24px;
                        opacity: 1;
                    }
                }
            }
        }
    }
</style>