<template>
  <div class="flex items-center mt-10">
    <div class="restaurant h-28 rounded-lg">
        <p @click="$store.commit('change','restaurant')" class="title text-lg">Рестораны</p>
    </div>
    <div class="market h-28 rounded-lg">
        <p @click="$store.commit('change','market')" class="title title-hover text-lg">Маркет</p>
    </div>
    <button @click="seeCurrentTab()">Ko'rish</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentTab: "restaurant"
        }
    },
    methods : {
        seeCurrentTab() {
        console.log(this.$store?.state?.currentTab)    
    }
    },
    
} 
</script>

<style scoped>
    .restaurant {
        display: flex;
        flex-direction: column;
        background: url("https://express24.uz/img/category-restaurants.jpg");
        background-size: cover;
        width: 400px;
        justify-content: flex-end;
        margin-right: 1rem;
    }
    .market {
        display: flex;
        flex-direction: column;
        background: url("https://express24.uz/img/category-markets.jpg");
        background-size: cover;
        width: 760px;
        justify-content: flex-end;
    }
    .title {
        background: #F7E233;
        padding: 3px 10px;
        cursor: pointer;
        font-weight: 600;
    }
    .title-hover {
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        transition: all ease .4s;
    }
    .title-hover:hover {
        background: #F7E233;
        color: #000;
    }
    p {
        border-radius: 5px;
    }
    @media screen and (max-width: 500px) {
        .restaurant {
            width: 47%;
            background-size: cover;
        }
        .market {
            width: 47%;
        }
    }
</style>