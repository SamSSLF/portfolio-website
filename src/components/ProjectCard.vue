<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  project: Object,
});
</script>

<template>
  <RouterLink
    :to="'/projects/' + project.shortTitle"
    class="group block aspect-w-16 aspect-h-9 col-span-1 lg:col-span-2 bg-white shadow rounded-lg overflow-hidden hover:cursor-pointer hover:scale-105 transition"
  >
    <p
      class="text-center top-24 text-xl z-50 hidden group-hover:block font-raleway font-bold transition"
    >
      {{ project.title }}
    </p>
    <img
      class="object-cover group-hover:opacity-30 transition"
      :src="project.imageSrc"
      :alt="project.imageAlt"
    />
  </RouterLink>
</template>
