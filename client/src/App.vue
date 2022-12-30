<script setup>
 import {ref} from 'vue'
  import { RouterLink, RouterView } from "vue-router";
  import MenuIcon from "./assets/MenuIcon.vue";
  import MoonIcon from './assets/MoonIcon.vue'
  import SunIcon from './assets/SunIcon.vue'
  import CarIcon from './assets/CarIcon.vue'
  import PlusIcon from './assets/PlusIcon.vue'
  import EventForm from './components/EventForm.vue';
  import { useDark, useToggle } from "@vueuse/core"
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
      
  let showMenu = ref(false)
  function toggleNav() {
  return (showMenu.value = !showMenu.value);
  }

  const showModal = ref(false)

  const closeModal = () => {
    showModal.value = ref(false)
  }

  const toggleModal = () => {
    return showModal.value = !showModal.value
  }
</script>

<template>
  <div class="bg-red-700 dark:bg-black sticky top-0 backdrop-blur-lg backdrop-filter bg-opacity-70 dark:bg-opacity-80 z-10">
    <nav class="container px-3 py-5 mx-auto md:flex md:justify-between md:items-center dark:text-gray-200">
      <div class="flex items-center justify-between">
        <RouterLink to="/"
          class="text-xl flex items-center justify-center gap-1 font-bold text-gray-100 md:text-2xl hover:text-sky-400">
          <CarIcon/>
        </RouterLink>
        <!--Mobilemenu button-->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="text-gray-100 hover:text-sky-400 focus:outline-none focus:text-gray-400">
            <MenuIcon />
          </button>
        </div>
      </div>
      <ul :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 text-center items-center justify-center md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
        <li>
          <RouterLink class="text-gray-100 hover:text-sky-400" to="/">Home</RouterLink>
        </li>
        <li>
          <button @click="toggleModal" class="text-white bg-sky-600 py-2 px-4 rounded-xl border-none outline-none cursor-pointer flex items-center justify-center gap-2">Create event<PlusIcon/></button>
        </li>
        <li>
          <RouterLink class="text-gray-100 hover:text-sky-400" to="/support">Support</RouterLink>
        </li>
        <MoonIcon @click="toggleDark()" v-if="!isDark" class="hover:text-sky-500" />
        <SunIcon @click="toggleDark()" v-if="isDark" class="hover:text-sky-500" />
      </ul>
    </nav>
  </div>
  <RouterView />
  <EventForm v-if="showModal" @closeModal="toggleModal"/>
</template>

<style scoped>

</style>
