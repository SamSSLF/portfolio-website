<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="text-2xl font-roboto leading-7 mb-4">
    SAMANTHA <br />FOONG
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
