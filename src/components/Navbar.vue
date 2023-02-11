<script setup>
import gsap from "gsap";
import NavbarLink from "./NavbarLink.vue";
import { useFilterStore } from "../stores/filter";

const enter = (el) => {
  gsap.from(el, {
    opacity: 0,
    y: -100,
    ease: "power1",
    duration: 2,
  });
};

const store = useFilterStore();
</script>

<template>
  <div class="flex mb-8">
    <div
      class="p-1 bg-gradient-to-bl from-pink-300 via-orange-200 to-cyan-500 rounded-full"
    >
      <div class="relative h-20 w-20 p-1 rounded-full bg-white">
        <img
          class="absolute inset-0 m-auto rounded-full"
          src="../assets/sam-meme.gif"
          alt="avatar"
        />
      </div>
    </div>
  </div>

  <transition appear @enter="enter" :css="false">
    <header
      id="intro"
      class="grid grid-cols-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl font-raleway font-semibold mb-16"
    >
      <div class="col-span-full xl:col-span-10 3xl:col-span-8">
        Hi, my name is Samantha. I am a
        <span
          class="bg-gradient-to-bl from-gray-400 to-gray-500 bg-clip-text text-transparent"
          >Design Engineer</span
        >
        and I want to
        <span
          class="bg-gradient-to-bl from-gray-400 to-gray-500 bg-clip-text text-transparent"
          >design seamless, delightful user experiences</span
        >
        and create the worlds most valuable products.
      </div>
    </header>
  </transition>

  <nav class="hidden lg:flex mb-10 lg:justify-between font-normal">
    <div class="lg:space-x-8">
      <NavbarLink to="/" @click="store.show('featured')">Featured</NavbarLink>
      <NavbarLink to="/projects" @click="store.show('all')"
        >Projects</NavbarLink
      >
      <!-- <NavbarLink to="/ux" @click="store.show('ux')">UI/UX</NavbarLink>
      <NavbarLink to="/dev" @click="store.show('dev')">Web Development</NavbarLink>
      <NavbarLink to="/engineering" @click="store.show('eng')">Engineering Analysis</NavbarLink> -->
    </div>
    <div class="lg:space-x-8">
      <NavbarLink to="/contact">Contact</NavbarLink>
      <NavbarLink to="/cv">CV</NavbarLink>
    </div>
  </nav>

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
