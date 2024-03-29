import routes from "./routes.js";

class Router {
  constructor() {
    this.routes = routes;
  }

  get currentPath() {
    const path = location.hash.slice(1).split("?")[0];
    return path.startsWith("/") ? path : "/";
  }

  renderPage(path = this.currentPath) {
    const route = this.routes.find((route) => route.path === path) || {
      path: "/404",
      title: "Not Found",
      component: "NotFound",
      element: "<not-found></not-found>",
    };
    document.title = route.title;
    import(`/src/pages/${route.component}.js`);
    document.querySelector("#router-view").innerHTML = route.element;
  }
}

const router = new Router();
router.renderPage();

export default router;
