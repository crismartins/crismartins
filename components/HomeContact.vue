<template>
    <section class="contact__section section">
        <div class="contact__section__container container">
            <div class="contact__section__container__column">
                
                <h2 class="small-title">
                    Say Hi!
                </h2>
                <h3 class="gradient-font">
                    hello@cristophermartins.com.br
                </h3>

                
                <ul class="contact__section__container__column__social">
                    <li class="contact__section__container__column__social__item">
                        <AppIcon IconName="ph:linkedin-logo" />
                    </li>
                    <li class="contact__section__container__column__social__item">
                        <AppIcon IconName="ph:github-logo" />
                    </li>
                    <li class="contact__section__container__column__social__item">
                        <AppIcon IconName="ph:dribbble-logo" />
                    </li>
                    <li class="contact__section__container__column__social__item">
                        <AppIcon IconName="ph:behance-logo" />
                    </li>
                    <li class="contact__section__container__column__social__item">
                        <AppIcon IconName="ph:instagram-logo" />
                    </li>
                    <li class="contact__section__container__column__social__item">
                        <AppIcon IconName="ph:youtube-logo" />
                    </li>
                    <li class="contact__section__container__column__social__item">
                        <AppIcon IconName="ph:envelope" />
                    </li>
                    
                </ul>

                <AppButton class="primary">
                    Let's work together
                </AppButton>
            </div>
            <div class="contact__section__container__column">
                <div class="contact__section__container__column__logo">
                    <TheLogo class="footer-logo" />
                </div>
            </div>
        </div>
        
    </section>
</template>

<script setup>

</script>

<style lang="scss">
.contact__section{
    padding-block: 20px;
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    align-items: center;
    &__container{
        // background: var(--secondary_gradient);
        padding: 80px 40px;
        border-radius: 40px;
        display: grid;
        grid-template-columns: 1fr 300px;
        align-items: center;
        h3{
            font-size: 48px;
            margin-block: 20px 40px;
            word-break: break-all;
        }
        &__column{
            button{
                margin-block: 40px;
            }
            &__social{
                display: flex;
                align-items: center;
                gap: 20px;
                margin-block: 40px;
                &__item{
                    font-size: 24px;
                    &:hover{
                        color: var(--tertiary);
                    }
                }
            }
            &__logo{
                animation: 4s rotating ease infinite;
                border-radius: 50%;
                aspect-ratio: 1;
                display: grid;
                place-items: center;
                .footer-logo{
                    svg{
                        width: 300px;
                    }
                }
            }
        }
    }
}
</style>