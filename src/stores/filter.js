import { ref } from "vue";
import { defineStore } from "pinia";

export const useFilterStore = defineStore("tag", () => {
  
  const filter = ref("featured");
  
  function show(tag) {
    filter.value = tag;
  }

  return { filter, show };
});
