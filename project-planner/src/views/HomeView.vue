<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current"/>
    <div v-if="projects.length">
      <div v-for="project in filterObject" :key="project.id">
          <ProjectDetails :project="project" @afterDelete="afterDelete" @complete="complete"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectDetails from '../components/ProjectDetails.vue'
import FilterNav from '../components/FilterNav.vue'

export default {
  name: 'HomeView',

  components: {
    ProjectDetails,
    FilterNav
  },

  data() {
    return {
      projects: [],
      current: 'all'
    }
  },

  methods: {
    afterDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id != id
      })
    },

    complete(id) {
     let p = this.projects.find((project) => {
      return project.id = id
     })
     p.complete = !p.complete
    }
  },

  mounted() {
     fetch('http://localhost:3000/projects')
    .then((res) => res.json())
    .then((data) => this.projects = data)
  },

  computed: {
    filterObject() {
      if(this.current == 'completed') {
        return this.projects = this.projects.filter(el => el.complete)
      }

      if(this.current == 'inprogress') {
        return this.projects = this.projects.filter(el => !el.complete)
      }

      return this.projects
    }
  }
}
</script>
