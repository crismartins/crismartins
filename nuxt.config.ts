import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        //head
        head: {
            charset: 'UTF-8',
            viewport: 'width=device-width, initial-scale=1.0',
            title: 'Cris martins Designer & Developer',
            meta: [
                { 
                    name: 'description', 
                    content: 
                    "Hey you! My name is Cristopher Martins and I've been workin as UI/UX Designer and Frontent Developer for over 10 years. Here you are able to see the most expressive projects that I had the opportunity to work with." 
                }
            ],
        },
        //project pages & layout transitions
        pageTransition: { 
            name: 'page', mode: 'out-in' 
        },
        layoutTransition: { 
            name: 'layout', mode: 'out-in' 
        }
    },
    //main scss
    css: ["@/assets/scss/main.scss"],
    //vite
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/variables.scss" as *;'
                }
            }
        },
        plugins: [
            VueI18nVitePlugin({
                include: [
                    resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
                ]
            })
        ]
    },
    modules: [
        'nuxt-icon',
        '@nuxt/image-edge',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
    ],
    //color mode
    colorMode: {
        preference: 'system', // default value of $colorMode.preference    
        fallback: 'light', // fallback value if not system preference found    
        classSuffix: '-theme',
    },
    //nuxt image
    image: {
        //external images
        domains: [
        'images.pexels.com'
        ],
        //aliases
        alias: {
            pexels: 'https://images.pexels.com'
        },
        //image sizes
        presets: {
            cover: {
                modifiers: {
                fit: "cover",
                format: "jpg",
                width: 300,
                height: 300,
                },
            },
        },
        //responsive screens for nuxt images
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        },
    },
    //pinia config
    pinia: {
        autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
})
