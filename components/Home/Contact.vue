<template>
    <section class="contact__section section">
        <div class="contact__section__container container">
            <div class="contact__section__container__column">
                <TheLogo />
                <h2 class="small-title">
                    Design & Development
                </h2>
                <h3>
                    Cristopher Martins
                </h3>
            </div>
            <div class="contact__section__container__column">
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
            </div>
        </div>
        
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.contact__section{
    padding-block: 20px;
    &__container{
        background: var(--secondary_gradient);
        padding: 80px 40px;
        border-radius: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        &__column{
            &__social{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                gap: 20px;
                &__item{
                    font-size: 24px;
                    &:hover{
                        color: var(--tertiary);
                    }
                }
            }
        }
    }
}
</style>