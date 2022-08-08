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
</style>