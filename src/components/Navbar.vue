<script setup>
import NavbarLink from "./NavbarLink.vue";
import { useFilterStore } from "../stores/filter";
import { RouterLink } from "vue-router";

const store = useFilterStore();
</script>

<template>
  <div>
    <div class="flex items-center w-full">
      <RouterLink
        to="/"
        class="p-1 bg-gradient-to-bl from-pink-300 via-orange-200 to-cyan-500 rounded-full mr-auto"
      >
        <div class="relative h-20 w-20 p-1 rounded-full bg-white">
          <img
            class="absolute inset-0 m-auto rounded-full"
            src="../assets/sam-meme.gif"
            alt="avatar"
          />
        </div>
      </RouterLink>
      <div class="hidden lg:block lg:space-x-10">
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/projects">Work</NavbarLink>
        <NavbarLink to="/cv">CV</NavbarLink>
      </div>
    </div>

    <nav class="hidden lg:flex mb-10 lg:justify-between font-normal">
      <div class="lg:space-x-8">
        <!-- <NavbarLink to="/" @click="store.show('featured')">Featured</NavbarLink>
        <NavbarLink to="/projects" @click="store.show('all')"
          >Projects</NavbarLink
        > -->
        <!-- <NavbarLink to="/ux" @click="store.show('ux')">UI/UX</NavbarLink>
        <NavbarLink to="/dev" @click="store.show('dev')">Web Development</NavbarLink>
        <NavbarLink to="/engineering" @click="store.show('eng')">Engineering Analysis</NavbarLink> -->
      </div>
      <!-- <div class="lg:space-x-8">
        <NavbarLink to="/contact">Contact</NavbarLink>
        <NavbarLink to="/cv">CV</NavbarLink>
      </div> -->
    </nav>
  </div>

  <!-- <nav class="font-raleway font-semibold text-slate-300">
    <ol class="flex justify-between mb-16">
      <RouterLink to="/" class="hover:text-slate-500 active:text-violet-400"
        >MEng Design Engineering</RouterLink
      >
      <div class="space-x-16">
        <RouterLink to="/contact" class="hover:text-slate-500"
          >Contact</RouterLink
        >
        <RouterLink to="/cv" class="hover:text-slate-500">CV</RouterLink>
      </div>
    </ol>
  </nav> -->
</template>
