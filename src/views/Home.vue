<script setup>
import ProjectItemVue from "../components/ProjectItem.vue";
import { onMounted, onUnmounted, ref, computed } from "vue";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFilterStore } from "../stores/filter";
import projects from "../content/projectsdata";
import { RouterLink } from "vue-router";

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
        class="grid grid-cols-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-raleway font-semibold mb-10"
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
    <RouterLink
      to="/projects"
      class="group flex justify-center items-center tracking-widest hover:tracking-[.25em] font-raleway text-sm text-gray-700 space-x-3 transition-all duration-600"
    >
      <p>browse all my work</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 hover:cursor-pointer text-gray-500 group-hover:translate-x-3 transition"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </RouterLink>
  </div>
</template>
