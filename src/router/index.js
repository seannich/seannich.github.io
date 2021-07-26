import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Project from "../views/Project.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/projects",
    name: "Project",
    component: Project,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
