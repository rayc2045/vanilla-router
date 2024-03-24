import { getHost } from "./utils/function.js";
import router from "./router/index.js";

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

    if (!href.startsWith(selfHost)) return;
    e.preventDefault();
    const path = href.split(selfHost)[1];
    const goToPage = (path) => (location.hash = path);

    const routePaths = router.routes.map((route) => route.path);
    routePaths.shift(); // remove('/')
    if (path === "/") return goToPage("/");
    if (routePaths.includes(path)) {
      if (target === "_blank") return open(`${selfHost}/#${path}`, "_blank");
      return goToPage(path);
    }

    if (FULLY_SPA) return goToPage("/404");
    if (target === "_blank") return open(href, "_blank");
    location.href = href;
  }
};
