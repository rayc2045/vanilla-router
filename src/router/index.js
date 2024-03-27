import routes from "./routes.js";

class Router {
  constructor() {
    this.routes = routes;
  }

  getPath() {
    const path = location.hash.slice(1).split("?")[0];
    return path.startsWith("/") ? path : "/";
  }

  renderPage() {
    const path = this.getPath();
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
router.renderPage();

export default router;
