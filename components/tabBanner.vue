<template>
  <div class="flex items-center tab">
    <div class="restaurant h-28 rounded-lg">
        <p @click="changePlace('restaurant')" class="title text-lg" :class="{resActive : currentPlace=='restaurant'}">Рестораны</p>
    </div>
    <div class="market h-28 rounded-lg">
        <p @click="changePlace('market')" class="title text-lg" :class="{marActive : currentPlace=='market'}">Маркет</p>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState([
            "currentPlace"
        ])
    },
    methods : {
        ...mapMutations([
            "changePlace"
        ])
    },
    
} 
</script>

<style scoped>
.tab {
    margin-top: 7rem;
}
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
    .title.resActive {
        background: #F7E233;
        color: #000;
    }
    .title.marActive {
        background: #F7E233;
        color: #000;
    }
    .title{
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        transition: all ease .4s;
    }
    .title:hover {
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