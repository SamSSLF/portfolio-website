<template>
  <div
    class="flex flex-col mb-8 pb-8 border-b border-gray-200 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:mb-12 lg:pb-12"
  >
    <div class="flex-auto lg:col-span-7 xl:col-span-8">
      <div class="aspect-w-16 aspect-h-9 overflow-hidden bg-gray-100">
        <slot name="hero-image">
          <img
            :src="project.imageSrc"
            :alt="project.imageAlt"
            class="object-cover"
          />
        </slot>
      </div>
    </div>
    <div class="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
      <h3 class="text-xl font-raleway font-semibold text-gray-900">
        <slot name="title">{{ project.title }}</slot>
      </h3>
      <div class="mt-1 mb-4">
        <span
          v-for="tag in project.tags"
          :key="tag.index"
          class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 mr-2"
          >{{ tag }}
        </span>
      </div>

      <p class="mt-2 font-lora text-sm text-gray-500 line-clamp-4">
        <slot name="description">{{ project.description }}</slot>
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 mt-8 float-right text-gray-400"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: Object,
});
</script>
