<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { LockClosedIcon } from "@heroicons/vue/24/outline";

const open = ref(true);
const password = ref("");
const wrongPassword = ref(false);
const correctPassword = ref(false);

const evaluate = (password) => {
  if (password == "gluten-quicklime") {
    open.value = false;
    correctPassword.value = true;
    wrongPassword.value = false;
  } else {
    open.value = true;
    wrongPassword.value = true;
  }
};
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = true">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            >
              <div>
                <div
                  class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100"
                >
                  <LockClosedIcon
                    class="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle
                    as="h3"
                    class="text-lg font-medium leading-6 text-gray-900"
                    >Permission Required</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Please contact samanthaslfoong@gmail.com for permission to
                      view this project.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <div class="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="password"
                    id="password"
                    :class="{
                      'ring-red-500 ring rin-offset-2': wrongPassword,
                      'ring-green-500 ring rin-offset-2': correctPassword,
                    }"
                    class="block w-full rounded-md p-4 border pr-10 sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
                <p
                  :class="[wrongPassword ? 'block' : 'hidden']"
                  class="mt-2 text-sm text-red-600"
                >
                  Wrong password. Please try again.
                </p>
              </div>
              <div class="mt-5 sm:mt-6">
                <button
                  type="button"
                  class="font-raleway font-bold inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm tracking-wide"
                  @click="evaluate(password)"
                >
                  Enter
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
