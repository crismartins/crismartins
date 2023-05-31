<template>
    <header id="header" class="header">
        <div class="container__fluid">
            <div class="container__fluid__navigation">
                <TheLogo />
                <nav class="container__fluid__navigation__menu">
                    <ul>
                        <li v-for="item in menuItems" :key="item.title">
                            <nuxt-link :to="item.link">
                                <span>{{ item.title }}</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="container__fluid__options">
                <AppLangSwitcher />
                <AppColorSwitcher />
            </div>
        </div>
    </header>
</template>

<script setup>
    const menuItems = ref(
        [
            {title: 'Home', link: '/'},
            {title: 'About', link: '/about'},
            {title: 'Services', link: '/about'},
            {title: 'Portfolio', link: '/about'},
            {title: 'Contact', link: '/about'}
        ]
    )

    
    onMounted(() => {
        let lastScroll = 0;
        let element = document.getElementById("header")
        document.addEventListener("scroll", (e) => {
            let position = window.pageYOffset;
            
            if (position <= 0) {
                element.classList.add("active");
                element.classList.remove("inactive");
            }

            if (position > lastScroll && !element.classList.contains("inactive")) {
                // down
                element.classList.remove("active");
                element.classList.add("inactive");
            } else if (
                position < lastScroll &&
                element.classList.contains("inactive")
            ) {
                // up
                element.classList.remove("inactive");
                element.classList.add("active");
            }
            lastScroll = position;
        })
    })
</script>

<style lang="scss" scoped>
    .header{
        position: fixed;
        height: 120px;
        display: flex;
        width: 100%;
        transition: $default_transition;
        top: 0;
        &.inactive{
            top: -100%;
        }
        &.active{
            top: 0;
        }
        @media(max-width: $br_mobile){
            position: unset;
        }
        .container__fluid{
            display: grid;
            grid-template-columns: 30% 70%;
            align-items: center;
            &__navigation{
                display: flex;
                &__menu{
                    // position: fixed;
                    // left: 0;
                    // top: 20%;
                    // background-color: rgba($color: var(--light), $alpha:0.4) ;
                    // backdrop-filter: blur(20px);
                    @media(max-width: $br_mobile){
                        display: none;
                    }
                    ul{
                        display: flex;
                        // flex-direction: column;
                        li{
                            margin: 0 8px;
                            a{
                                padding: 8px 16px;
                                display: block;
                                font-size: 14px;
                                font-weight: 400;
                                color: var(--dark);
                                span{
                                    position: relative;
                                    &:after{
                                        content: "";
                                        bottom: 0;
                                        left: 0;
                                        z-index: -1;
                                        position: absolute;
                                        width: 0%;
                                        height: 2px;
                                        background-color: var(--dark);
                                        transition: $default_transition;
                                    }
                                }
                                &:hover, &.router-link-exact-active{
                                    span{
                                        &::after{
                                            width: 100%;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            &__options{
                display: flex;
                justify-content: flex-end;
                grid-gap: 16px;
            }
        }
    }
</style>