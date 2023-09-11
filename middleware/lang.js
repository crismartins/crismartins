import { userLangStore } from '@/store/language'

export default defineNuxtRouteMiddleware(async () => {
    const userLang = userLangStore()
    userLang.language = useCookie('pt')
})