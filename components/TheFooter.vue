<template>
    <footer class="footer">
        <div class="footer__container container">
            <TheLogo />
            <h2 class="small-title">
                Design & Development
            </h2>
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