<template>
    <footer class="footer">
        <div class="footer__container container">
            <p>
                Website designed and built by <NuxtLink to="/about">Cristopher Martins</NuxtLink> 👨‍💻👨‍🎨
            </p>
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
        display: flex;
        justify-content: space-between;
        p{
            font-size:$size_12px;
            text-align: center;
            padding-block: 40px;
            a{
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>