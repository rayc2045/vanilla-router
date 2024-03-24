import routes from "./routes.js";

class Router {
  constructor() {
    this.routes = routes;
  }
  renderPage(path) {
    const route = this.routes.find((route) => route.path === path) || {
      path: "/404",
      component: "NotFound",
      element: "<not-found></not-found>",
    };
    import(`/src/pages/${route.component}.js`);
    document.querySelector("#router-view").innerHTML = route.element;
  }
}

const router = new Router();
router.renderPage(location.hash.slice(1) || "/");

export default router;
