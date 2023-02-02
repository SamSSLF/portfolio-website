import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "text-black ",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/ux",
      name: "ux",
      component: HomeView,
    },
    {
      path: "/dev",
      name: "dev",
      component: HomeView,
    },
    {
      path: "/design",
      name: "design",
      component: HomeView,
    },
    {
      path: "/engineering",
      name: "engineering",
      component: HomeView,
    },
    {
      path: "/cv",
      name: "cv",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CV.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Contact.vue"),
    },
  ],
});

export default router;
