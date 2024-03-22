import Home from "./pages/Home.js";
import About from "./pages/About.js";
import NotFound from "./pages/NotFound.js";

class Router {
  constructor() {
    this.routes = [
      { path: "/", component: Home },
      { path: "/about", component: About },
    ];
  }
  renderView(path) {
    const route = this.routes.find((route) => route.path === path);
    document.querySelector("#router-view").innerHTML = route
      ? route.component
      : NotFound;
  }
}

const router = new Router();
router.renderView("/");

export default router;
