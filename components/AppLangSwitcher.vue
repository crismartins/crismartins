<template>
    
    <div class="language__switcher" >
        <button class="language__switcher__button" @click="changeLang">
            <span v-html="$i18n.locale == 'pt' ? 'POR' : 'ENG'">

            </span>
            <AppIcon IconName="ph:caret-down-bold" />
        </button>
        <div class="language__switcher__menu" :aria-hidden="langOptions" @click="changeLang">
            <ul>
                <li :class="$i18n.locale == 'en' ? 'active' : 'inactive' ">
                    <label for="en"  >
                        ENG
                        <AppIcon IconName="circle-flags:us" />
                        <input v-model="$i18n.locale" type="radio" id="en" name="language" value="en">
                    </label>
                </li>
                <li :class="$i18n.locale == 'pt' ? 'active' : 'inactive'">
                    <label for="pt" >
                        POR
                        <AppIcon IconName="circle-flags:br" />
                        <input v-model="$i18n.locale" type="radio" id="pt" name="language" value="pt">
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    const langOptions = ref(true)

    function changeLang(){
        langOptions.value = !langOptions.value
    }
</script>

<style lang="scss" scoped>
.language__switcher{
    position: relative;
    font-size: 12px;
    width: fit-content;
    &__button{
        display: flex;
        align-items: center;
        background-color: transparent;
        box-shadow: 0 0 0 1px var(--dark) inset;
        border: 0;
        color: var(--dark);
        padding: 8px 12px;
        border-radius: 8px;
        font-size: 12px;
        i{
            margin-left:8px;
        }
    }
    &__menu{
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        display: grid;
        grid-template-rows: 0fr;
        transition: $default_transition;
        border-radius: 8px;
        background-color: var(--dark);
        &[aria-hidden="false"]{
            grid-template-rows:1fr;
        }
        ul{
            overflow: hidden;
            display: flex;
            flex-direction: column;
            li{
                order: 1;
                color: var(--light);
                transition: $default_transition;
                &:hover{
                    color: var(--primary);
                }
                label{
                    padding: 8px 12px;
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    i{
                        font-size: 12px;
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
                    color: var(--primary);
                }
            }
        }
    }
}
</style>