<script setup>
import axios from 'axios'
import CalendarIcon from '../assets/CalendarIcon.vue'
import PeopleIcon from '../assets/PeopleIcon.vue'
import LocationIcon from '../assets/LocationIcon.vue'
import Footer from '../components/Footer.vue'
import { onMounted, ref } from 'vue';

const events = ref([])

async function getEvents() {
  try {
    const response = await axios.get('http://localhost:5000/events/get-events')
    events.value = response.data
  } catch (error) {
    console.error(error)
  }
}
onMounted(getEvents)
</script>

<template>
 <div class="bg-slate-100 dark:bg-slate-800">
   <main>
    <img class="w-full h-3/4 top-0 absolute" src="../assets/images/car-meet-2.jpg" alt="">
    <div class="">
      <h1 class="font-extrabold text-center text-white pt-32 md:pt-40 lg:pt-40 relative text-6xl">Welcome to magari
        events.</h1>
      <p class="font-bold text-center text-white pt-4 relative text-3xl">Stay up to date with events in the Kenyan
        motorsport and enthusiast scene.</p>

    </div>
    <div class="relative mt-96 text-white flex flex-wrap justify-center">
      <div v-for="event in events" :key="event._id" class="w-full md:w-1/3 p-2">
        <div class="flex justify-center pb-24">
          <div
            class="rounded-lg shadow-lg bg-white backdrop-filter backdrop-blur-lg bg-opacity-75 max-w-sm drop-shadow-xl">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img v-if="event.eventImage" class="rounded-t-lg" :src="event.eventImage" alt="" />
              <img v-else class="rounded-t-lg" src="../assets/images/car-meet-4.jpg" />
            </a>
            <div class="p-6 ">

              <h4 class="text-black text-xl text-center font-bold row-span-2">Event name: {{ event.eventTitle }}</h4>
              <div class="grid grid-cols-2 gap-2">
                <p class="text-gray-800 font-bold flex flex-col pt-3">
                  <PeopleIcon class="text-sky-800" />Host: {{ event.eventHost }}
                </p>
                <p class="text-gray-800 font-bold flex flex-col pt-3">
                  <LocationIcon class="text-sky-800" />Venue: {{ event.eventLocation }}
                </p>
                <p class="text-gray-800 font-bold flex flex-col pt-3">
                  <CalendarIcon class="text-sky-800" /> {{ event.eventDate }}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer class="bottom-0 fixed"/>
 </div>
</template>
