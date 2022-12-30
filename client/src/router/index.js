import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import ("../views/Home.vue")
    },
    {
      path: "/support",
      name: "support",
      component: () => import("../views/Support.vue")
    }
  ],
});

export default router;
