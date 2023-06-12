<template>
    <div class="about__skills">
        <div class="about__skills__image">
            <picture class="about__skills__image__picture">
                <img 
                    src="/images/crismartins.png"
                    width="240"
                    height="386"
                />
            </picture>
            <strong class="about__skills__image__tag experience">
                <i>
                    10+
                </i>
                <span>
                    Years of <br />
                    experience
                </span>
            </strong>
            <strong class="about__skills__image__tag developer">
                <AppIcon IconName="ph:lightbulb-duotone"/>
                <span>
                    Creative Web <br />
                    Developer
                </span>
            </strong>
            <strong class="about__skills__image__tag designer">
                <AppIcon IconName="ph:circles-three-plus-duotone"/>
                <span>
                    Multidisciplinary <br />
                    Designer
                </span>
            </strong>

        </div>

        <ul class="about__skills__stacks">
            <li class="about__skills__stacks__item" v-for="stack in stackLogos" :key="stack.name">
                <strong>{{stack.name}}</strong>
                <AppIcon :IconName="stack.logo"/>
            </li>
            <li class="about__skills__stacks__button">
                <AppButton class="gradient icononly">
                    <AppIcon IconName="ph:plus-bold"/>
                </AppButton>
            </li>
        </ul>
    </div>
</template>

<script setup>
const stackLogos = ref([
    {logo: 'logos:figma', name: 'Figma'},
    {logo: 'logos:adobe-xd', name: 'Adobe Xd'},
    {logo: 'logos:adobe-photoshop', name: 'Adobe Photoshop'},
    {logo: 'logos:adobe-illustrator', name: 'Adobe Illustrator'},
    {logo: 'logos:javascript', name: 'Javascript'},
    {logo: 'logos:html-5', name: 'HTML 5'},
    {logo: 'logos:css-3', name: 'CSS 3'},
])
</script>

<style lang="scss" scoped>
.about__skills{
    display: flex;
    flex-direction: column;
    &__image{
        position: relative;
        width: fit-content;
        margin: 48px auto;
        &__picture{
            background-color: var(--primary);
            display: flex;
            border-radius: 400px;
            overflow: hidden;
            width: fit-content;
            height: 420px;
            align-items: flex-end;
            outline: 2px solid var(--text_color);
            outline-offset: 16px;
            margin: 16px;
            img{
                position: relative;
                z-index: 1;
            }
        }
        &__tag{
            border: 2px solid var(--text_color);
            color: var(--text_color);
            background-color: var(--bg_color);
            display: flex;
            align-items: center;
            border-radius: 40px;
            padding: 8px 20px;
            text-transform: uppercase;
            box-shadow: $shadow_small;
            font-size: $size_14px;
            font-weight: 700;
            position: absolute;
            top: 10%;
            right: -82px;
            &.developer{
                background-color: #2E5CFF;
                color: var(--bg_color);
                border-color: var(--bg_color);
                top: 50%;
                right: unset;
                left: -122px;
            }
            &.designer{
                background-color: #FF1879;
                color: var(--bg_color);
                border-color: var(--bg_color);
                bottom: 10%;
                top: unset;
                z-index: 1;
                right: -100px;
            }
            i{
                font-size: $size_28px;
                font-style: normal;
                margin-right: 12px;
            }
        }
    }
    &__stacks{
        display: flex;
        margin: auto;
        align-items: center;
        &__item{
            width: 64px;
            height: 64px;
            background-color: var(--bg_color);
            display: grid;
            place-items: center;
            font-size: $size_32px;
            border-radius: 64px;
            border: 2px solid var(--neutral);
            box-shadow: $shadow_small;
            transition: $transition_default;
            margin-left: -16px;
            position: relative;
            &:first-child{
                margin-left: 0;
            }
            strong{
                background-color: var(--tertiary);
                color: var(--bg_color);
                font-size: $size_12px;
                font-weight: normal;
                padding: 4px 8px;
                border-radius: $size_8px;
                position: absolute;
                transition: $transition_default;
                opacity: 0;
                text-transform: uppercase;
                text-align: center;
            }
            &:hover{
                strong{
                    transform: translateY(-48px);
                    opacity: 1;
                }
            }
        }
        &__button{
            position: relative;
            margin-left: -16px;
        }
    }
}
</style>