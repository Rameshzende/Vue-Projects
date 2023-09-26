console.log(1)

const app = Vue.createApp({
    data() {
        return {
            hideShow: false,
            name : 'Ramesh Jhande'
        }
    },
    methods: {
        toggleHideAndShow() {
            this.hideShow = !this.hideShow
        },
        handleEvent () {
            console.log('event')
        }
    }
}) 

app.mount('#id')