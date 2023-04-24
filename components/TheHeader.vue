<template>
    <header id="header" class="header">
        <div class="container__fluid">
            <TheLogo />
            <nav>
                <ul>
                    <li v-for="item in menuItems" :key="item.title">
                        <nuxt-link :to="item.link">
                            {{ item.title }}
                            {{ item.index }}
                        </nuxt-link>
                    </li>
                </ul>
            </nav>

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
        padding: 20px 0;
        position: fixed;
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
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
            nav{
                ul{
                    display: flex;
                    li{
                        a{
                            padding: 12px 20px;
                            color: $dark;
                            &:hover{
                                color: $primary;
                            }
                        }
                    }
                }
            }
            &__options{
                display: flex;
                justify-content: flex-end;
            }
        }
    }
</style>