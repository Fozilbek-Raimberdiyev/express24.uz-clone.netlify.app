<template>
  <div class="container">
    <Navbar></Navbar>
    <div class="info-container" v-for="(restaurant,index) in restaurants" :key="index">
        <div class="info-img">
            <img v-if="restaurant.picture" :src="restaurant.picture.src" alt="image restaurant">
        </div>
        <div class="info-text">
            <h1 class="name mb-4 font-bold text-xl">{{restaurant.name}}</h1>
            <p class="categories mb-3" v-for="(category,index) in restaurant.categories" :key="index">{{category.name}}</p>
            <p class="booking-price">Заказы от: <span>{{restaurant.minCheckoutSum}} сум</span></p>
            <p class="delivery-time">Время доставки: <span>{{restaurant?.deliveryTimeRange?.min}}-{{restaurant?.deliveryTimeRange?.max}} мин</span></p>
            <p class="delivery-price flex mt-2"><img src="@/assets/image/car.jpg" alt="delivery">Сумма доставки  <span>{{restaurant.deliveryPrice}}  сум</span></p>
        </div>
        <div class="info-right flex">
            <button class="yellow-btn flex rounded items-center mr-2"><img src="@/assets/image/symbol-1.jpg"> Информации о заведении</button>
            <button class="yellow-btn flex rounded items-center"><img src="@/assets/image/symbol-2.jpg">{{restaurant?.reviews?.average}}. ({{restaurant.reviews?.count}}) отзывов</button>
        </div>
    </div>
    
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue'
export default {
    data() {
        return {
            restaurants: [],
            title: ""
        };
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
  },
    methods: {
        async getById() {
            let res = await fetch(`https://express24.uz/rest/v1/catalog/places/${this.$route.params.id}?width=180&height=180&cacheTime=600&SEO=true`);
            let resJSon = await res.json();
            this.restaurants = resJSon.list;
            this.getTitle()
        },
        getTitle() {
        this.title = this.restaurants.map(el => {
                return el.name
            })

        }
    },
    mounted() {
        this.getById();
    },
    components: { Navbar }
}
</script>

<style scoped>
.container {
    width: 1150px;
    margin: 0 auto;
}
.info-container {
    display: flex;
    align-items: center;
    margin: 2rem 0;
}
.info-img {
    flex-basis: 10%;
}
.info-img img {
    width: 100%;
    height: 120px;
    border-radius: 1.2rem;
}
.info-text {
    flex-basis: 50%;
    margin-left: 1rem;
    margin-right: 1rem;
}
.info-right {
    flex-basis: 35%;
    align-self: flex-end;
}
.categories{
    display: inline-block;
    margin: 0 5px;
}
.info-container span {
    color: #2C2C2C !important;
}
.info-container p {
    color: #7B7B7B;
}
.delivery-price {
    margin-left: -5px;
}
.yellow-btn {
    background: #FDE61D;
    padding: 3px 15px;
    font-size: 14px;
}
</style>