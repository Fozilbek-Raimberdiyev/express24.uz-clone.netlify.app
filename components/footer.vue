<template>
  <footer>
    <div class="footer-container flex items-center flex-wrap justify-between">
        <div class="left-item">
        <div class="top flex items-center">
            <p class="name mr-10">Ⓒ 2022 Express 24</p>
            <nav>
                <ul class="flex">
                    <li class="mr-3">О нас</li>
                    <li class="mr-3">Пользовательское соглашение</li>
                    <li class="mr-3">Контакты</li>
                </ul>
            </nav>
        </div>
        <div class="bottom flex items-center">
            <div class="social-links flex items-center flex-wrap justify-between">
                <img src="@/assets/image/facebook.jpg">
                <img src="@/assets/image/instagram.jpg">
                <img src="@/assets/image/telegram.jpg">
            </div>
            <nav>
                <ul class="flex items-center flex-wrap justify-between">
                    <li class="mr-3">Вопросы и ответы</li>
                    <li class="mr-3">Заявка на сотрудничество</li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="right-item">
        <div class="select-form rounded-xl">
            <select>
                <option value="rus">Русский</option>
                <option value="eng">English</option>
                <option value="uzb">O'zbek</option>
            </select>
        </div>
    </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    position: absolute;
    left: 0;
    right: 0;
    background: rgb(44,44,44);
    margin-top: 4rem;
}
.footer-container {
    width: 1150px;
    margin: 0 auto;
    padding: 2rem 0 5rem 0;
}
.left-item {
    flex-basis: 50%;
    margin-right: 10rem;
}
.name {
    color: rgb(242,242,200);
}
.footer-container li {
    color: #D3DEDE;
    font-size: 14px;
    cursor: pointer;
}
.select-form {
    background: #fff;
    padding: 15px 10px;
    cursor: pointer;
}
select, option {
    cursor: pointer;
}
.top,.bottom {
    position: relative;
}
.bottom {
    margin-top: 10px;
}
nav {
    margin-left: 13rem;
    position: absolute;
    left: 0;
}
</style>