<script setup>
import projects from "../content/projectsdata";
import ProjectCard from "../components/ProjectCard.vue";
</script>

<template>
  <div class="col-start-2 col-span-1">
    <ul
      role="list"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
        id="project"
      ></ProjectCard>
    </ul>
  </div>
</template>
