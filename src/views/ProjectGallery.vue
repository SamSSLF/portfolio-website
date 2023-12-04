<script setup>
import { ref, computed } from "vue";
import projectsData from "../content/projectsdata";
import ProjectCard from "../components/ProjectCard.vue";

const filter = ref("All");

const setFilter = (category) => {
  filter.value = category;
};

const filteredProjects = computed(() => {
  if (filter.value === "All") {
    return projectsData;
  } else {
    return projectsData.filter((project) => project.category === filter.value);
  }
});
</script>

<template>
  <div class="col-start-2 col-span-1 mb-6">
    <!--Large Screen Menu-->
    <ul class="hidden md:flex space-x-10">
      <li
        class="text-slate-400 cursor-pointer uppercase tracking-widest text-xs font-semibold"
        :class="{ 'text-slate-900': filter === 'All' }"
        @click="setFilter('All')"
      >
        All
      </li>
      <li
        class="text-slate-400 cursor-pointer uppercase tracking-widest text-xs font-semibold"
        :class="{
          'text-slate-900': filter === 'Web Development',
        }"
        @click="setFilter('Web Development')"
      >
        Web Development
      </li>
      <li
        class="text-slate-400 cursor-pointer uppercase tracking-widest text-xs font-semibold"
        :class="{
          'text-slate-900': filter === 'Product Design',
        }"
        @click="setFilter('Product Design')"
      >
        Product Design
      </li>
      <li
        class="text-slate-400 cursor-pointer uppercase tracking-widest text-xs font-semibold"
        :class="{
          'text-slate-900': filter === 'Design Engineering',
        }"
        @click="setFilter('Design Engineering')"
      >
        Design Engineering
      </li>
    </ul>
    <!--Mobile Menu-->
    <select
      name="stream"
      id="stream"
      class="md:hidden mt-2 block w-fit py-1 pl-3 pr-10 uppercase tracking-widest text-xs border-0 focus:ring-2 focus:ring-indigo-600 rounded-xl sm:text-sm sm:leading-6"
      v-model="filter"
    >
      <option selected class="py-1.5">All</option>
      <option class="py-1.5">Web Development</option>
      <option class="py-1.5">Product Design</option>
      <option class="py-1.5">Design Engineering</option>
    </select>
  </div>
  <div class="col-start-2 col-span-1">
    <ul
      role="list"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        :project="project"
        id="project"
      ></ProjectCard>
    </ul>
  </div>
</template>
