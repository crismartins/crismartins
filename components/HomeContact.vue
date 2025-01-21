<template>
    <section class="contact section">
        <div class="contact__cta">
            <div class="contact__cta__logo">
                <AppIcon IconName="cris-icon:logo-symbol-outline" />
            </div>
            <h2 class="contact__cta__title large-title">
                {{ $t(contact.title) }}
            </h2>
            <p class="contact__cta__subtitle">
                {{ $t(contact.subtitle) }}
            </p>
            <div class="contact__cta__buttons">

                <AppButton class="primary lg" hasLink="mailto:hello@cristophermartins.com">
                    {{ $t(contact.button) }} <AppIcon IconName="cris-icon:arrow-up-right" />
                </AppButton>
            </div>

            <ul class="contact__cta__social">
                <li class="contact__cta__social__item">
                    <NuxtLink aria-label="Linkedin"
                        to="https://www.linkedin.com/in/cristopher-martins-designer-and-developer/" target="_new">
                        <AppIcon IconName="bxl:linkedin" /> <span class="visually-hidden">Linkedin</span>
                    </NuxtLink>
                </li>
                <li class="contact__cta__social__item">
                    <NuxtLink aria-label="GitHub" to="https://github.com/crismartins" target="_new">
                        <AppIcon IconName="bxl:github" /> <span class="visually-hidden">GitHub</span>
                    </NuxtLink>
                </li>
                <li class="contact__cta__social__item">
                    <NuxtLink aria-label="Dribbble" to="https://dribbble.com/cris_martins" target="_new">
                        <AppIcon IconName="bxl:dribbble" /> <span class="visually-hidden">Dribbble</span>
                    </NuxtLink>
                </li>
                <li class="contact__cta__social__item">
                    <NuxtLink aria-label="Instagram" to="https://www.instagram.com/crismartins_design_dev"
                        target="_new">
                        <AppIcon IconName="bxl:instagram-alt" /> <span class="visually-hidden">Instagram</span>
                    </NuxtLink>
                </li>
                <!-- <li class="contact__cta__social__item">
                    <NuxtLink aria-label="Email" to="mailto:hello@cristophermartins.com" target="_new">
                        <AppIcon IconName="bxl:whatsapp" /> <span
                            class="visually-hidden">hello@cristophermartins.com</span>
                    </NuxtLink>
                </li> -->

            </ul>
        </div>
    </section>
</template>

<script setup>
import { reactive, useI18n } from '#imports'
const { locale } = useI18n()

const contact = reactive({
    title: 'contact.title',
    subtitle: 'contact.subtitle',
    button: 'contact.cta'
})
</script>

<style lang="scss" scoped>
.contact{
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    background-color: var(--primary);
    overflow: hidden;
    // background: radial-gradient(circle at 50% 50%, var(--primary), var(--bg_color));
    
    // &:before{
    //     content: '';
    //     background: var(--primary);
    //     position: absolute;
    //     top: 0%;
    //     left: 16%;
    //     width: 50%;
    //     height: 80%;
    //     border-radius: 100%;
    //     filter: blur(100px);
    //     // box-shadow:  280px 20px 0 0 var(--secondary), 
    //     // 80px 280px 0 0 var(--bg_color_smooth);
    //     mix-blend-mode: difference;
    //     @media(max-width: $br_tablet){
    //         left: 0
    //     }
    // }
    // &:after{
    //     content: '';
    //     background: var(--secondary);
    //     position: absolute;
    //     top: 0%;
    //     right: 16%;
    //     width: 50%;
    //     height: 80%;
    //     border-radius: 100%;
    //     filter: blur(100px);
    //     mix-blend-mode: difference;
    //     @media(max-width: $br_tablet) {
    //         right: 0
    //     }
    // }
    &__cta{
        padding-block: 120px;
        text-align: center;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 580px;
        margin: auto;
        &__logo{
            color: var(--bg_color);
            padding-block: 40px;
            i {
                animation: rotate 4s infinite linear;
                font-size: 100px;
            }
        }
        &__title{
            color: var(--bg_color);
            font-weight: 600;
            font-size: $size_60px;
            line-height: $size_64px;
        }
        &__subtitle{
            font-weight: normal;
            font-size: $size_20px;
            color: var(--bg_color);
            margin-bottom: 40px;
        }
        &__buttons{
            display: flex;
            gap: 20px;
            i{
                font-size: $size_28px;
            }
        }

                &__social {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 20px;
                    margin-block: 40px;
        
                    @media(max-width: $br_mobile) {
                        justify-content: center;
                    }
        
                    &__item {
                        a {
                            display: flex;
                            gap: 12px;
                            font-size: $size_28px;
                            color: var(--bg_color);
                            transition: $transition_default;
        
                            &:hover {
                                color: var(--text_color);
                                text-decoration: underline;
                            }
                        }
        
                        &.email {
                            display: none;
        
                            @media(max-width: $br_mobile) {
                                display: flex;
                            }
                        }
                    }
                }
    }
}
</style>