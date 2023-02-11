<script setup>
import ProjectItemVue from "../components/ProjectItem.vue";
import { onMounted, onUnmounted, ref, computed } from "vue";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFilterStore } from "../stores/filter";
import projects from "../content/projectsdata";

// gsap.registerPlugin(ScrollTrigger);

const store = useFilterStore();

const filteredProjects = computed(() => {
  let tempProjects = projects;
  tempProjects = tempProjects.filter((item) => {
    return item.filter.includes(store.filter);
  });
  return tempProjects;
});

// const main = ref();
// const ctx = ref();

// onMounted(() => {
//   ctx.value = gsap.context((self) => {
//     const filteredProjects = self.selector("#project");
//     filteredProjects.forEach((project) => {
//       gsap.from(project, {
//         opacity: 0,
//         scale: 0.8,
//         duration: 1,
//         scrollTrigger: {
//           trigger: project,
//           start: "top bottom",
//           end: "75% bottom",
//           scrub: true,
//         },
//       });
//     });
//   }, main.value); // <- Scope!
// });

// onUnmounted(() => {
//   ctx.value.revert(); // <- Easy Cleanup!
// });
</script>

<template>
  <div id="list" ref="main">
    <ProjectItemVue
      v-for="project in filteredProjects"
      :key="project.title"
      :project="project"
      id="project"
    ></ProjectItemVue>
  </div>
</template>
