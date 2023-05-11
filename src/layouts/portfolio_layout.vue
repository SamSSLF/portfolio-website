<script setup>
import { RouterView } from "vue-router";
import NavbarVue from "../components/Navbar.vue";
import FooterVue from "../components/Footer.vue";
</script>

<template>
  <div class="bg-slate-50 lg:grid lg:grid-cols-12 lg:gap-x-8">
    <div
      id="list"
      class="grid grid-cols-[24px_1fr_24px] py-8 sm:grid-cols-[56px_1fr_56px] lg:grid-cols-[64px_1fr_64px] col-span-full sm:py-12 bg-white shadow-md lg:col-span-8 lg:col-start-3 xl:col-span-8 xl:col-start-3"
    >
      <NavbarVue class="col-start-2 col-span-1" />
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

      <FooterVue class="col-span-full" />
    </div>
  </div>
</template>
