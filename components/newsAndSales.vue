<template>
  <div class="mt-5">
    <h1 class="title text-xl mb-5">Новости и акции</h1>
    <swiper :options="options" class="offers flex items-center justify-between flex-wrap">
        <swiper-slide class="offer m-1" v-for="(offer,index) in offers" :key="index">
            <div>
                <img :src="offer.cover" alt="offer img" class="rounded-lg">
            </div>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
data() {
    return {
        offers: [],
        options: {
            slidesPerView: "auto",
            loopedSlides: 4.5,
            autoplay: {
                delay: 5000,
            },
        }
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
@media screen and (max-width: 768px) {
    .offer {
        flex-basis: 45%;
    }
}
</style>