<template>
    <div class="body-container">
        <TheHeader />
        <main>
            <slot />
        </main>
        <TheFooter />
        <SpeedInsights/>
    </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<style scoped lang="scss">
.body-container{
    min-height: 100%;
}
</style>