<template>
    <footer id="contact" class="footer section">
        <div class="footer__container container">
            <div class="footer__container__column">
                <h2 class="main-title gradient-font">
                    {{ $t(contact.title) }}
                </h2>

                <div class="footer__container__column__touch-hands">
                    <NuxtImg 
                        class="right-hand"
                        alt="Cristopher Martins"
                        src="/images/left_hand.png"
                        width="480px"
                        format="webp"
                        quality="100"
                        densities="x1 x2"
                        placeholder
                    />
                    <NuxtImg 
                        class="left-hand"
                        alt="Cristopher Martins"
                        src="/images/right_hand.png"
                        width="480px"
                        format="webp"
                        quality="100"
                        densities="x1 x2"
                        placeholder
                    />
                </div>
            </div>
            <div class="footer__container__column">
                <p>
                    <strong>
                        <a target="_new" href="mailto:hello@cristophermartins.com">
                            hello@cristophermartins.com
                        </a>
                    </strong>
                    <AppButton class="primary full-width" hasLink="mailto:hello@cristophermartins.com">
                        Send me a message
                    </AppButton>
                </p>
                <ul class="footer__container__column__social">
                    <li class="footer__container__column__social__item">
                        <NuxtLink 
                            aria-label="Linkedin"
                            to="https://www.linkedin.com/in/cristopher-martins-designer-and-developer/" 
                            target="_new"
                        >
                            <AppIcon IconName="ph:linkedin-logo-duotone" /> Linkedin
                        </NuxtLink>
                    </li>
                    <li class="footer__container__column__social__item">
                        <NuxtLink 
                            aria-label="GitHub"
                            to="https://github.com/crismartins" 
                            target="_new"
                        >
                            <AppIcon IconName="ph:github-logo-duotone" /> GitHub
                        </NuxtLink>
                    </li>
                    <li class="footer__container__column__social__item">
                        <NuxtLink 
                            aria-label="Dribbble"
                            to="https://dribbble.com/cris_martins" 
                            target="_new"
                        >
                            <AppIcon IconName="ph:dribbble-logo-duotone" /> Dribbble
                        </NuxtLink>
                    </li>
                    <li class="footer__container__column__social__item">
                        <NuxtLink 
                            aria-label="Instagram"
                            to="https://instagram.com/crismart_arts" 
                            target="_new"
                        >
                            <AppIcon IconName="ph:instagram-logo-duotone" /> Instagram
                        </NuxtLink>
                    </li>
                    <li class="footer__container__column__social__item email">
                        <NuxtLink 
                            aria-label="Email"
                            to="mailto:hello@cristophermartins.com" 
                            target="_new"
                        >
                            <AppIcon IconName="ph:envelope-duotone" /> hello@cristophermartins.com
                        </NuxtLink>
                    </li>
                    
                </ul>
            </div>
        </div>
        <div class="footer__copyright container">
            <p>
                {{ locale == 'en' ? 'Website proudly designed and developed by' : 'Site orgulhosamente criado e desenvolvido por' }}
                <NuxtLink
                    aria-label="About"
                    to="/#about"
                >Cristopher Martins</NuxtLink> 👨‍💻👨‍🎨
            </p>
            <p>
                © {{ currentYear }} cristophermartins.com
            </p>
        </div>
    </footer>
</template>

<script setup>
import { reactive, useI18n } from '#imports'
const { locale } = useI18n()
const currentYear = new Date().getFullYear()

const contact = reactive({
    title: 'contact.title',
    subtitle: 'contact.subtitle'
})
</script>

<style lang="scss" scoped>
.footer{
    margin-top: 40px;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    &:before{
        content: '';
        background: var(--tertiary);
        position: absolute;
        opacity: 0.4;
        top: 0%;
        left: 16%;
        width: 50%;
        height: 80%;
        border-radius: 100%;
        filter: blur(100px);
        box-shadow:  280px 20px 0 0 var(--primary), 80px 280px 0 0 var(--secondary);
    }
    &__container{
        background-color: var(--bg_color);
        border-radius: 40px;
        display: flex;
        align-items: center;
        color: var(--bg_color);
        overflow: hidden;
        position: relative;
        min-height: 440px;
        &:before{
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            background: var(--secondary_gradient);
            z-index: 1;
            opacity: 0.2;
            top:0;
            left: 0;
        }
        @media(max-width:$br_tablet){
            flex-direction: column;
            text-align: center;
            padding: 40px 24px;
        }
        &__column{
            position: relative;
            padding: 80px 40px;
            @media(max-width: $br_mobile){
                padding: 0;
                width: 100%;
            }
            .main-title{
                display: flex;
                position: relative;
                z-index: 2;
                font-size:100px;
                margin: 0;
                @media(max-width: $br_mobile){
                    justify-content: center;
                    text-align: center;
                    font-size: 80px;
                }
            }
            p{
                margin-block: 20px 40px;
                font-size: $size_16px;
                color: var(--bg_color_smooth);
                position: relative;
                z-index: 2;
                @media(max-width: $br_mobile){
                    text-align: center;
                    font-size: $size_16px;
                }
                strong{
                    font-size: $size_32px;
                    font-weight: 400;
                    display: block;
                    word-break: break-word;
                    a{
                        color: var(--text_color);
                        &:hover{
                            color: var(--secondary);
                        }
                    }
                    @media(max-width: $br_mobile){
                        font-size: $size_20px;
                        display: none;
                    }
                }
                .primary{
                    display: none;
                    @media(max-width: $br_mobile){
                        display: flex;
                    }
                }
            }
           
            &__social{
                position: relative;
                z-index: 2;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                gap: 20px;
                margin-block: 40px;
                @media(max-width: $br_mobile){
                    justify-content: center;
                }
                &__item{
                    a{
                        display: flex;
                        gap: 12px;
                        font-size: $size_20px;
                        color: var(--text_color_smooth);
                        transition: $transition_default;
                        &:hover{
                            color: var(--text_color);
                            text-decoration: underline;
                        }
                    }
                    &.email{
                        display: none;
                        @media(max-width: $br_mobile){
                            display: flex;
                        }
                    }
                }
            }
            &__logo{
                display: grid;
                place-items: center;
                @media(max-width: $br_mobile){
                    margin-block: 40px;
                }
                .footer-logo{
                    position: absolute;
                    bottom: -40%;
                    right: -0;
                    max-width: 100%;
                    padding-inline: 20px;
                    @media(max-width: $br_mobile){
                        position: relative;
                        bottom: 0;
                        height: 100%;
                    }
                    path{
                        fill: var(--bg_color)
                    }
                    svg{
                        width: 300px;
                        @media(max-width: $br_mobile){
                            width: 60vw;
                        }
                    }
                }
            }
            &__touch-hands{
                position: absolute;
                right: 0;
                width: 100%;
                height: 100%;
                transform: rotate(-34deg);
                top: 0;
                z-index: 0;
                // filter: grayscale(1);
                @media(max-width: $br_mobile){
                    position: relative;
                    transform: rotate(0deg);
                    height: 200px;
                }
                .right-hand{
                    position: absolute;
                    right: 55%;
                    @media(max-width: $br_mobile){
                        right: 50%;
                    }
                }
                .left-hand{
                    position: absolute;
                    left: 55%;
                    @media(max-width: $br_mobile){
                        left: 50%;
                    }
                }
            }
        }
    }
    &__copyright{
        padding-block: 40px;
        display: flex;
        gap: 12px;
        justify-content: space-between;
        margin-block: 0;
        @media(max-width: $br_mobile){
            flex-direction: column;
            justify-content: center;
            margin-bottom: 80px;
        }
        p{
            font-size:$size_12px;
            text-align: center;
            padding: 0;
            a{
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>