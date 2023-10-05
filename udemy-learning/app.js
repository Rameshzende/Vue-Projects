console.log(1)

const app = Vue.createApp({
    data() {
        return {
            hideShow: false,
            name : 'Ramesh Jhande',
            movieList: [{
                movieName: 'The Little Marmede',
                releaseDate: '09/26/2023',
                genre: 'Kids',
                isFav: true
            },{
                movieName: 'Martin King',
                releaseDate: '06/26/1993',
                genre: 'Freedom,',
                isFav: false
            },{
                movieName: 'Seven',
                releaseDate: '09/26/2011',
                genre: 'Suspense',
                isFav: true
            }]
        }
    },
    methods: {
        toggleHideAndShow() {
            this.hideShow = !this.hideShow
        },

        handleEvent () {
            console.log('event')
        },

        onFevSelect(movie) {
            debugger
            console.log(movie)
            movie.isFav = !movie.isFav
        }
    }
}) 

app.mount('#id')