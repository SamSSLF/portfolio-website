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

const enter = (el) => {
  gsap.from(el, {
    opacity: 0,
    y: -100,
    ease: "power1",
    duration: 2,
  });
};

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
  <div class="col-start-2 col-span-1">
    <transition appear @enter="enter" :css="false">
      <header
        id="intro"
        class="grid grid-cols-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-raleway font-semibold mb-16"
      >
        <div class="col-span-full xl:col-span-11 3xl:col-span-8 leading-snug">
          My name is Samantha. I am a
          <span
            class="bg-gradient-to-b from-gray-400 to-gray-500 bg-clip-text text-transparent"
            >Design Engineer</span
          >
          based in London and I want to
          <span
            class="bg-gradient-to-b from-gray-400 to-gray-500 bg-clip-text text-transparent"
            >design seamless, delightful user experiences</span
          >
          and create the world's most valuable products.
        </div>
      </header>
    </transition>
    <h1 class="tracking-widest text-xs font-semibold mb-6">
      FEATURED PROJECTS
    </h1>
    <div id="list" ref="main">
      <ProjectItemVue
        v-for="project in filteredProjects"
        :key="project.title"
        :project="project"
        id="project"
      ></ProjectItemVue>
    </div>
  </div>
</template>
