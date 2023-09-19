import axiosClient from '../axiosClient'

export async function searchMealsList({commit}, keyword)  {
    let responseData = await axiosClient.get(`search.php?s=${keyword}`)
    commit('setSearchedMeals', responseData?.data)
}

export async function searchMealsByLatter({commit}, letter)  {
    let responseData = await axiosClient.get(`search.php?f=${letter}`)
    commit('setMealsByLatter', responseData?.data)
}

export async function searchMealsByIngredient({commit}, ingredient)  {
    let responseData = await axiosClient.get(`/filter.php?i=${ingredient}`)
    commit('setMealsByIngredient', responseData?.data)
}