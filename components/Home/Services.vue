<template>
    <section class="services__section section">
        <div class="services__section__container container">
            <div class="services__section__container__column">
                <div class="services__section__container__column__selection">
                    <h2 class="small-title">
                        Services
                    </h2>
                    <h3 class="large-title">
                        All you need to make your Business go beyond
                    </h3>

                    <ul class="services__section__container__column__selection__list">
                        <li 
                            class="services__section__container__column__selection__list__item"
                            v-for="service in services"
                            :key="service.id"
                        >
                            <AppButton 
                                class="gradient" 
                                @click="goService(service.id)"
                                :class="service.id == selected ? 'active' : 'inactive'"
                            >
                                <strong>
                                    <AppIcon :IconName="service.icon" />
                                    {{service.name}}
                                </strong>
                                <AppIcon IconName="ph:arrow-right" />
                            </AppButton>
                        </li>
                    </ul>

                </div>
            </div>
            <div class="services__section__container__column__details">
                <article 
                    class="services__section__container__column__details__card"
                    v-for="service in services"
                    :key="service.id"
                    :id="'service_'+service.id"
                 >
                    <img 
                        :src="service.image"
                        width="240"
                        height="386"
                    />

                    <p>
                        {{service.description}}
                    </p>
                    <AppButton class="outline">
                        That's what I need!
                    </AppButton>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
const services = ref([
    {
        id: 1,
        icon: "ph:devices-duotone", 
        name: "UX/UI Design", 
        image: "/images/crismartins.png",
        description: "UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.",
    },
    {
        id: 2,
        icon: "ph:terminal-window-duotone", 
        name: "Web Development", 
        image: "/images/crismartins.png",
        description: "UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.",
    },
    {
        id: 3,
        icon: "ph:bezier-curve-duotone", 
        name: "Branding", 
        image: "/images/crismartins.png",
        description: "UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.",
    },
    {
        id: 4,
        icon: "ph:pencil-line-duotone", 
        name: "Illustration", 
        image: "/images/crismartins.png",
        description: "UX and UI Design for Web Applications, Mobile Applications, Softwares or Systems.",
    }
])
const selected = ref(1)



function goService(id){
    const element = document.getElementById('service_'+id)
    element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
    selected.value = id
    
    const rect = element.getBoundingClientRect();

    console.log(rect);

}

</script>

<style lang="scss" scoped>
.services__section{
    padding-block: 40px;
    &__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        &__column{
            &__selection{
                position: sticky;
                top: 80px;
                &__list{
                    margin-block: 40px;
                    &__item{
                        padding-block: 8px;
                        button{
                            width: 100%;
                            justify-content: space-between;
                            font-size: $size_24px;
                            padding: 12px 20px;
    
                            &.inactive{
                                background: transparent;
                                color: var(--text_color);
                                border: none;
                                box-shadow: none;
                                & > i:last-child{
                                    opacity: 0;
                                }
                            }
                            strong{
                                display: flex;
                                align-items: center;
                                font-weight: 500;
                                gap: 16px;
                                i{
                                    font-size: 60px;
                                }
                            }
                        }
                    }
                }
            }

            &__details{
                margin: 24px;
                &__card{
                    border: 2px solid black;
                    border-radius: 24px;
                    padding: 40px;
                    text-align: center;
                    button{
                        margin: auto;
                    }
                }
            }
        }
    }
}
</style>