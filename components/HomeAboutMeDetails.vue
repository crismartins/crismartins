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
                        Digital Illustrator<br /> in spare time
                        <NuxtImg 
                            src="/images/illustration_hand.png"
                            
                            format="webp"
                        />
                    </span>
                </strong>
                <strong class="about__skills__image__tag developer">
                    >_
                    <span>
                        Creative
                        Dev.
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
        </div>

    </div>
</template>

<script setup>

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
  }
  .cell:nth-child(n + #{10 * $i + 1}):nth-child(-n + #{10 * ($i + 1)}):hover ~ .mover {
    --positionY: #{$i};
  }
  .cell:nth-child(10n + #{$i + 1}):hover ~ .mover {
    --positionZ: #{$i};
  }
}
 .mover{
    --positionX: 5;
  --positionY: 5;
  --positionZ: 5;
    position: absolute;
    transition: $transition_default;
    perspective: 800px;
    .about__skills__image{
        transform: rotateX(calc(0deg - (var(--positionY) - 5) * 5deg))
        rotateY(calc((var(--positionX) - 5) * 5deg));
        picture{
            img{
                transform: translate(calc(var(--positionZ) * 1px));
            }
            
        }
    }
    .experience{
        transform: translate(calc(var(--positionZ) * -1px));
    }
    .developer{
        transform: translate(calc(var(--positionZ) * 4px));
    }
    .artist{
        transform: translate(calc(var(--positionZ) * 2px));
    }
    .designer{
        transform: translate(calc(var(--positionZ) * 2px));
        &:before{
            transform: translate(calc(var(--positionZ) * 3px));
        }
        &:after{
            transform: translate(calc(var(--positionZ) * 5px));
        }
    }
 }
.about__skills{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    place-items: center;
    height: 600px;
    &__image{
        position: relative;
        width: fit-content;
        margin: 48px auto;
        transition: $transition_default;
        &__picture{
            background: var(--primary);
            display: flex;
            border-radius: 400px;
            overflow: hidden;
            width: 180px;
            align-items: flex-end;
            outline: 2px solid var(--text_color_transparent);
            outline-offset: 40px;
            margin: 16px;
            img{
                min-width: 100%;
                min-height: 100%;
                object-fit: cover;
                position: relative;
                z-index: 1;
                transition: $transition_default;
            }
        }
        &__tag{
            transition: $transition_default;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 40px;
            padding: 8px 20px;
            font-weight: 600;
            width: fit-content;
            position: absolute;
            top: 10%;
            right: -140px;
            transition: $transition_default;

            &.experience{
                color: var(--bg_color);
                background-color: var(--text_color);
                animation: pulse 2s infinite ease;
            }

            &.artist{
                left: -140px;
                top: 50px;
                background-color: var(--bg_color);
                color: var(--text_color);
                font-size: 12px;
                border: 2px solid var(--text_color_transparent);
                z-index: 2;
                img{
                    position: absolute;
                    transform: rotate(-20deg);
                    width: 60px;
                    right: -40px;
                    top: -40px;
                }
            }
            &.developer{
                background-color: rgba(0,0,0,0.8);
                backdrop-filter: blur(20px);
                color: var(--pure_white);
                border: 1px solid var(--bg_color_transparent);
                box-shadow: 4px 12px 20px 0 var(--text_color_transparent);
                top: 90%;
                left: 20%;
                padding: 12px;
                border-radius: 8px;
                font-weight: normal;
                font-size: 14px;
                height: 80px;
                z-index: 1;
                justify-content: flex-start;
                align-items: flex-start;
                font-family: Courier;
                letter-spacing: 2px;
                span{
                    overflow: hidden;
                    border-right: .15em solid var(--primary);
                    white-space: nowrap;
                    animation: 
                    typing 4.5s steps(15, end) infinite,
                    blink-caret .8s step-end infinite;
                }
            }
            &.designer{
                background-color: var(--neutral);
                color: rgba(0,0,0,0.8);
                bottom: 0;
                width: 80px;
                aspect-ratio: 1;
                top: unset;
                z-index: 3;
                right: 220px;
                border-radius: 20px;
                font-size: 14px;
                text-align: center;
                padding: 8px;
                box-shadow: 0 12px 32px 0 var(--text_color_transparent), 
                inset -12px -12px 32px 0 rgba(0,0,0,0.4),
                inset 12px 12px 32px 0 rgba(255, 255, 255, 0.8);
                span{
                    position: absolute;
                    opacity: 0;
                }
                &:before{
                    content: 'UX';
                    position: absolute;
                    top: -60%;
                    right: -30%;
                    width: 80px;
                    aspect-ratio: 1;
                    font-weight: bold;
                    font-size: 20px;
                    color: var(--pure_white);
                    border-radius: 20px;
                    background-color: rgba(0,0,0,0.4);
                    backdrop-filter: blur(12px);
                    display: grid;
                    place-items: center;
                    border: 1px solid var(--pure_white);
                    transition: $transition_default;
                    box-shadow: 0 12px 32px 0 var(--text_color_transparent);
                }
                &:after{
                    content: 'UI';
                    position: absolute;
                    font-weight: bold;
                    font-size: 20px;
                    color: rgba(255,255,255,0.8);
                    bottom: 130%;
                    border-radius: 20px;
                    right: 30%;
                    width: 80px;
                    aspect-ratio: 1;
                    background: var(--secondary_gradient);
                    display: grid;
                    place-items: center;
                    transition: $transition_default;
                    box-shadow: 2px 2px 0 0 var(--secondary),4px 12px 32px 0 var(--tertiary);
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