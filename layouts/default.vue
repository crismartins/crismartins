<template>
    <div class="body-container">
        <TheHeader />
        <main>
            <slot />
        </main>
    </div>
</template>

<style scoped lang="scss">
.body-container{
    overflow: hidden;
}
</style>