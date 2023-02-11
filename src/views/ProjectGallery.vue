<script setup>
import projects from "../content/projectsdata";
import ProjectCard from "../components/ProjectCard.vue";
</script>

<template>
  <ul role="list" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :project="project"
      id="project"
    ></ProjectCard>
  </ul>
</template>
