<template>
    <footer class="footer">
        <div class="footer__container container">
            <p>
                © {{ currentYear }} cristophermartins.com
            </p>
        </div>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer{
    &__container{
        p{
            font-size:$size_12px;
            text-align: center;
            padding-block: 40px;
        }
    }
}
</style>