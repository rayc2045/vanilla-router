import router from "./router.js";
import LoremComponent from "./components/LoremComponent.js";

window.onhashchange = () => {
  const page = location.hash.split("#")[1];
  router.renderView(page);
};
