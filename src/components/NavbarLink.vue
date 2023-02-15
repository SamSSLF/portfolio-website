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
    :class="{ 'border-b border-black font-semibold': isActive }"
    class="hover:font-bold cursor-pointer inline-flex items-center pt-1 text-sm text-gray-900 3xl:text-lg hover:tracking-wide hover:scale-115 transition"
    ><slot
  /></RouterLink>
</template>
