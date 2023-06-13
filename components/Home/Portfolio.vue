<template>
    <section class="portfolio__section section">
        <div class="portfolio__section__container container">
            <h2 class="small-title">
                Portfolio
            </h2>
            <h3 class="large-title">
                Most relevant works
            </h3>
            <p>
                Welcome to the Portfolio area... here you'll find some selected works that I'm proud of have the opportunity to work in, hope you like.
            </p>
        </div>
        <ul class="portfolio__section__container__projects">
            <li class="portfolio__section__container__projects__item">
                <picture>
                    <img 
                        src="/images/crismartins.png"
                        width="240"
                        height="386"
                    />
                </picture>
                <ul class="portfolio__section__container__projects__item__stacks">
                    <li class="portfolio__section__container__projects__item__stacks">
                        <span>
                            stack
                        </span>
                    </li>
                </ul>
                <h3>
                    Ahoy
                </h3>
                <small>
                    Service Type
                </small>
            </li>
            <li class="portfolio__section__container__projects__item">
                Curitiba App
            </li>
            <li class="portfolio__section__container__projects__item">
                Hourglass
            </li>
            <li class="portfolio__section__container__projects__item">
                Planning Poker Online Room
            </li>
            <li class="portfolio__section__container__projects__item">
                Termo
            </li>
            <li class="portfolio__section__container__projects__item">
                Alegra Foods
            </li>
            <li class="portfolio__section__container__projects__item">
                Ebanx Webflow
            </li>
            <li class="portfolio__section__container__projects__item">
                Balance of Nature Homepage
            </li>
            
        </ul>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.portfolio__section{
    padding-block: 40px;
    &__container{
        max-width: 800px;
        text-align: center;
        p{
            font-size: 20px;
        }
        &__projects{
            display: flex;
            gap: 20px;
            justify-content: center;
        }
    }
}
</style>