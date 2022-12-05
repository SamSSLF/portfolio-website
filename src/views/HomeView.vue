<script setup>
import ProjectItemVue from "../components/ProjectItem.vue";

const projects = [
  {
    title: "A Renewable Energy Forecast App to Inform Household Energy Usage",
    description:
      "Disrupting the personal fitness industry by personlising your gym workout with your very own personal trainer.",
    imageSrc: "../assets/hot-air-balloons.jpg",
    imageAlt: "hot air balloon festival",
  },
  {
    title: "Design and Build of an Environmental Monitoring Portal",
    description:
      "Disrupting the personal fitness industry by personlising your gym workout with your very own personal trainer.",
    imageSrc: "../assets/hot-air-balloons.jpg",
    imageAlt: "hot air baloon festival",
  },
  {
    title: "Design of a Smart Gym Mobile App",
    description:
      "Disrupting the personal fitness industry by personlising your gym workout with your very own personal trainer.",
    imageSrc: "../assets/hot-air-balloons.jpg",
    imageAlt: "hot air baloon festival",
  },
  {
    title: "A Lightweight Tandem Bicycle Frame",
    description:
      "Disrupting the personal fitness industry by personlising your gym workout with your very own personal trainer.",
    imageSrc: "../assets/hot-air-balloons.jpg",
    imageAlt: "hot air baloon festival",
  },
  {
    title: "Juno Circular Toy Company",
    description:
      "Disrupting the personal fitness industry by personlising your gym workout with your very own personal trainer.",
    imageSrc: "../assets/hot-air-balloons.jpg",
    imageAlt: "hot air baloon festival",
  },
];
</script>

<template>
  <ProjectItemVue
    v-for="project in projects"
    :key="project.title"
    :project="project"
  ></ProjectItemVue>
  <!-- <ProjectItemVue
    ><template #hero-image>
      <img src="../assets/hot-air-balloons.jpg" alt="desk lamp" />
    </template>
    <template #title>Juno Circular Toy Company</template>
    <template #description
      >Disrupting the personal fitness industry by personlising your gym workout
      with your very own personal trainer.</template
    ></ProjectItemVue
  > -->
</template>
