<script setup>
import { RouterLink, useRoute } from "vue-router";
import { computed } from "vue";

const props = defineProps({
  to: String,
});
const route = useRoute();
const isActive = computed(() => route.path === props.to);
</script>

<template>
  <RouterLink
    :to="to"
    :class="{ 'bg-gray-200 text-black': isActive }"
    class="hover:bg-gray-50 text-black rounded-full py-2 px-6 inline-flex items-center text-sm font-semibold transition duration-300 ease-in-out"
    ><slot
  /></RouterLink>
</template>
