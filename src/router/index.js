import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import ProjectGalleryView from "../views/ProjectGallery.vue";

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
      path: "/projects",
      name: "projects",
      component: ProjectGalleryView,
    },
    {
      path: "/projects/Atmo",
      name: "Atmo",
      component: () => import("../views/Projects/Atmo.vue"),
    },
    {
      path: "/projects/Stance",
      name: "Stance",
      component: () => import("../views/Projects/Stance.vue"),
    },
    {
      path: "/projects/carbon-zero-home",
      name: "Carbon-Zero-Home",
      component: () => import("../views/Projects/CarbonZeroHome.vue"),
    },
    {
      path: "/projects/tandem-bike",
      name: "Tandem-Bike",
      component: () => import("../views/Projects/TandemBike.vue"),
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
