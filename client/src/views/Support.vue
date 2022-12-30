<template>
    <div class="px-20 pt-24 flex w-full justify-center align-center flex-col">
        <h1 class="font-bold text-4xl">Technical support and feedback</h1>
        <p class="text-gray-600">Thanks for checking out the magari events website. You can reach out with feedback on my email below :)</p>
       <div class="flex flex-row pt-3 w-full">
        <EmailIcon/> - <p class="text-gray-600 text-lg">munenenjue18@gmail.com</p>
       </div>
    </div>
    <div class="px-20 pt-8">
        <RouterLink to="/">
        <button class="text-white bg-sky-600 py-2 px-4 rounded-xl border-none outline-none cursor-pointer flex items-center justify-center gap-2"><HomeIcon/>Home</button>
        </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import EmailIcon from '../assets/EmailIcon.vue'
import HomeIcon from '../assets/HomeIcon.vue'
</script>