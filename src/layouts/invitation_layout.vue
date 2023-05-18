<script setup>
import { RouterView } from "vue-router";
</script>
C:\Users\shenl\Desktop\Sam Codes\portfolio-website\src\assets\wave.png
<template>
  <div class="bg-lime-200 lg:grid lg:grid-cols-12 lg:gap-x-8">
    <div class="lg:col-start-1 lg:col-span-2 lg:bg-contain lg:bg-repeat-y" style="background-image: url('src/assets/wave.png')"></div>
    
    <div
      id="list"
      class="grid grid-cols-[24px_1fr_24px] py-8 sm:grid-cols-[56px_1fr_56px] lg:grid-cols-[64px_1fr_64px] col-span-full sm:py-12 bg-lime-200 lg:col-span-8 lg:col-start-3"
    >
      <RouterView v-slot="{ Component }">
        <transition
          enter-active-class="transition ease-out duration-500 transform"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-250 transform"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
    <div class="lg:col-end-13 lg:col-span-2 lg:bg-contain lg:bg-repeat-y lg:bg-right" style="background-image: url('src/assets/waveinverted.png')"></div>
  </div>
</template>
