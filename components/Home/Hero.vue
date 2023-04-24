<template>
  <div class="hero__content">
      <div class="container">
          <div class="text__content">
            <p>
                <strong>Hey You!</strong> Welcome to my Website, my name is <strong>Cristopher Martins</strong> and I'm...
            </p>
            <h1>
                <strong>Brand Designer</strong> &
                <strong>UI/UX Designer</strong> &
                <strong>Creative Web Developer</strong>
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
                font-size: 80px;
            }
        }
    }
}
</style>