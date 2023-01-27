<script setup>
import { RouterView } from "vue-router";
import NavbarVue from "./components/Navbar.vue";
import FooterVue from "./components/Footer.vue";
// import { onMounted, onUnmounted, onBeforeMount, ref } from "vue";
// import gsap from "gsap";

// onMounted(() => {
//   gsap.from("#list", {
//     duration: 1,
//     opacity: 0,
//     scale: 0,
//     // y: 200,
//     // ease: "power1",
//     stagger: {
//       // from: "edges",
//       each: 0.1,
//     },
//   });
// });
</script>

<template>
  <div class="bg-slate-50 lg:grid lg:grid-cols-12 lg:gap-x-8">
    <div
      id="list"
      class="px-16 py-12 bg-white shadow-md xl:px-10 lg:col-span-8 lg:col-start-3 xl:col-span-8 xl:col-start-3"
    >
      <NavbarVue />
      <RouterView />
      <FooterVue />
    </div>
  </div>
</template>
