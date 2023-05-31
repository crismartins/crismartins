<template>
  <div class="loading__overlay">
      <div class="loading__overlay__animation">
          <svg
            id="Camada_2"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 509.68 466"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="157.2"
                y1="463.55"
                x2="334.94"
                y2="153.18"
                gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#2cf5b5" />
                <stop offset="1" stop-color="#3737f4" />
              </linearGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="992.64"
                y1="457.55"
                x2="1170.38"
                y2="147.18"
                gradientTransform="translate(1345.12 460) rotate(-180)"
                xlink:href="#linear-gradient"
              />
            </defs>
            <g id="Camada_1-2">
              <g>
                <g>
                  <g>
                    <polygon
                      class="cls-3"
                      points="353.46 181.76 383.04 233 284.31 404 318.96 464 388.57 464 353.53 404.12 452.32 233 388.17 121.88 353.46 181.76"
                    />
                    <path
                      class="cls-2"
                      d="M388.24,2L121.5,464h67.92L388.24,122l64.09,111-98.73,171,34.64,60,107.39-186c16.08-27.85,16.08-62.15,0-90L388.24,2Z"
                    />
                    <polygon
                      class="cls-4"
                      points="353.46 181.76 383.04 233 452.32 233 388.17 121.88 353.46 181.76"
                    />
                    <polygon
                      class="cls-4"
                      points="284.31 404 318.96 464 388.57 464 353.53 404.12 284.31 404"
                    />
                    <polygon
                      class="cls-1"
                      points="388.24 2 121.5 464 189.42 464 388.24 122 388.24 2"
                    />
                  </g>
                  <g>
                    <polygon
                      class="cls-3"
                      points="156.23 284.24 126.64 233 225.37 62 190.73 2 121.11 2 156.16 61.88 57.36 233 121.52 344.12 156.23 284.24"
                    />
                    <path
                      class="cls-2"
                      d="M121.44,464L388.18,2h-67.92L121.44,344,57.36,233,156.09,62,121.44,2,14.06,188c-16.08,27.85-16.08,62.15,0,90l107.39,186Z"
                    />
                    <polygon
                      class="cls-4"
                      points="156.23 284.24 126.64 233 57.36 233 121.52 344.12 156.23 284.24"
                    />
                    <polygon
                      class="cls-4"
                      points="225.37 62 190.73 2 121.11 2 156.16 61.88 225.37 62"
                    />
                    <polygon
                      class="cls-6"
                      points="121.44 464 388.18 2 320.26 2 121.44 344 121.44 464"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <polygon
                      class="cls-5"
                      points="353.46 181.76 383.04 233 284.31 404 318.96 464 388.57 464 353.53 404.12 452.32 233 388.17 121.88 353.46 181.76"
                    />
                    <path
                      class="cls-5"
                      d="M388.24,2L121.5,464h67.92L388.24,122l64.09,111-98.73,171,34.64,60,107.39-186c16.08-27.85,16.08-62.15,0-90L388.24,2Z"
                    />
                    <polygon
                      class="cls-5"
                      points="353.46 181.76 383.04 233 452.32 233 388.17 121.88 353.46 181.76"
                    />
                    <polygon
                      class="cls-5"
                      points="284.31 404 318.96 464 388.57 464 353.53 404.12 284.31 404"
                    />
                  </g>
                  <g>
                    <polygon
                      class="cls-5"
                      points="156.23 284.24 126.64 233 225.37 62 190.73 2 121.11 2 156.16 61.88 57.36 233 121.52 344.12 156.23 284.24"
                    />
                    <path
                      class="cls-5"
                      d="M121.44,464L388.18,2h-67.92L121.44,344,57.36,233,156.09,62,121.44,2,14.06,188c-16.08,27.85-16.08,62.15,0,90l107.39,186Z"
                    />
                    <polygon
                      class="cls-5"
                      points="156.23 284.24 126.64 233 57.36 233 121.52 344.12 156.23 284.24"
                    />
                    <polygon
                      class="cls-5"
                      points="225.37 62 190.73 2 121.11 2 156.16 61.88 225.37 62"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes rotate {
    0%{
        transform:  rotate(0deg) scale(1);
    }
    50% {
        transform:  rotate(180deg) scale(1.2);
    }
    100% {
        transform: rotate(360deg) scale(1);
    }
}
.loading__overlay{
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    display: grid;
    place-items: center;
    background-color: rgba($color: var(--dark), $alpha: 0.8);
    
    &__animation{
        animation: rotate 2.5s infinite;

        .cls-1,.cls-2,.cls-3,.cls-4,.cls-6{
            animation: opacity 1s infinite alternate-reverse;
            display: none;
        }

        @keyframes opacity {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        width: 100px;
        .cls-1 {
        fill: url(#linear-gradient);
        }
        .cls-2 {
        fill: #3737f4;
        }
        .cls-3 {
        fill: #2cf5b5;
        }
        .cls-4 {
        fill: #2d99fa;
        }
        .cls-5 {
        fill: none;
        stroke: var(--light);
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 4px;
        }
        .cls-6 {
        fill: url(#linear-gradient-2);
        }
    }
}
</style>