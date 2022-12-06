<template>
  <div
    class="flex flex-col mb-8 pb-8 border-b border-gray-200 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:mb-12 lg:pb-12"
  >
    <div class="flex-auto lg:col-span-7 xl:col-span-8">
      <div class="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
        <slot name="hero-image">
          <img :src="project.imageSrc" :alt="project.imageAlt" />
        </slot>
      </div>
    </div>
    <div class="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
      <h3 class="text-xl font-raleway font-semibold text-gray-900">
        <slot name="title">{{ project.title }}</slot>
      </h3>
      <p class="mt-2 font-lora text-sm text-gray-500">
        <slot name="description">{{ project.description }}</slot>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: Object,
});
</script>
