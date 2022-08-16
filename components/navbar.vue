<template>
    <div class="wrapper">
        <div class="container  md:visible">
            <header class="header mt-3">
                <nav class="navbar pb-3">
                    <ul class="navbar-items flex items-center"> 
                        <li class="logo">
                            <img src="https://express24.uz/img/header-logo.svg" alt="logo">
                        </li>
                        <li>
                            <div class="search-form">
                                <input type="search" placeholder="Поиск" class="rounded">
                            </div>
                        </li>
                        <li class="addres">
                            <div class="flex items-center justify-evenly">
                                <i class="bi bi-compass text-green-400 text-4xl mr-2"></i>
                                <p class="addres-text text-sm">Адрес не указан</p>
                            </div>
                        </li>
                        <li class="login-page">
                            <ul class="flex items-center justify-between">
                                <li class="text-lg font-bold">Вход</li>
                                <li class="text-lg">Регистрация</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>

    <div class="res-menu">
        <div class="res-container">
            <div class="res-navbar md:hidden flex items-center justify-between text-gray-100 bg-gray-900 absolute left-0 right-0 top-0 py-4 font-semibold text-sm">
            <div class="res-icon-menu"><i @click="toggle=true" class="bi bi-list"></i></div>
            <div class="res-logo flex items-center"><img src="@/static/favicon.png" alt="logo"><span>Express24</span></div>
            <div class="res-search"><i class="bi bi-search"></i></div>
        </div>
        <b-sidebar  shadow v-model="toggle" :no-close-on-backdrop="true"> 
            <template>
                    <div class="res-left-modal md:hidden fixed bg-white">
                    <i @click="toggle=false" class="bi bi-x absolute text-white text-lg right-5 top-5 cursor-pointer"></i>
                    <div class="res-location bg-gray-900 px-5 pt-8 pb-5 text-gray-100 text-sm">
                        <div class="res-top-location flex items-center">
                            <i class="bi bi-compass text-green-400 text-4xl mr-2"></i>
                            <p class="addres-text text-sm">Адрес не указан</p>
                        </div>
                        <div class="bottom">Ваше местоположение неопределено</div>
                    </div>
                    <div class="res-select my-4">
                    <select>
                        <option value="rus">Русский</option>
                        <option value="eng">English</option>
                        <option value="uzb">O'zbek</option>
                    </select>
                </div>
                <nav class="res-left-modal-navigation px-5">
                    <div class="res-sign-form flex items-center">
                    <div class="res-sign-in flex">
                        <i class="bi bi-person"></i>
                        <p>Вход</p>
                    </div>
                    <div class="res-sign-up">
                        <p>Регистрация</p>
                    </div>
                </div>
                <div class="res-home flex">
                    <i class="bi bi-house"></i>
                    <p><router-link to="/">Главная страница</router-link></p>
                </div>
                <div class="res-basket flex">
                    <i class="bi bi-cart3"></i>
                    <p>Корзина</p>
                </div>
                </nav>
                <div class="res-social-links flex justify-between">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-telegram"></i>
                </div>
                </div>
            </template>
            </b-sidebar>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toggle: false
        }
    },
    computed: {
    },
    mounted() {
    }
}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
.header::after {
    position: absolute;
    content: "";
    height: 1px;
    background: #E6E6E6;
    left: 0;
    right: 0;
}
.logo {
    margin-right: 14rem;
}
.logo img{
    width: 11rem;
}
.search-form {
    width: 350px;
}
.search-form input {
    padding: 10px 5px;
    border: 1px solid #E6E6E6;
    width: 100%;
}
.addres {
    margin: 0 1rem;
    flex-basis: 20%;
}
.login-page {
    margin-left: 1rem;
}
.login-page li {
    margin: 0 0.5rem;
}
.navbar li {
    cursor: pointer;
}
.res-navbar > div {
    cursor: pointer;
}
.res-navbar > div:first-child {
    margin-left: 5px;
}
.res-navbar > div:last-child{
    margin-right: 5px;
}
.res-logo img {
    width: 3rem;
}
.res-logo span {
    text-transform: uppercase;
}
.res-left-modal {
    transition: all ease-in .3s;
}
a:hover *{
    text-decoration: none !important;
}
@media screen and (max-width: 768px){
    .container {
        display: none;
    }
    .res-container {
        width: 300px;
        margin: 0 auto;
    }
    .res-left-modal {
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 999;
        width: 320px;
    }
    .res-select {
        width: 90%;
        margin: 0 auto;
        border: 1px solid #F3F3F3;
        padding: 5px 3px;
        margin-top: 10px;
        border-radius: 8px;
    }
    .res-select select {
        background: inherit;
    }
    .res-left-modal-navigation > div {
        margin: 1rem 0;
        font-size: 20px;
        cursor: pointer;
    }
    .res-left-modal-navigation > div p {
        margin-left: 1rem;
    }
    .res-left-modal-navigation i > {
        margin-right: 10px;
        display: inline-block;
    }
    .res-social-links {
        width: 150px;
        margin: 0 auto;
        margin-top: 10rem;
    }
    .res-social-links i {
        font-size: 12px;
        cursor: pointer;
    }
    
}
</style>