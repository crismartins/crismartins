<template>
    
    <div class="language__switcher" >
        <button class="language__switcher__button" @click="changeLang">
            <span v-html="$i18n.locale == 'pt' ? 'POR' : 'ENG'" />
            <AppIcon IconName="ph:caret-down-bold" />
        </button>
        <div 
            class="language__switcher__menu" 
            :aria-hidden="langOptions" 
            @click="changeLang"
        >
            <ul>
                <li :class="$i18n.locale == 'en' ? 'active' : 'inactive' ">
                    <label for="en" >
                        ENG
                        <AppIcon IconName="circle-flags:us" />
                        <input 
                            id="en" 
                            v-model="$i18n.locale" 
                            type="radio" 
                            name="language" 
                            value="en"
                        />
                    </label>
                </li>
                <li :class="$i18n.locale == 'pt' ? 'active' : 'inactive'">
                    <label for="pt" >
                        POR
                        <AppIcon IconName="circle-flags:br" />
                        <input 
                            id="pt" 
                            v-model="$i18n.locale" 
                            type="radio" 
                            name="language" 
                            value="pt"
                        />
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from '#imports'
const langOptions = ref(true)

function changeLang(){
    langOptions.value = !langOptions.value
}
</script>

<style lang="scss" scoped>
.language__switcher{
    position: relative;
    font-size: $size_12px;
    width: fit-content;
    &__button{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: transparent;
        background: var(--text_color_transparent);
        color: var(--text_color);
        padding: 8px 12px;
        border-radius: 16px;
        font-size: $size_12px;
        min-width: 72px;
        i{
            margin-left:8px;
        }
    }
    &__menu{
        width: 100%;
        top: 50%;
        left: 0;
        position: absolute;
        display: grid;
        grid-template-rows: 0fr;
        transition: $transition_default;
        &[aria-hidden="false"]{
            grid-template-rows:1fr;
            top: 0;
        }
        ul{
            border-radius: 16px;
            overflow: hidden;
            display: flex;
            background: var(--text_color);
            flex-direction: column;
            li{
                order: 1;
                color: var(--bg_color_smooth);
                transition: $transition_default;
                &:hover{
                    color: var(--bg_color);
                }
                label{
                    padding: 8px 12px;
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    i{
                        font-size: $size_12px;
                        margin-left:4px;
                    }
                    input{
                        margin: 0;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        left: 0;
                        top: 0;
                        opacity: 0;
                        cursor: pointer;
                    }
                }
                &.active{
                    order: 0;
                    color: var(--bg_color);
                }
            }
        }
    }
}
</style>