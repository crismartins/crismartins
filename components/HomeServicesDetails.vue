<template>
    <div class="services__details">
        <div class="services__details__container">
            <div class="services__details__image">
                <picture class="services__details__image__picture">
                    <span class="space">
                        <NuxtImg 
                            src="/images/space.png"
                            width="600px"
                        />
                    </span>
                    <NuxtImg 
                        src="/images/rocket.png"
                        width="140px"
                        class="rocket"
                    />
                </picture>

            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.services__details{
    display: grid;
    place-items: center;
    width: 100%;
    margin-top: 80px;
    &__image{
        position: relative;
        transition: $transition_default;
        height: 400px;
        aspect-ratio: 1;
        &__picture{
            display: grid;
            place-items: center;
            height: 100%;
            .space{
                border-radius: 50%;
                width: 100%;
                aspect-ratio: 1;
                overflow: hidden;
                display: block;
                img{
                    object-fit: cover;
                    min-width: 100%;
                    min-height: 100%;
                }
            }
            .rocket{
                animation: 0.4s shake infinite ease;
                position: absolute;
                top: -14%;
                width: 40%;
                right: 70px;
                z-index: 1;
            }
        }
    }
}
</style>