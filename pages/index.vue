<template>
    <div>
        <HomeHero id="home" />

        <HomePortfolio id="portfolio" />

        <HomeAboutMe id="about" />

        <HomeServices id="services" />
        
    </div>
</template>

<script setup>
import { useI18n, useHead } from '#imports'
const { locale } = useI18n()
useHead({
    htmlAttrs: {
        lang: locale
    }
})
</script>