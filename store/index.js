export const state = () => ({
    currentPlace: "restaurant",
    restaurants: [],
    filteredRestaurants: [],
    markets: [],
    filteredMarkets: [],
    currentId: -1,
    loading: false,
    isOpen :false
  })
  
  export const mutations = {
    changePlace(state,value) {
        state.currentPlace = value
    },
    changeCurrentId(state,value) {
        state.currentId = value.id;
    },
    changeCurrentIdByManually(value) {
        state.currentId = value
    },
    updateRestaurants(state,value) {
        state.restaurants = value
    },
    updateFilteredRestaurants(state,value) {
        state.filteredRestaurants = value
    },
    updateMarkets(state,value) {
        state.markets = value
    },
    updateFilteredMarkets(state,value) {
        state.filteredMarkets = value
    },
    changeLoading(value) {
        state.loading = value
    },
    changeIsopen(state,value) {
        state.isOpen = value
    }
  }

  export const actions = {
    async getRestaurants(ctx) {
        let res = await fetch(`https://express24.uz/rest/v3/catalog/places-meta?root_category_id=1&d_width=720&d_height=330&limit=21&offset=0&cacheTime=600`);
        let resJson  = await res.json();
        ctx.commit("updateRestaurants",resJson.places)
    },
    async getMarkets(ctx) {
        let res = await fetch(`https://express24.uz/rest/v3/catalog/places-meta?root_category_id=2&d_width=720&d_height=330&limit=21&offset=0&cacheTime=600`);
        let resJson  = await res.json();
        ctx.commit("updateMarkets",resJson.places)
    },
    async getFilteredPlaces(ctx) {
        // if(ctx.state.currentPlace == "restaurant") {
        //     let res = await fetch(`https://express24.uz/rest/v3/catalog/places-meta?root_category_id=1&d_width=720&d_height=330&category_id=${ctx.state.currentId}&limit=21&offset=0&cacheTime=600`);
        //     let resJson = await res.json();
        //     ctx.commit("updateFilteredRestaurants",resJson.places)
        // } else if(ctx.state.currentPlace == "market") {
        //     let res = await fetch(`https://express24.uz/rest/v3/catalog/places-meta?root_category_id=2&d_width=720&d_height=330&category_id=${ctx.state.currentId}&limit=21&offset=0&cacheTime=600`);
        //     let resJson = await res.json();
        //     ctx.commit("updateFilteredMarkets",resJson.places)
        // }
    },
    async getFilteredrRestaurants(ctx) {
            try{
                ctx.commit("changeLoading", true)
                let res = await fetch(`https://express24.uz/rest/v3/catalog/places-meta?root_category_id=1&d_width=720&d_height=330&category_id=${ctx.state.currentId}&limit=21&offset=0&cacheTime=600`);
                let resJson = await res.json();
                ctx.commit("updateFilteredRestaurants",resJson.places)
                if(resJson.places.length<1) {
                    ctx.commit("changeLoading", false)
                }
                console.log("getFilteredrRestaurants()")
            } finally {
                ctx.commit("changeLoading", false)
            }
    },
    async getFilteredMarkets(ctx) {
            try{
                ctx.commit("changeLoading", true)
                let res = await fetch(`https://express24.uz/rest/v3/catalog/places-meta?root_category_id=2&d_width=720&d_height=330&category_id=${ctx.state.currentId}&limit=21&offset=0&cacheTime=600`);
                let resJson = await res.json();
                ctx.commit("updateFilteredMarkets",resJson.places)
                if(resJson.places.length < 1) {
                    ctx.commit("changeLoading", false)
                }
            } finally {
                ctx.commit("changeLoading", false)
            }
    }
  }
    export const getters = {
        allPlaces(state) {
            if(state.currentPlace == "restaurant") {
                if(state.currentId == -1) {
                    return state.restaurants
                } else {
                    return state.filteredRestaurants
                }
            } else if(state.currentPlace == "market") {
                if(state.currentId == -1) {
                    return state.markets
                } else {
                    return state.filteredMarkets
                }
            }
        }
     }
