import { defineStore } from 'pinia'

export const userLangStore = defineStore ('userLanguage', {
    state: () => ({ 
        language: 'en'
    })
})