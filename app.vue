<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { useSeoMeta } from '#imports'

useSeoMeta({
    title: 'Cristopher Martins - Designer & Developer',
    ogTitle: 'Cristopher Martins - Designer & Developer',
    description: "Hey I'm Cristopher Martins and this is my website Portfolio, hope you like my works!",
    ogDescription: "Hey I'm Cristopher Martins and this is my website Portfolio, hope you like my works!",
    ogImage: '/images/crismartins_avatar.png',
    twitterCard: 'summary_large_image'
})
</script>

<style lang="scss">
    .page-enter-active,
    .page-leave-active {
        transition: $transition_default;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
        // filter: blur(1rem);
    }
    .layout-enter-active,
    .layout-leave-active {
        transition: $transition_default;
    }
    .layout-enter-from,
    .layout-leave-to {
        opacity: 0;
        // filter: blur(1rem);
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: $transition_default;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
