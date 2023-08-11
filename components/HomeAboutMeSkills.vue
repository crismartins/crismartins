<template>
    <div class="about__skills">

        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />

        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        

        <div class="mover">
            <div class="about__skills__image">
                <picture class="about__skills__image__picture">
                    <!-- <img 
                        src="/images/crismartins_avatar2.png"
                        height="300"
                    /> -->
                    <img 
                        src="/images/cristopher_martins_new.png"
                        height="300"
                    />
                </picture>
                <strong class="about__skills__image__tag experience">
                    <i>
                        10+
                    </i>
                    <span>
                        Years of 
                        experience
                    </span>
                </strong>
                <strong class="about__skills__image__tag artist">
                    <span>
                        Digital Artist in spare time
                    </span>
                </strong>
                <strong class="about__skills__image__tag developer">
                    
                    <span>
                        >_ Creative Web
                        Developer
                    </span>
                </strong>
                <strong class="about__skills__image__tag designer">
                    Branding
                    <span>
                        Multidisciplinary <br />
                        Designer
                    </span>
                </strong>

            </div>
            <HomeStackSkills :stacks="stackLogos" maxItems="7" />
        </div>

    </div>
</template>

<script setup>
import { ref } from '#imports'
const stackLogos = ref([
    {logo: 'logos:figma', name: 'Figma'},
    {logo: 'logos:adobe-xd', name: 'Adobe Xd'},
    {logo: 'logos:adobe-photoshop', name: 'Adobe Photoshop'},
    {logo: 'logos:adobe-illustrator', name: 'Adobe Illustrator'},
    {logo: 'logos:javascript', name: 'Javascript'},
    {logo: 'logos:html-5', name: 'HTML 5'},
    {logo: 'logos:css-3', name: 'CSS 3'},
    {logo: 'logos:sass', name: 'Sass'},
    {logo: 'logos:vue', name: 'Vue.JS'},
    {logo: 'logos:react', name: 'React.JS'},
    {logo: 'logos:flutter', name: 'Flutter'},
    {logo: 'logos:nuxt', name: 'Nuxt.JS'}
])
</script>

<style lang="scss" scoped>
.cell {
    width: 100%;
    height: 100%;
    // border: 1px solid gray;
    z-index: 2;
}

@for $i from 0 to 10 {
 .cell:nth-child(10n + #{$i + 1}):hover ~ .mover {
    --positionX: #{$i};
    img{
        filter: grayscale(0);
    }
  }
  .cell:nth-child(n + #{10 * $i + 1}):nth-child(-n + #{10 * ($i + 1)}):hover ~ .mover {
    --positionY: #{$i};
  }
}
 .mover{
    --positionX: 5;
  --positionY: 5;
    position: absolute;
    transition: $transition_default;
    picture{
        transform: rotateX(calc(0deg - (var(--positionY) - 5) * -5deg))
        rotateY(calc((var(--positionX) - 5) * -5deg));
    }
    .developer{
        transform: rotateX(calc(0deg - (var(--positionY) - 5) * -5deg))
        rotateY(calc((var(--positionX) - 5) * -5deg));
    }
    .designer{
        transform: translateX(calc(0px - (var(--positionY) - 5) * 5px))
        translateY(calc((var(--positionX) - 5) * 5px));
        // &:before{
        //     transform: translateX(calc(0px - (var(--positionY) - 5) * -2px))
        //     translateY(calc((var(--positionX) - 5) * -2px));
        //     transition: $transition_default;
        // }
        // &:after{
        //     transform: translateX(calc(0px - (var(--positionY) - 5) * 4px))
        //     translateY(calc((var(--positionX) - 5) * 4px));
        //     transition: $transition_default;
        // }
    }
 }
.about__skills{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    place-items: center;
    height: 600px;
    // display: flex;
    // flex-direction: column;
    &__image{
        position: relative;
        width: fit-content;
        margin: 48px auto;
        &__picture{
            background: var(--secondary_gradient);
            transition: $transition_default;
            display: flex;
            border-radius: 400px;
            overflow: hidden;
            width: fit-content;
            width: 180px;
            align-items: flex-end;
            outline: 2px solid var(--text_color_transparent);
            outline-offset: 40px;
            margin: 16px;
            animation: pulse 2s infinite ease;
            img{
                min-width: 100%;
                min-height: 100%;
                object-fit: cover;
                position: relative;
                z-index: 1;
                transition: $transition_default;
            }
            &:hover{
                
            }
        }
        &__tag{
            transition: $transition_default;
            color: var(--bg_color);
            background-color: var(--text_color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            padding: 8px 12px;
            font-weight: 400;
            width: fit-content;
            position: absolute;
            top: 10%;
            right: -140px;

            &.artist{
                right: -120px;
                top: 74px;
                background-color: var(--bg_color);
                color: var(--text_color);
                font-size: 12px;
            }
            &.developer{
                background-color: var(--text_color);
                color: var(--bg_color);
                border: 1px solid var(--primary);
                box-shadow: 0 12px 40px 0 var(--text_color_transparent);
                top: 60%;
                // right: unset;
                left: 80%;
                border-radius: 8px;
                font-weight: normal;
                font-size: 12px;
                height: 100px;
                aspect-ratio: 1;
            }
            &.designer{
                background-color: var(--secondary);
                color: rgba(255,255,255,0.8);
                bottom: 10%;
                width: 80px;
                aspect-ratio: 1;
                top: unset;
                z-index: 1;
                right: 200px;
                border-radius: 50%;
                // text-transform: uppercase;
                font-size: 14px;
                text-align: center;
                padding: 8px;
                // box-shadow: 0 12px 32px 0 var(--text_color_transparent), 
                // inset -12px -12px 32px 0 rgba(0,0,0,0.6),
                // inset 12px 12px 32px 0 rgba(255, 255, 255, 0.2);
                span{
                    position: absolute;
                    opacity: 0;
                }
                &:before{
                    content: 'UI';
                    position: absolute;
                    top: -40px;
                    right: -50%;
                    width: 70px;
                    aspect-ratio: 1;
                    font-weight: bold;
                    font-size: 20px;
                    color: var(--pure_white);
                    border-radius: 50%;
                    background-color: rgba(0,0,0,0.4);
                    backdrop-filter: blur(12px);
                    display: grid;
                    place-items: center;
                    border: 1px solid var(--pure_white);
                    // box-shadow: 0 12px 32px 0 var(--text_color_transparent), 
                    // inset -12px -12px 32px 0 rgba(0,0,0,0.4),
                    // inset 12px 12px 32px 0 rgba(255, 255, 255, 0.2);
                }
                &:after{
                    content: 'UX';
                    position: absolute;
                    font-weight: bold;
                    font-size: 20px;
                    color: rgba(255,255,255,0.8);
                    top: 60px;
                    right: -20%;
                    width: 50px;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    background-color: var(--tertiary);
                    display: grid;
                    place-items: center;
                    // box-shadow: 0 12px 32px 0 var(--text_color_transparent), 
                    // inset -12px -12px 32px 0 rgba(0,0,0,0.6),
                    // inset 12px 12px 32px 0 rgba(255, 255, 255, 0.2);
                }

            }
            i{
                font-size: $size_28px;
                font-style: normal;
                margin-right: 12px;
            }
        }
    }
}
</style>