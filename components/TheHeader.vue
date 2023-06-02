<template>
    <header id="header" class="header">
        <div class="container__fluid">
            <div class="container__fluid__logo">
                <TheLogo />
            </div>
            <nav class="container__fluid__menu">
                <AppMenu />
            </nav>
            <div class="container__fluid__actions">
                <AppLangSwitcher />
                <AppColorSwitcher />
            </div>
        </div>
    </header>
</template>

<script setup>
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
        transition: $transition_default;
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
            grid-template-columns: repeat(3,1fr);
            align-items: center;
            &__logo{
                display: flex;
            }
            &__menu{
                @media(max-width: $br_mobile){
                    display: none;
                }
            }
            &__actions{
                display: flex;
                align-items: center;
                justify-content: flex-end;
                grid-gap: 16px;
            }
        }
    }
</style>