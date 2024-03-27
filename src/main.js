import router from "./router/index.js";
import("./components/Footer.js");

window.onhashchange = () => router.renderPage();
