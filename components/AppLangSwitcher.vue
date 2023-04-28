<template>
    
    <form class="language-switcher">
        <label for="en" :class="$i18n.locale == 'en' ? 'active' : ''">
            <span>
                english
            </span>
            <input v-model="$i18n.locale" type="radio" id="en" name="language" value="en">
        </label>
        <label for="es" :class="$i18n.locale == 'pt' ? 'active' : ''">
            <span>
                portugues
            </span>
            <input v-model="$i18n.locale" type="radio" id="pt" name="language" value="pt">
        </label>
    </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>