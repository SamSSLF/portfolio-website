<script setup>
import { RouterView } from "vue-router";
import NavbarVue from "./components/Navbar.vue";
import FooterVue from "./components/Footer.vue";
</script>

<template>
  <div class="bg-slate-50 lg:grid lg:grid-cols-12 lg:gap-x-8">
    <div
      id="list"
      class="px-6 py-8 sm:px-16 sm:py-12 bg-white shadow-md xl:px-10 lg:col-span-8 lg:col-start-3 xl:col-span-8 xl:col-start-3"
    >
      <NavbarVue />
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

      <FooterVue />
    </div>
  </div>
</template>
