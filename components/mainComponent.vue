<template>
  <div v-if="$fetchState" class="wrapper">
    <div class="container">
      <swiper :options="options" class="tab flex flex-wrap items-center mt-10">
      <swiper-slide
        class="tab-btn mb-3 rounded-xl"
        v-for="(category, index) in categories"
        :key="index"
        >
        <button @click="currentIndex=index"><span :class="{active : currentIndex==index}" @click="changeCurrentId(category)">{{ category.name }}</span></button></swiper-slide>
    </swiper>
    <h1 class="title text-xl">Все рестораны</h1>
    <div v-if="!$fetchState.pending" class="restaurants sm:flex flex-wrap items-center">
      <div class="restaurant" v-for="(restaurant, i) in allPlaces" :key="i">
        <router-link :to="`vendors/${restaurant.id}`">
          <div class="restaurant-image">
            <img
              v-if="restaurant.detail_picture"
              :src="restaurant.detail_picture?.src"
              alt="restaurant-img"
              class="rounded-xl"
            />
            <div class="restaurant-logo">
              <img
                v-if="restaurant.picture"
                :src="restaurant.picture?.src"
                alt="restaurant-logo"
                class="rounded-xl"
              />
            </div>
          </div>
          <div class="restaurant-info shadow-lg rounded-md">
            <p class="restaurant-name text-lg">{{ restaurant?.name }}</p>
            <p class="restaurants-type"></p>
            <div class="restaurant-rating flex flex-wrap items-center">
              <img src="@/assets/image/star.jpg" alt="rating-star" class="w-20" />
              <p class="rating-text">
                {{ restaurant?.reviews?.average }} ({{ rate(restaurant) }})
              </p>
            </div>
          </div>
        </router-link>
      </div>
      
    </div>
    <button v-if="allPlaces?.length" class="btn rounded" @click="seeMore">
      Показать еще
    </button>
    <div v-if="$fetchState.pending" class="loading text-xxl"><img src="@/assets/image/loading.gif" alt="loading"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      categories: [],
      currentIndex: -1,
      limit: 21,
      places: [],
      offset : 0,
      options: {
        slidesPerView: 8,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1000: {
            slidesPerView: 7.5,
            spaceBetween: 40,
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      allPlaces: "allPlaces",
    }),
    ...mapState(["currentPlace", "currentId", "filteredRestaurants", "filteredMarkets", "restaurants", "markets"]),
  },
  watch: {
    currentPlace: {
      handler(newPlace) {
        if (newPlace == "restaurant") {
        this.changeCurrentIdByManually(-1)
        this.getRestaurants();
        this.getCategoriesRestaurants();
        } else {
        this.changeCurrentIdByManually(-1)
        this.getMarkets();
        this.getCategoriesMarkets();
        }
      },
      deep: true,
    },
    currentId() {
        if(this.currentPlace == "restaurant") {
            try{
                this.getFilteredrRestaurants()
            } finally {
            }
        } else {
            try {
                this.getFilteredMarkets()
            } finally {
            }
        }
    },
  },
  methods: {
    async getCategoriesRestaurants() {
      let res = await fetch(
        "https://express24.uz/rest/v2/catalog/categories/?root_category_id=1"
      );
      let resJson = await res.json();
      this.categories = resJson.list;
    },
    async getCategoriesMarkets() {
      let res = await fetch(
        "https://express24.uz/rest/v2/catalog/categories/?root_category_id=2"
      );
      let resJson = await res.json();
      this.categories = resJson.list;
    },
    rate(item) {
      if (item?.reviews?.count > 500) {
        return "500+";
      } else {
        return item?.reviews?.count;
      }
    },
    async seeMore() {
      this.offset += this.limit;
      if(this.currentPlace== "restaurant") {
        if (this.currentId == -1) {
        let res = await fetch(
          `https://express24.uz/rest/v3/catalog/places-meta?root_category_id=1&d_width=720&d_height=330&limit=${this.limit}&offset=${this.offset}&cacheTime=600`
        );
        let resJson = await res.json();
        // this.restaurants = ;
        this.updateRestaurants(this.restaurants.concat(resJson.places))
      } else {
        let res = await fetch(
          `https://express24.uz/rest/v3/catalog/places-meta?root_category_id=1&d_width=720&d_height=330&category_id=${this.categoryId}&limit=${this.limit}&offset=${this.offset}&cacheTime=600`
        );
        let resJson = await res.json();
        // this.filteredRestaurants = ;
        this.updateFilteredRestaurants(this.filteredRestaurants.concat(resJson.places))
        console.log(this.filteredRestaurants)
      }
      } else {
        if (this.currentId == -1) {
        let res = await fetch(
          `https://express24.uz/rest/v3/catalog/places-meta?root_category_id=2&d_width=720&d_height=330&limit=${this.limit}&offset=${this.offset}&cacheTime=600`
        );
        let resJson = await res.json();
        // this.markets = ;
        this.updateMarkets(this.markets.concat(resJson.places))
      } else {
        let res = await fetch(
          `https://express24.uz/rest/v3/catalog/places-meta?root_category_id=2&d_width=720&d_height=330&category_id=${this.categoryId}&limit=${this.limit}&offset=${this.offset}&cacheTime=600`
        );
        let resJson = await res.json();
        // this.filteredMarkets = ;
        this.updateFilteredMarkets(this.filteredMarkets.concat(resJson.places))
        console.log(this.filteredMarkets)
      }
      }
    },
    ...mapActions(["getRestaurants", "getMarkets", "getFilteredPlaces", "getFilteredrRestaurants", "getFilteredMarkets"]),
    ...mapMutations(["changeCurrentId", "changeCurrentIdByManually", "updateRestaurants","updateFilteredRestaurants", "updateMarkets", "updateFilteredMarkets"]),
  },

  async fetch() {
    await this.getCategoriesRestaurants();
    await this.getRestaurants();
  }
};
</script>

<style scoped>
.wrapper {
    position: relative;
}
.tab-btn {
  margin: 10px 5px;
}
.tab-btn span {
  background: #f0f0f0;
  padding: 5px 15px;
  display: inline-block;
  cursor: pointer;
  transition: all ease 0.3s;
  border-radius: 15px;
}
.tab-btn span:hover {
  background: #fde61d;
}
.tab-btn span.active {
  background: #fde61d;
}
.restaurants {
  min-height: 500px;
}
.restaurant {
  flex-basis: 30%;
  margin: 1.5rem;
  margin-left: 0;
  transition: all ease 0.4s;
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
.btn {
  background: #fde61d;
  border: none;
  padding: 5px 15px;
  font-size: 18px;
  width: 150px;
  margin: 0 auto;
  display: block;
}
.loading {
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    color: #000;
    align-items: center;
    position: absolute;
    top: 30%;
    left: 40%;
}

</style>
