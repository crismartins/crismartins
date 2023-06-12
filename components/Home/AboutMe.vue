<template>
    <section class="about__section section" id="about">
        <div class="about__section__container container">
            <h2 class="small-title">
                About
            </h2>
            <h3 class="large-title">
                Who’s Cristopher Martins
            </h3>

            <HomeAboutMeSkills />

            <div class="about__section__container__text">
                <p>
                    I'm half designer and half frontend developer, is that makes me a incomplete  professional? I don't think so, probably the opposite, because everything I do always need to be the best a can do. Not only working on a project but also for life... could be studying to learn a new skill or improve another, handling with people I try to give my full attention for what they're saying, even with my hobbies, like to play an instrument, this is my goal...
                </p>
                <p>
                    <strong>
                        I'll do my best, trust me.
                    </strong>
                </p>
            </div>
            <div class="about__section__container__buttons">
                <AppButton class="green">
                    Let's Talk
                </AppButton>
                <AppButton class="outline" hasLink="/#portfolio">
                    <AppIcon IconName="ph:download-simple-bold" /> Download CV
                </AppButton>
            </div>

            <HomeAboutMeClients />

        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.about__section{
    padding-block: 82px;
    &__container{
        max-width: 920px;
        .small-title, .large-title{
            text-align: center;
        }
        &__text{
            padding-block: 24px;
            text-align: center;
            p{
                font-size: $size_20px;
                line-height: $size_32px;
            }
        }
        &__buttons{
            display: flex;
            justify-content: center;
            gap: 12px;
            padding-block: 24px;
        }
    }
}
</style>