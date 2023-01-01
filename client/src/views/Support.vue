<template>
    <div class="dark:bg-slate-800">
        <div>
            <div class="px-20 pt-24 flex w-full justify-center align-center flex-col">
                <h1 class="font-bold text-4xl dark:text-gray-200">Technical support and feedback</h1>
                <p class="text-gray-600 dark:text-gray-50">Thanks for checking out the magari events website. You can
                    reach out with feedback
                    on my email below :)</p>
                <div class="flex flex-row pt-3 w-full dark:text-gray-50">
                    <EmailIcon class="dark:text-gray-50" /> - <p class="text-gray-600 dark:text-gray-50 text-lg">
                        munenenjue18@gmail.com</p>
                </div>
            </div>
            <div class="px-20 pt-8">
                <RouterLink to="/">
                    <button
                        class="text-white bg-sky-600 py-2 px-4 rounded-xl border-none outline-none cursor-pointer flex items-center justify-center gap-2">
                        <HomeIcon />Home
                    </button>
                </RouterLink>
            </div>
        </div>
        <Footer class="bottom-0 fixed" />
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import EmailIcon from '../assets/EmailIcon.vue'
import HomeIcon from '../assets/HomeIcon.vue'
import Footer from '../components/Footer.vue';
</script>