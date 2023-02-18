<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  project: Object,
});
</script>

<template>
  <div
    class="flex flex-col mb-8 pb-8 border-b border-gray-200 xl:grid xl:grid-cols-12 xl:items-center xl:gap-x-8 xl:mb-12 xl:pb-12"
  >
    <RouterLink
      :to="'/projects/' + project.shortTitle"
      class="flex-auto xl:col-span-8"
    >
      <div
        class="aspect-w-16 aspect-h-9 overflow-hidden bg-gray-100 hover:cursor-pointer"
      >
        <slot name="hero-image">
          <img
            :src="project.imageSrc"
            :alt="project.imageAlt"
            class="object-cover"
          />
        </slot>
      </div>
    </RouterLink>
    <div class="lg:col-span-5 xl:mt-0 xl:col-span-4">
      <RouterLink
        :to="'/projects/' + project.shortTitle"
        class="text-xl md:text-2xl 3xl:text-3xl font-raleway font-semibold text-gray-900 mb-2 hover:cursor-pointer"
      >
        <slot name="title">{{ project.title }}</slot>
      </RouterLink>
      <div class="mt-1 mb-4">
        <span
          v-for="tag in project.tags"
          :key="tag.index"
          class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 mr-2"
          >{{ tag }}
        </span>
      </div>

      <p
        class="mt-2 font-raleway font-light text-xs text-gray-500 line-clamp-4 leading-normal 3xl:text-sm"
      >
        <slot name="description">{{ project.description }}</slot>
      </p>
      <RouterLink :to="'/projects/' + project.shortTitle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mt-8 mr-6 float-right text-gray-400 hover:cursor-pointer hover:translate-x-3 hover:scale-150 transition"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </RouterLink>
    </div>
  </div>
</template>
