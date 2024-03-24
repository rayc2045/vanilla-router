import { getHost } from "./utils/function.js";
import router from "./router/index.js";
import("./components/Footer.js");

const FULLY_SPA = true;

window.onhashchange = () => {
  const path = location.hash.slice(1);
  router.renderPage(path);
};

document.onclick = (e) => {
  if (e.target.nodeName === "A") {
    const selfHost = getHost(),
      href = e.target.href,
      target = e.target.target;
    // only route if the href matches the current domain
    if (!href.startsWith(selfHost)) return;
    e.preventDefault();
    const routePaths = router.routes.map((route) => route.path),
      path = href.split(selfHost)[1],
      goToPage = (path) => (location.hash = path);
    // matches the route
    if (routePaths.includes(path)) {
      if (target === "_blank") return open(`${selfHost}/#${path}`, "_blank");
      return goToPage(path);
    }
    // not match any route
    if (FULLY_SPA) return goToPage("/404");
    if (target === "_blank") return open(href, "_blank");
    location.href = href;
  }
};
