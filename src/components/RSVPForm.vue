<script>
import { XMarkIcon } from "@heroicons/vue/24/solid";

export default {
  props: ["modalActive"],
  components: { XMarkIcon },
  setup(props, { emit }) {
    function close() {
      emit("close");
    }
    return { close };
  },
};
</script>

<template>
  <transition name="modal-animation">
    <div
      v-show="modalActive"
      class="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-black/[.7]"
    >
      <transition name="modal-animation-inner">
        <div
          v-show="modalActive"
          class="relative w-[80%] xl:max-w-2xl lg:w-1/2 xl:w-2/5 bg-amber-50 py-10 px-4 rounded-xl shadow-xl"
        >
          <div
            class="bg-amber-600 absolute top-[-1rem] right-[-1rem] rounded-full w-12 h-12 flex justify-center items-center"
          >
            <XMarkIcon
              class="hover:rotate-90 transition-all h-8 w-8 text-amber-300 cursor-pointer"
              @click="close"
            />
          </div>
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>
