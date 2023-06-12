<template>
    <div class="theme-switcher">
        <button
            :class="$colorMode.preference"
            @click="toggleDarkMode($colorMode.preference === 'dark' ? 'light' : 'dark')"
        >
            <span>
                <Transition name="fade">
                    <AppIcon v-if="$colorMode.preference === 'light'" class="light" IconName="ph:sun-dim" />
                    <AppIcon v-else class="dark" IconName="ph:sunglasses-fill" />
                </Transition>
            </span>
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
            background-color: transparent;
            color: var(--text-color);
            border: 0;
            border-radius: 60px;
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
                position: relative;
                i{
                    font-size: 24px;
                    position: absolute;
                }
            }
        }
    }
</style>