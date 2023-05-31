<template>
    <div class="theme-switcher">
        <!-- <label>
            {{ $colorMode.value }}
        </label> -->
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
            border: 0;
            width: 60px;
            height: 32px;
            grid-gap: 4px;
            position: relative;
            background-color: var(--dark);
            border-radius: 60px;
            padding: 0;
            cursor: pointer;
            span{
                top: 0;
                width: 32px;
                height: 32px;
                background-color: var(--light);
                color: var(--dark);
                border-radius: 60px;
                position: absolute;
                transition: $default_transition;
                border: 2px solid var(--dark);
                display: grid;
                place-items: center;
                i{
                    position: absolute;
                    font-size: 24px;
                }
            }
        }
    }
    .light-theme{
        .theme-switcher{
            button{
                span{
                    left: 0;
                }
            }
        }
    }
    .dark-theme{
        .theme-switcher{
            button{
                span{
                    left: calc(100% - 32px);
                }
            }
        }
    }
</style>