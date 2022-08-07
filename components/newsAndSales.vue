<template>
  <div class="mt-5">
    <h1 class="title text-xl mb-5">Новости и акции</h1>
    <div class="offers flex items-center justify-between flex-wrap">
        <div class="offer m-1" v-for="(offer,index) in offers" :key="index">
            <div>
                <img :src="offer.cover" alt="offer img" class="rounded-lg">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        offers: []
    }
},
methods : {
    async getData() {
        let res = await fetch("https://express24.uz/rest/v2/catalog/promotions?width=480&height=300&rootCategoryId=1");
        let resJson = await res.json()
        this.offers = resJson
    }
},
mounted() {
    this.getData()
}
}
</script>

<style>
.offer {
    flex-basis: 23%;
}
.offer img {
    width: 100%;
}
</style>