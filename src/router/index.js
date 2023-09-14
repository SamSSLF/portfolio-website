import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import ProjectGalleryView from "../views/ProjectGallery.vue";
import PortfolioLayout from "../layouts/portfolio_layout.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "text-black ",
  routes: [
    {
      path: "/",
      redirect:{path: "/home"},
      component: PortfolioLayout,
      children: [
        {
          path: "/home",
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
          path: "/projects/ergonomic-wine-bottle-opener",
          name: "Aarke Wine Bottle Opener",
          component: () => import("../views/Projects/Aarke.vue"),
        },
        {
          path: "/projects/fable",
          name: "Fable Language-Learning Toy",
          component: () => import("../views/Projects/Fable.vue"),
        },
        {
          path: "/projects/terraqi",
          name: "TerraQi API",
          component: () => import("../views/Projects/TerraQi.vue"),
        },
        {
          path: "/projects/juno",
          name: "Juno Circular Toy Company",
          component: () => import("../views/Projects/Juno.vue"),
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
    },
    {
      path: "/2023",
      redirect:{path: "/sam-turns-23"},
      component: ()=> import("../layouts/invitation_layout.vue"),
      children: [
        {
          path: "/sam-turns-23",
          name: "sam-turns-23",
          component: () => import("../views/birthday.vue"),
        },
      ]
    },
    
  ],
});

export default router;
