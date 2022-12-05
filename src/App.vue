<script setup>
import { RouterView } from "vue-router";
import NavbarVue from "./components/Navbar.vue";
import FooterVue from "./components/Footer.vue";
</script>

<template>
  <div class="bg-slate-50 lg:grid lg:grid-cols-12 lg:gap-x-8">
    <div
      class="px-16 py-12 bg-white shadow-sm xl:px-24 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4"
    >
      <NavbarVue />
      <RouterView />
      <FooterVue />
    </div>
  </div>
</template>
