export const state = () => ({
    currentTab: "restaurant",
    restaurants: [],
    markets: []
  })
  
  export const mutations = {
    change(state,value) {
        state.currentTab = value
    },
    changeRestaurants(state,value) {
        state.restaurants = value
    },
    changeMarkets(state,value) {
        state.markets = value
    }
  }

  export const actions = {
    
  }