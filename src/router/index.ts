import AboutView from "@/views/AboutView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "app",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: {
        layout: "FullLayout",
      }
    }
  ],
});

export default router;
