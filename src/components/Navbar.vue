<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
<header class="text-4xl font-raleway font-semibold my-16 mr-24">
    Hi, my name is Samantha. I am a <span>Design Engineer</span> and I want to <span>design
      seamless, delightful user experiences</span> and create the worlds most valuable
    products.
  </header>
  <nav class="font-raleway font-semibold text-slate-300">
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
  </nav>
</template>
