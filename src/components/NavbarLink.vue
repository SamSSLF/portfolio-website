<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  to: String,
});
const route = useRoute();
const isActive = computed(() => route.path === props.to);
return { isActive };
</script>

<template>
  <RouterLink
    :to="to"
    :class="{ active: isActive }"
    class="hover:text-slate-500 active:border-b border-violet-500 cursor-pointer"
    ><slot
  /></RouterLink>
</template>
