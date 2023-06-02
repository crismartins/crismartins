<template>
  <div class="hero__content">
      <div class="container">
          <div class="text__content">
            <!-- <h1>
                {{ $t('title') }}
            </h1> -->
            <!-- <p>
                <strong>Hey You!</strong> Welcome to my Website, my name is <strong>Cristopher Martins</strong> and I'm...
            </p> -->
            <!-- <Icon class="test" name="logos:figma" />
            <Icon name="logos:adobe-xd" />
            <Icon name="logos:javascript" />
            <Icon name="logos:html-5" />
            <Icon name="logos:css-3" />
            <Icon name="logos:sass" />
            <Icon name="logos:vue" /> -->
            <strong>
                Cristopher Martins
            </strong>
            <h1>
                I'm Designer &
                Frontend Dev.
                <!-- <strong>Brand Designer</strong> &
                <strong class="color">UI/UX Designer</strong> &
                <strong>Creative Web Developer</strong> -->
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