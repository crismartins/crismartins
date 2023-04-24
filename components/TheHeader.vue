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
        </div>
    </header>
</template>

<script setup>
    const stickHeader = ref(null)
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
        document.addEventListener("scroll", onScroll)
        function onScroll(){
            const element = document.getElementById("header")
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        }
    })
</script>

<style lang="scss" scoped>
    .header{
        padding: 20px 0;
        position: fixed;
        width: 100%;
        &.active{
            
        }
        @media(max-width: $br_mobile){
            position: unset;
        }
        .container__fluid{
            display: flex;
            justify-content: space-between;
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
        }
    }
</style>