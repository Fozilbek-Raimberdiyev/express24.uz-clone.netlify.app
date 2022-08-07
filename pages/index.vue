<template>
 <div class="container">
   <navbar></navbar>
   <tab-banner></tab-banner>
   <news-and-sales></news-and-sales>
   <main-component></main-component>
 </div>
</template>

<script>
import MainComponent from '~/components/mainComponent.vue'
import NewsAndSales from '~/components/newsAndSales.vue'
import tabBanner from '~/components/tabBanner.vue'
export default {
  components: { tabBanner, NewsAndSales },

}
</script>

<style>,
    MainComponent
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