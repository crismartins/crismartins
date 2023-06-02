<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
    .page-enter-active,
    .page-leave-active {
        transition: $default_transition;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
        // filter: blur(1rem);
    }
    .layout-enter-active,
    .layout-leave-active {
        transition: $default_transition;
    }
    .layout-enter-from,
    .layout-leave-to {
        opacity: 0;
        // filter: blur(1rem);
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: $default_transition;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
