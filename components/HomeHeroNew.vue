<template>
    <section class="hero__section section">
        <div class="hero__section__container container">
            <div class="hero__section__container__text">
                <button class="hero__section__container__text__button">
                    <figure class="hero__section__container__text__button__avatar">
                        <NuxtImg 
                            src="/images/crismartins.png" 
                            width="80px"
                            format="webp"
                            quality="100"
                        />
                    </figure>
                    <span>
                        More about
                    </span>
                </button>
                <p class="hero__section__container__text__name small-title">
                    Cristopher Martins
                </p>
                <h1 class="hero__section__container__text__title">
                    Designer. Developer.
                </h1>
                <RouterLink to="/#portfolio">Portfolio</RouterLink>
                <AppButton class="green">
                    Portfolio
                </AppButton>
            </div>
        </div>
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
        display: flex;
        flex-direction: column;
        align-items: center;
            &__button{
                background-color: black;
                border-radius: 100px;
                padding: 8px;
                border: 0;
                display: grid;
                grid-template-columns: 0fr;
                place-items: center;
                transition: $transition_default;
                margin-bottom: 44px;
                position: relative;
                &:before{
                    content: '';
                    border: 1px solid black;
                    position: absolute;
                    height: 40px;
                    width: 40px;
                    border-radius: 100%;
                    box-shadow: 0 0 0 80px rgba(0,0,0,0.2);
                }
                &:hover{
                    grid-template-columns: 2fr;
                    figure{
                        transform: scale(1);
                    }
                }
                span{
                    overflow: hidden;
                    transition: $transition_default;
                    white-space: nowrap;
                    color: white;
                }
                &__avatar{
                    flex-shrink: 0;
                    overflow: hidden;
                    width: 40px;
                    height: 40px;
                    border-radius: 100px;
                    background-color: var(--tertiary);
                    display: grid;
                    place-items: center;
                    margin: 0;
                    transform: scale(2);
                    transition: $transition_default;
                    img{
                        max-width: 100%;
                        max-height: 100%;
                        object-fit: cover;
                        object-position: top;
                    }
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