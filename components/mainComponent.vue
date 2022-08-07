<template>
  <div>
    <div class="tab flex flex-wrap  items-center">
        <span class="tab-btn mb-3 mr-3 rounded-xl" v-for="(category,index) in categories" :key="index">{{category.name}}</span>
    </div>
    <h1 v-if="restaurants.length" class="title text-xl">Все рестораны</h1>
    <div class="restaurants flex flex-wrap items-center">
        <div class="restaurant" v-for="(restaurant,i) in restaurants" :key="i">
            <div class="restaurant-image">
                <img :src="restaurant.detail_picture.src" alt="restaurant-img" class="rounded-xl">
                <div class="restaurant-logo">
                <img :src="restaurant.picture.src" alt="restaurant-logo" class="rounded-xl">
                </div>
            </div>
            <div class="restaurant-info shadow-lg rounded-md">
                <p class="restaurant-name text-lg">{{restaurant.name}}</p>
                <p class="restaurants-type"></p>
                <div class="restaurant-rating flex flex-wrap items-center">
                <img src="@/assets/image/star.jpg" alt="rating-star" class="w-20">
                <p class="rating-text">{{restaurant.reviews.average}} ({{rate(restaurant)}})</p>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [],
            restaurants: [],
        }
    },
    methods: {
        async getCategories() {
            let res = await fetch("https://express24.uz/rest/v2/catalog/categories/?root_category_id=1");
            let resJson  = await res.json();
            this.categories = resJson.list
        },
        async getRestaurants() {
            let res = await fetch("https://express24.uz/rest/v3/catalog/places-meta?root_category_id=1&d_width=720&d_height=330&limit=21&offset=0&cacheTime=600");
            let resJson  = await res.json();
            this.restaurants = resJson.places;
            console.log(this.restaurants)
        },
        rate(item) {
            if(item?.reviews?.count > 500) {
                return "500+"
            } else  {
                return item?.reviews?.count
            }
        } 
    },
    mounted() {
        this.getCategories(),
        this.getRestaurants()
    }
}
</script>

<style scoped>
.tab-btn {
    background: #F0F0F0;
    padding: 10px 15px;
    cursor: pointer;
}
.restaurant {
    flex-basis: 30%;   
    margin: 1.5rem;
    margin-left: 0;
    transition: all ease .4s;
    cursor: pointer;
}
.restaurant:hover {
    transform: translateY(-5%);
}
.restaurant-image {
   position: relative; 
}

.restaurant img {
    width: 100%;
    height: 170px;
}
.restaurant-logo {
    width: 4rem;
    position: absolute;
    right: 2rem;
    bottom: -15%;
    z-index: 5;
    border-radius: 0.5rem;
}
.restaurant-logo img {
    height: 4rem;
}
.restaurant-name {
    margin: 1rem;
    margin-bottom: 0;
    font-weight: 700;
}
.restaurant-rating {
    margin-left: 0.8rem;
}
.restaurant-rating img {
    width: 1.5rem;
    height: 1rem;
    margin-right: 6px;
}
</style>