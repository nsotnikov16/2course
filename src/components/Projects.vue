<template>
  <section v-if="projects && projects.length" class="section projects">
    <div class="container">
      <div class="section__title">Проекты</div>
      <div class="projects__list">
        <Project
          v-for="(project, index) in projects"
          :key="index"
          :data="project"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Project from "./Project.vue";
import { mapState } from "vuex";

export default {
  computed: mapState({ projects: (s) => s.projects }),
  components: { Project },
};
</script>

<style></style>
