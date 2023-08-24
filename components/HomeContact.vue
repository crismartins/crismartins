<template>
    <section class="contact__section section">
        <div class="contact__section__container container__fluid">
            <div class="contact__section__container__column">
                
                <h2 class="small-title">
                    Say Hey
                </h2>
                <strong>
                    👋  Send me me a message or follow trough this chanels... 
                </strong>

                
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
                        <AppIcon IconName="ph:instagram-logo" />
                    </li>
                    <li class="contact__section__container__column__social__item">
                        <AppIcon IconName="ph:envelope" />
                    </li>
                    
                </ul>

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
    padding-block: 40px;
    display: flex;
    align-items: center;
    &__container{
        background: var(--primary_gradient);
        border-radius: 40px;
        display: flex;
        padding: 80px 40px;
        color: var(--bg_color);
        @media(max-width:$br_mobile){
            flex-direction: column;
            padding: 40px 20px;
        }
        h2{
            @media(max-width: $br_mobile){
                text-align: center;
            }
        }
        strong{
            font-size: $size_40px;
            margin-block: 20px 40px;
            font-weight: 500;
            display: block;
            @media(max-width: $br_mobile){
                text-align: center;
                font-size: $size_28px;
            }
        }
        &__column{
            flex-grow: 1;
            &__social{
                display: flex;
                align-items: center;
                gap: 20px;
                margin-block: 40px;
                @media(max-width: $br_mobile){
                    justify-content: center;
                }
                &__item{
                    font-size: 24px;
                    color: var(--bg_color_smooth);
                    &:hover{
                        color: var(--tertiary);
                    }
                }
            }
            button{
                margin-top: 40px;
                @media(max-width: $br_mobile){
                    margin-inline: auto;
                }
            }
            &__logo{
                display: grid;
                place-items: center;
                @media(max-width: $br_mobile){
                    margin-block: 40px;
                }
                .footer-logo{
                    svg{
                        animation: 4s rotating ease infinite;
                        width: 300px;
                        @media(max-width: $br_mobile){
                            width: 60vw;
                        }
                    }
                }
            }
        }
    }
}
</style>