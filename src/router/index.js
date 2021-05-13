import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Fundamentals from "../views/Fundamentals.vue";
import Components from "../views/Components.vue";
import Router from "../views/Router.vue";
import Brazil from "../views/countries/Brazil.vue";
import Hawaii from "../views/countries/Hawaii.vue";
import Jamaica from "../views/countries/Jamaica.vue";
import Panama from "../views/countries/Panama.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/fundamentals",
    name: "Fundamentals",
    component: Fundamentals,
  },
  {
    path: "/components",
    name: "Components",
    component: Components,
  },
  {
    path: "/router",
    name: "Router",
    component: Router,
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: Brazil,
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: Jamaica,
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: Hawaii,
  },
  {
    path: "/panama",
    name: "Panama",
    component: Panama,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
