<template>
  <section class="hero__section section">
    <div class="hero__section__container container">
        <div class="hero__section__container__text">
            <p class="hero__section__container__text__name small-title">
                Cristopher Martins
            </p>
            <h1 class="hero__section__container__text__title">
                Designer &<br/>
                Frontend Dev.
            </h1>
        </div>
    </div>
    <div class="hero__section__cta container">
        <p>
            As a <strong>Designer</strong> and <strong>Developer</strong> I’m able to create not only amazing designs 
            but also developing your website, simple like that. 
        </p>
        <div class="hero__section__cta__buttons">
            <AppButton class="green">
                Let's Talk
            </AppButton>
            <AppButton class="outline" hasLink="/#portfolio">
                Portfolio <AppIcon IconName="ph:arrow-down-bold" />
            </AppButton>
        </div>
    </div>
    <nuxt-img 
        class="hero__section__container__image"
        src="images/logo_lines.svg"
        format="webp"
        width="500"
    />
  </section>
</template>

<script setup>
   
</script>

<style lang="scss" scoped>
.hero__section{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__container{
        padding-top: 100px;
        flex-grow: 1;
        display: grid;
        place-items: center;
        &__text{
            &__name{
                text-align: center;
            }
            &__title{
                margin-block: 4px;
                font-size: $size_72px;
                text-align: center;
                font-weight: 600;
            }
        }
        &__image{
            position: absolute;
            z-index: -1;
        }
    }
    &__cta{
        display: grid;
        grid-template-columns: 454px 1fr;
        align-items: center;
        padding-block: 20px;
        @media(max-width:$br_tablet){
            grid-template-columns: 1fr;
        }
        p{
            font-size: $size_14px;
        }
        &__buttons{
            display: flex;
            justify-content: flex-end;
            gap: 12px;
        }
    }
}
</style>