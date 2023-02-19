<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  project: Object,
});
</script>

<template>
  <RouterLink
    :to="'/projects/' + project.shortTitle"
    class="group block aspect-w-16 aspect-h-9 col-span-1 lg:col-span-2 bg-white shadow overflow-hidden hover:cursor-pointer transition"
  >
    <div class="flex flex-col items-center justify-center">
      <p
        class="text-center text-gray-900 text-md lg:text-lg z-50 hidden group-hover:block font-raleway font-semibold transition"
      >
        {{ project.title }}
      </p>
    </div>

    <img
      class="object-cover group-hover:opacity-10 transition"
      :src="project.imageSrc"
      :alt="project.imageAlt"
    />
  </RouterLink>
</template>
