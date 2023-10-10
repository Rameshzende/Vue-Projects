<template>
    <form @submit.prevent="handleSubmit">
        <label>Title:</label>
        <input type="text" required v-model="title">

        <label for="">Details:</label>
        <textarea required v-model="details"></textarea>

        <button>Submit</button>
    </form>
</template>

<script>

export default {
    data() {
        return {
            title: '',
            details: ''
        }
    },
    methods: {
        handleSubmit() {
            let project = {
                title: this.title,
                details: this.details,
                complete: false
            }
            fetch(`http://localhost:3000/projects`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(project)
            }).then(() => {
                this.$router.push('/')
            })
        }
    }
}

</script>

<style>
form {
    background: rgb(229, 221, 221);
    padding: 20px;
    border-radius: 10px;
}

label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
}

input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #bbb;
    box-sizing: border-box;
}

textarea {
    border: 1px solid #bbb;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
}

form button {
    display: block;
    margin: 20px auto 0;
    background: rgb(100, 208, 100);
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
}
</style>