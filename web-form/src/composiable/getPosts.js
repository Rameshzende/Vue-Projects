import { ref } from "vue"

const getPosts = () => {

    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('https://dummyjson.com/products')
            if(!data.ok) {
                throw Error('No Data is available');
            } else {
                let res = await data.json()
                posts.value = res
            }
        } catch(error) {
            error.value = error.message
        }
    }

    return {posts, error, load }
}

export default getPosts