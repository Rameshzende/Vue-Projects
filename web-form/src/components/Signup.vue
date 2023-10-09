<template>
 <form>
    <label>Email: </label>
    <input type="email" required v-model="email"/>

    <label>Password: </label>
    <input type="password" required v-model="password"/>

    <label>Role: </label>
    <select v-model="role">
        <option value="webDesigner">Web Designer</option>
        <option value="developer">Developer</option>
    </select>

    <label for="skill">Skill:</label>
    <input type="text" placeholder="please skill by comma separated" @keyup="addSkill" v-model="tempSkill">
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>
</form>

 <p> {{ email }} {{ password }} {{ role }}</p>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            tempSkill: '',
            skills: []
        }
    }, 
    methods: {
        addSkill(e) {
            if(e.key === ',' && this.tempSkill) {
                this.skills.push(this.tempSkill)
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter((item) => {
                return item != skill
            })
        }
    }
}
</script>

<style>
form {
   max-width: 240px;
   margin: 30px auto;
   background: white;
   text-align: left;
   padding: 40px;
   border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #5555;
}

.pill {
    background: #eee;
    display: inline-block;
    padding: 2px 6px;
    border-radius: 10px;
    margin: 5px;
    cursor: pointer;
}

</style>