<template>

    <teleport to="body">
        <!-- <div class="flex items-start justify-center min-h-screen pt-24 text-center"> -->

        <div class="fixed inset-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-lg backdrop-filter"
            role="dialog" ref="modal" aria-modal="true" aria-labelledby="modal-headline">
            <div class="max-w-sm w-72 mt-0 md:w-96 md:mb-6 border-none">
                <form
                    class="w-96 px-6 py-16 items-center relative z-10 flex flex-col justify-center bg-slate-700 border rounded-xl shadow-sm"
                    @submit.prevent="submitEvent">
                    <div class="grid-center pb-8 z-0">
                        <h3 class="font-bold text-gray-300 text-xl md:text-2xl">Add your event!</h3>
                    </div>
                    <div class="relative z-0 pb-4">
                        <input type="text" v-model="eventData.eventTitle"
                            class="block py-2.5 px-0 w-80 text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                        <label for="title"
                            class="absolute text-base text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Event
                            title</label>
                        <p class="text-red-500 pt-1 text-sm" v-if="v$.eventTitle.$error">{{
        v$.eventTitle.$errors[0].$message
}}</p>
                    </div>
                    <div class="relative z-0 pb-4">
                        <input type="text" v-model="eventData.eventHost"
                            class="block py-2.5 px-0 w-80 text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                        <label for="host"
                            class="absolute text-base text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Event
                            host</label>
                        <p class="text-red-500 pt-1 text-sm" v-if="v$.eventHost.$error">{{
        v$.eventHost.$errors[0].$message
}}</p>
                    </div>

                    <div class="relative z-0 pb-4">
                        <input type="text" v-model="eventData.eventLocation"
                            class="block py-2.5 px-0 w-80 text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                        <label for="location"
                            class="absolute text-base text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Event
                            location</label>
                        <p class="text-red-500 pt-1 text-sm" v-if="v$.eventLocation.$error">{{
        v$.eventLocation.$errors[0].$message
}}</p>
                    </div>
                    <div class="relative z-0 pb-4">
                        <input type="date" v-model="eventData.eventDate"
                            class="block py-2.5 px-0 w-80 text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                        <label for="date"
                            class="absolute text-base text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Event
                            date</label>
                        <p class="text-red-500 pt-1 text-sm" v-if="v$.eventDate.$error">{{
        v$.eventDate.$errors[0].$message
}}</p>
                    </div>
                    <div class="relative z-0 pb-4">
                        <input type="file" accept="image/png, image/jpeg, image/jpg"
                            @change="handleFileChange($event, index)"
                            class="block py-2.5 px-0 w-80 text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                        <label for="poster"
                            class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Event
                            poster</label>
                    </div>
                    <div>
                        <button type="submit" @click="$emit('closeModal')"
                            class="text-white bg-sky-600 rounded-md border-none px-4 cursor-pointer py-2">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    </teleport>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import axios from 'axios'
import {useVuelidate} from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

const error = ref("")

const eventData = reactive({
    eventHost: "",
    eventLocation: "",
    eventTitle: "",
    eventDate: "",
    eventImage: "",
    loading: false
})

const rules = computed(() => {
    return {
        eventHost: { required: helpers.withMessage("This field is required", required) },
        eventLocation: { required: helpers.withMessage("This field is required", required) },
        eventTitle: { required: helpers.withMessage("This field is required", required) },
        eventDate: { required: helpers.withMessage("This field is required", required) }
    }
})

const v$ = useVuelidate(rules, eventData)

const handleFileChange = (evt, index) => {
    eventImage.value = evt.target.files
}

defineEmits(['closeModal'])

const submitEvent = async () => {
    const result = await v$.value.$validate()
    if (result) {
        eventData.loading = true
        axios.post('http://localhost:5000/events/create', {
            eventTitle: eventData.eventTitle,
            eventHost: eventData.eventHost,
            eventDate: eventData.eventDate.toString(),
            eventImage: eventData.eventImage,
            eventLocation: eventData.eventLocation
        }).then((response) => {
            console.log(response)
            eventData.loading = false
        }).catch((err) => {
            eventData.loading = false
            error.value = err.message
            console.log(err.message)
        })

    }
    setTimeout(() => {
    eventData.eventTitle = "",
    eventData.eventHost = "",
    eventData.eventLocation  = "",
    eventData.eventDate = ""
    }, 1000)
}


</script>
