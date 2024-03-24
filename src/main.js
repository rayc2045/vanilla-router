import router from "./router/index.js";
import routes from "./router/routes.js";

const isFullySPA = true;

const pathes = routes.map((route) => route.path);
pathes.shift(); // remove('/')

window.onhashchange = () => {
  const path = location.hash.slice(1);
  router.renderPage(path);
};

document.onclick = (e) => {
  const selfHost = location.host,
    href = e.target.href,
    target = e.target.target,
    isSelf = href.includes(selfHost);
  if (isSelf) {
    e.preventDefault();
    const path = href.split(selfHost)[1];
    if (path === "/") return router.renderPage("/");
    if (pathes.includes(path)) {
      if (target === "_blank") return open(`${selfHost}/#${path}`, "_blank");
      return router.renderPage(path);
    }
    if (!isFullySPA) return (location.href = "/404.html");
    router.renderPage("/404");
  }
};
