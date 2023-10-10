<template>
    <div class="projects" :class="{ complete : project.complete }">
        <div class="action">
            <h3 @click="showDetails = !showDetails"> {{ project.title }}</h3>
            <div class="icons">
                <router-link :to="{name : 'editProject', params: { id : project.id }}">
                    <span class="material-icons">
                      edit
                    </span>
                </router-link>
                <span @click="deleteProject" class="material-icons">
                    delete
                </span>
                <span @click="projectStatus" class="material-icons tic">
                    done
                </span>
            </div>
        </div>
        <div v-if="showDetails" class="details">
            <p> {{ project.details }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            showDetails: false,
            url: 'http://localhost:3000/projects/' + this.project.id
        }
    },
    methods: {
        deleteProject() {
            fetch(this.url, { method: 'DELETE' })
                .then(() => {
                    this.$emit('afterDelete', this.project.id)
                })
        },
        projectStatus() {
            fetch(this.url, {
                method: 'PATCH', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({
                    complete: !this.project.complete
                })
            }).then(() => {
                this.$emit('complete', this.project.id)
            })
        }
    }
}
</script>

<style>
.projects {
    margin: 20px auto;
    background: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    border-left: 4px solid #e90074;
}

.projects.complete  {
    border-left: 4px solid #17dc2e !important;
}


.projects.complete .tic{
    color: #17dc2e;
}

h3 {
    cursor: pointer;
}

.action {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.material-icons {
    font-size: 20px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}
</style>