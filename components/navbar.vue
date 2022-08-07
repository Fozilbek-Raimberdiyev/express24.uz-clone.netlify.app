<template>
  <div class="wrapper">
    <div class="container">
        <header class="header mt-3">
            <nav class="navbar pb-3">
                <ul class="navbar-items flex items-center"> 
                    <li class="logo">
                        <img src="https://express24.uz/img/header-logo.svg
" alt="logo">
                    </li>
                    <li>
                        <div class="search-form">
                            <input type="search" placeholder="Поиск" class="rounded">
                        </div>
                    </li>
                    <li class="addres">
                        <div class="flex items-center justify-evenly">
                            <img src="@/assets/image/delivery.jpg" alt="adress-logo">
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
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
</style>