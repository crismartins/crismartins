<template>
    <section class="hero__section section">
        <div class="hero__section__container container">
            <div class="hero__section__container__text">
                <figure class="hero__section__container__text__avatar">
                    <NuxtImg 
                        src="/images/avatar2.png" 
                        format="webp" 
                        width="100px" 
                        height="100px" 
                        densities="x1 x2"
                        quality="100"
                    />
                </figure>
                <p class="hero__section__container__text__name small-title">
                    Cristopher Martins
                </p>
                <h1 class="hero__section__container__text__title">
                    Designer &
                    Frontend Dev.
                </h1>
                <div class="hero__section__container__text__cta">
                    <AppButton class="secondary">
                        Let's Talk
                    </AppButton>
                    <AppButton class="outline" hasLink="/#portfolio">
                        Portfolio <AppIcon IconName="ph:arrow-down-bold" />
                    </AppButton>
                </div>
            </div>
        </div>
        <div class="hero__section__cta container">
            <p>
                As a <strong>Designer</strong> and <strong>Developer</strong> I’m able to create not only amazing designs 
                but also developing your website, simple like that. 
            </p>
            <div class="hero__section__cta__buttons">
                <AppButton class="secondary">
                    Let's Talk
                </AppButton>
                <AppButton class="outline" hasLink="/#portfolio">
                    Portfolio <AppIcon IconName="ph:arrow-down-bold" />
                </AppButton>
            </div>
        </div>
        <!-- <nuxt-img 
            class="hero__section__container__image"
            src="images/logo_lines.svg"
            format="webp"
            width="500"
        /> -->
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
    background: rgb(55,55,244);
    background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(226, 242, 255, 0.2) 50%, rgba(42, 255, 191,0.2) 100%);
    &__container{
        padding-top: 100px;
        flex-grow: 1;
        display: grid;
        place-items: center;
        &__text{
            display: flex;
            flex-direction: column;
            &__avatar{
                width: fit-content;
                margin: 0 auto 44px auto;
                border-radius: 40px;
                overflow: hidden;
                box-shadow: 0 0 0 16px rgba(#5e52ff, 0.2), 0 0 0 32px rgba(#40ff83, 0.2);
                img{
                    max-width: 100%;
                    max-height: 100%;
                    transform: scale(1.08);
                    object-fit: cover;
                }
            }
            &__name{
                text-align: center;
            }
            &__title{
                margin-block: 4px;
                font-size: $size_72px;
                text-align: center;
                font-weight: 600;
            }
            &__cta{
                margin-top: 44px;
                display: flex;
                gap: 12px;
                justify-content: center;
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