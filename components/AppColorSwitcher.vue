<template>
    <div class="theme-switcher">
        <!-- <label>
            {{ $colorMode.value }}
        </label> -->
        <button
            @click="toggleDarkMode($colorMode.preference === 'dark' ? 'light' : 'dark')"
        >
            <Icon class="light" name="ph:sun-dim" />
            <Icon class="dark" name="ph:sunglasses-fill" />
        </button>
    </div>
</template>

<script setup>
    const colorMode = useColorMode();
    function toggleDarkMode(theme) {
        colorMode.preference = theme;
        console.log()
    }
</script>

<style lang="scss" scoped>
    .theme-switcher{
        button{
            border: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 4px;
            position: relative;
            background-color: $neutral;
            border-radius: 60px;
            padding: 0;
            cursor: pointer;
            svg{
                font-size: 24px;
                z-index: 1;
                margin: 4px;
                color: $dark;
            }
            &:before{
                content: '';
                width: 32px;
                height: 32px;
                background-color: white;
                border-radius: 60px;
                position: absolute;
                z-index: 0;
                transition: $default_transition;
                border: 2px solid $light;
                box-sizing: border-box;
                box-shadow: 0 0 0 2px $neutral;
            }
        }
    }
    .light-theme{
        .theme-switcher{
            button{
                &:before{
                    left: 0;
                }
            }
        }
    }
    .dark-theme{
        .theme-switcher{
            button{
                &:before{
                    left: calc(100% - 32px);
                }
            }
        }
    }
</style>