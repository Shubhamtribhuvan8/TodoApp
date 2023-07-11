import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/get",
      name: "get",
      component: () => import("../views/Get.vue"),
    },
    {
      path: "/delete",
      name: "delete",
      component: () => import("../views/Delete.vue"),
    },
    {
      path: "/post",
      name: "post",
      component: () => import("../views/Post.vue"),
    },
  ],
});

export default router;
