<script setup>
import NavbarLink from "./NavbarLink.vue";
import { useFilterStore } from "../stores/filter";
import { RouterLink } from "vue-router";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";

const store = useFilterStore();
</script>

<template>
  <div>
    <div class="flex items-center w-full">
      <RouterLink
        to="/"
        class="p-1 bg-gradient-to-bl from-pink-300 via-orange-200 to-cyan-500 rounded-full mr-auto mb-8"
      >
        <div class="relative h-20 w-20 p-1 rounded-full bg-white">
          <img
            class="absolute inset-0 m-auto rounded-full"
            src="../assets/sam-meme.gif"
            alt="avatar"
          />
        </div>
      </RouterLink>

      <Disclosure v-slot="{ close }">
        <DisclosureButton
          class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
          <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
        </DisclosureButton>
        <DisclosurePanel
          class="md:hidden absolute inset-0 top-32 bg-white z-50"
        >
          <div class="space-y-1 pt-2 pb-4">
            <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
            <DisclosureButton
              :as="RouterLink"
              to="/"
              @click="close()"
              class="block border-l-4 border-transparent py-4 pl-3 pr-4 text-base text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 text-center font-raleway font-bold"
              >Home</DisclosureButton
            >
            <DisclosureButton
              :as="RouterLink"
              to="/projects"
              @click="close()"
              class="block border-l-4 border-transparent py-4 pl-3 pr-4 text-base text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 text-center font-raleway font-bold"
              >Projects</DisclosureButton
            >
            <DisclosureButton
              :as="RouterLink"
              to="/cv"
              @click="close()"
              class="block border-l-4 border-transparent py-4 pl-3 pr-4 text-base text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 text-center font-raleway font-bold"
              >CV</DisclosureButton
            >
          </div>
        </DisclosurePanel>
      </Disclosure>

      <div class="hidden md:block md:space-x-10">
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/projects">Work</NavbarLink>
        <NavbarLink to="/cv">CV</NavbarLink>
      </div>
    </div>
  </div>
</template>
