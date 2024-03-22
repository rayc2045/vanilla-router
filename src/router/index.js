const { createRouter, createWebHashHistory } = VueRouter;
// import { createRouter, createWebHashHistory } from "https://esm.sh/vue-router";

const Home = () => import("../pages/Home.js"),
  Login = () => import("../pages/LogIn.js"),
  About = () => import("../pages/About.js"),
  MeasurePD = () => import("../pages/MeasurePD.js"),
  Products = () => import("../pages/Products.js"),
  Product = () => import("../pages/Product.js"),
  NotFound = () => import("../pages/NotFound.js");

const routes = [
  { path: "/", component: Home },
  {
    path: "/login",
    component: Login,
    meta: { title: "login" },
  },
  {
    path: "/about",
    component: About,
    meta: { title: "about" },
  },
  {
    path: "/measurePD",
    component: MeasurePD,
    meta: { title: "MeasurePD" },
  },
  {
    path: "/products/",
    component: Products,
    meta: { title: "products" },
  },
  {
    path: "/products/p/:productName",
    component: Product,
    meta: { title: "products" },
  },
  // 404 Not Found Route
  { path: "/products/:pathMatch(.*)*", component: NotFound },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
