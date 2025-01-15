<template>
    <div>
        <HomeHero id="home" />

        <HomePortfolio 
            id="portfolio"
            :projects="latestWorks"
        />

        <HomeAboutMe id="about" />

        <HomeServices id="services" />

    </div>
</template>

<script setup>
import { useI18n, useHead, computed } from '#imports'
const { locale } = useI18n()
useHead({
    htmlAttrs: {
        lang: locale
    }
})

import portfolio from '@/localData/portfolio'

const latestWorks = computed(() => {
    const projects = portfolio[locale.value]
    const last8Items = projects.slice(-12)
    return last8Items.reverse()
})

</script>