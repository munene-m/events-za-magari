<script setup>
 import CopyrightIcon from '../assets/CopyrightIcon.vue'
 const date = new Date()
 const year = date.getFullYear()
</script>

<template>
    <footer class="dark:bg-slate-900 bg-gray-200 flex justify-center items-center bottom-0 w-full">
        <p class="dark:text-slate-100 text-slate-900 py-6 flex flex-row items-center justify-center text-center">Github
            @munene-m
            <CopyrightIcon />{{ year }}
        </p>
    </footer>
</template>