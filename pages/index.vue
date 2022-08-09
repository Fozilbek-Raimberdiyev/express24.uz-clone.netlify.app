<template>
 <div class="container">
   <navbar></navbar>
   <tab-banner></tab-banner>
   <news-and-sales></news-and-sales>
   <main-component></main-component>
   <footer-vue></footer-vue>
 </div>
</template>

<script>
import MainComponent from '~/components/mainComponent.vue'
import NewsAndSales from '~/components/newsAndSales.vue'
import tabBanner from '~/components/tabBanner.vue'
import footerVue from '~/components/footer.vue'
export default {
  components: { tabBanner, NewsAndSales, MainComponent,footerVue },
  data() {
    return {
      title: "Сервис доставки эды и товаров"
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
        hid: 'description',
        name: 'description',
        content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
}
.container {
    width: 1150px;
    margin: 0 auto;
}
@media screen and (max-width: 500px) {
  .container {
    width: 90%;
    margin: 0 auto;
    overflow-x: hidden;
  }
}
</style>