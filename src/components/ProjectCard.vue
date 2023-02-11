<script setup>
const props = defineProps({
  project: Object,
});
</script>

<template>
  <li
    class="aspect-w-16 aspect-h-9 col-span-1 lg:col-span-2 flex flex-col bg-white shadow rounded-lg overflow-hidden"
  >
    <img class="object-cover" :src="project.imageSrc" :alt="project.imageAlt" />
  </li>
</template>
