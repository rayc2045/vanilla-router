import router from "./router/index.js";
import("./components/Footer.js");

window.onhashchange = () => {
  const hash = location.hash.slice(1).split("?")[0];
  if (hash.startsWith("/")) router.renderPage(hash);
};

// import { getHost } from "./utils/function.js";
// const FULLY_SPA = true;

// document.onclick = (e) => {
//   if (e.target.nodeName === "A") {
//     const selfHost = getHost(),
//       href = e.target.href,
//       target = e.target.target;
//     // only route if the href matches the current domain
//     if (!href.startsWith(selfHost)) return;
//     e.preventDefault();
//     const routePaths = router.routes
//         .map((route) => route.path)
//         .filter((path) => path !== "/"),
//       path = href.split(selfHost)[1],
//       goToPage = (path) => (location.hash = path);
//     // matches the route
//     if (path === "/") return goToPage("/");
//     for (const routePath of routePaths) {
//       if (path.startsWith(routePath)) {
//         if (target === "_blank") return open(`${selfHost}/#${path}`, "_blank");
//         return goToPage(path);
//       }
//     }
//     // not match any route
//     if (FULLY_SPA) return goToPage("/404");
//     if (target === "_blank") return open(href, "_blank");
//     location.href = href;
//   }
// };
