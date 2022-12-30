<script setup>
import axios from 'axios'
import CalendarIcon from '../assets/CalendarIcon.vue'
import PeopleIcon from '../assets/PeopleIcon.vue'
import LocationIcon from '../assets/LocationIcon.vue'
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
  <main>
    <img class="w-full h-screen top-0 absolute" src="../assets/images/car-meet-2.jpg" alt="">
    <div class="relative text-white flex flex-wrap justify-center">
      <div v-for="event in events" :key="event._id" class="w-full md:w-1/3 p-2">
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white backdrop-filter backdrop-blur-lg bg-opacity-75 max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img v-if="event.eventImage" class="rounded-t-lg" :src="event.eventImage" alt="" />
              <img v-else class="rounded-t-lg" src="../assets/images/car-meet-4.jpg"/>
            </a>
            <div class="p-6">
              <h4 class="text-black font-bold row-span-2"> {{ event.eventTitle }}</h4>
              <p class="text-gray-800 font-bold flex flex-row items-center pt-3">
                <PeopleIcon class="text-sky-800" />Hosted by: {{ event.eventHost }}
              </p>
              <p class="text-gray-800 font-bold flex flex-row items-center pt-3">
                <LocationIcon class="text-sky-800" />Venue: {{ event.eventLocation }}
              </p>
              <p class="text-gray-800 font-bold flex flex-row items-center pt-3">
                <CalendarIcon class="text-sky-800" /> {{ event.eventDate }}
              </p>
            </div>
          </div>
</div>
        </div>
      </div>
  </main>
</template>
