import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealList from '../views/MealList.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayOut from '../components/GuestLayOut.vue'
import MealDetails from '../views/MealDetails.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [ {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/by-name/:name?',
            name: 'byName',
            component: MealsByName
        },
        {
            path: '/by-letter/:latter?',
            name: 'byLatter',
            component: MealsByLetter
        },
        {
            path: '/by-ingredient/:ingredient?',
            name: 'byIngredient',
            component: MealsByIngredient
        },
        {
            path: '/meal/:id',
            name: 'mealDetails',
            component: MealDetails
        },
        {
            path: '/latter/:latter',
            name: 'byLetter',
            component: MealsByLetter
        },]
    }, 
    {
        path: '/guest',
        component: GuestLayOut
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router