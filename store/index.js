export const state = () => ({
    currentPlace: "restaurant",
    restaurants: [],
    filteredRestaurants: [],
    markets: [],
    filteredMarkets: [],
    currentId: -1
  })
  
  export const mutations = {
    changePlace(state,value) {
        state.currentPlace = value
    },
    changeCurrentId(state,value) {
        state.currentId = value.id;
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
    }
  }

  export const actions = {
    // async getPlaces(ctx) {
    //     if(ctx.state.currentPlace == "restaurant") {
    //         let res = await fetch(`https://express24.uz/rest/v3/catalog/places-meta?root_category_id=1&d_width=720&d_height=330&limit=21&offset=0&cacheTime=600`);
    //         let resJson  = await res.json();
    //         ctx.commit("updateRestaurants",resJson.places)
    //     } else if(ctx.state.currentPlace == "market") {
    //         let res = await fetch(`https://express24.uz/rest/v3/catalog/places-meta?root_category_id=2&d_width=720&d_height=330&limit=21&offset=0&cacheTime=600`);
    //         let resJson  = await res.json();
    //         ctx.commit("updateMarkets",resJson.places)
    //     }
    // },
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
    // async getFilteredRestaurants(ctx) {
    //     let res = await fetch(`https://express24.uz/rest/v3/catalog/places-meta?root_category_id=1&d_width=720&d_height=330&category_id=${ctx.state.currentId}&limit=21&offset=0&cacheTime=600`);
    //     let resJson = await res.json();
    //     ctx.commit("updateFilteredRestaurants",resJson.places)
    // },
    // async getFilteredMarkets(ctx) {
    //     let res = await fetch(`https://express24.uz/rest/v3/catalog/places-meta?root_category_id=2&d_width=720&d_height=330&category_id=${ctx.state.currentId}&limit=21&offset=0&cacheTime=600`);
    //     let resJson = await res.json();
    //     ctx.commit("updateFilteredMarkets",resJson.places)
    // },
    async getFilteredPlaces(ctx) {
        if(ctx.state.currentPlace == "restaurant") {
            let res = await fetch(`https://express24.uz/rest/v3/catalog/places-meta?root_category_id=1&d_width=720&d_height=330&category_id=${ctx.state.currentId}&limit=21&offset=0&cacheTime=600`);
            let resJson = await res.json();
            ctx.commit("updateFilteredRestaurants",resJson.places)
        } else if(ctx.state.currentPlace == "market") {
            let res = await fetch(`https://express24.uz/rest/v3/catalog/places-meta?root_category_id=2&d_width=720&d_height=330&category_id=${ctx.state.currentId}&limit=21&offset=0&cacheTime=600`);
            let resJson = await res.json();
            ctx.commit("updateFilteredMarkets",resJson.places)
        }
    }
    
  }
    export const getters = {
        // allPlaces(state) {
        //     if(state.currentPlace == "restaurant") {
        //         if(state.currentId == -1) {
        //             return state.restaurants
        //         } else {
        //             return state.filteredRestaurants
        //         }
        //     } else if(state.currentPlace == "market") {
        //         if(state.currentId == -1) {
        //             return state.markets
        //         } else {
        //             return state.filteredMarkets
        //         }
        //     }
        //     // if(state.currentPlace=="restaurant" && state.currentId==-1) {
        //     //     return state.restaurants
        //     // } else {
        //     //     return state.filteredRestaurants
        //     // }
        // },
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