<template>
  <div class="hero__content">
      <div class="container">
          <div class="text__content">
            <!-- <h1>
                {{ $t('title') }}
            </h1> -->
            
            <strong>
                Cristopher Martins
            </strong>
            <h1>
                I'm Designer &
                Frontend Dev.
            </h1>
            <nuxt-link to="/portfolio">
                My Works
            </nuxt-link>
            <nuxt-link to="/portfolio">
                Let's create something together!
            </nuxt-link>
          </div>
      </div>
  </div>
</template>

<script setup>
   
</script>

<style lang="scss" scoped>
.test{
    font-size:120px;
    position: fixed;
    top: 50%;
}
.color{
    color: var(--highlight);
}
.hero__content{
    min-height: 100vh;
    display: flex;
    align-items: center;
    .container{
        .text__content{
            p{
                text-transform: uppercase;
            }
            h1{
                font-size: 72px;
                text-align: center;
            }
        }
    }
}
</style>