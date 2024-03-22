import loremComponent from "./components/Lorem.js";

document.oncontextmenu =
  document.ondragstart =
  document.onmousemove =
  document.onselect =
  document.onselectstart =
  document.oncopy =
  document.onbeforecopy =
  // document.onkeydown =
  window.onresize =
    (_) => false;

console.log("<loremComponent />");
