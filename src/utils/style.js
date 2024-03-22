export default {
  stickyTop: "position:sticky top:0",
  flexCenter: "display:flex justify-content:center place-items:center",
  absoluteCenter:
    "position:absolute top:50% left:50% transform:translate(-50%,-50%)",
  fixedCenter: "position:fixed left:50% top:50% transform:translate(-50%,-50%)",
  rowSeperate: "display:flex justify-content:space-between",
  columnSeperate: "display:grid align-content:space-between",
  picoBtn:
    "inline-block cursor:pointer mb:var(--pico-spacing) p:var(--pico-form-element-spacing-vertical)|var(--pico-form-element-spacing-horizontal) color:white bg:var(--pico-primary-background) bg:var(--pico-primary-hover-background):hover box-shadow:var(--pico-button-hover-box-shadow,|0|0|0|rgba(0,|0,|0,|0)),0|0|0|var(--pico-outline-width)|var(--pico-primary-focus):focus border-color:var(--pico-primary-hover-border) border-radius:var(--pico-border-radius) transition:background-color|var(--pico-transition),border-color|var(--pico-transition),color|var(--pico-transition),box-shadow|var(--pico-transition)",
  customBtn:
    "inline-block cursor:pointer mb:var(--pico-spacing) p:.5rem|1rem r:.5rem color:white bg:var(--pico-primary-background) bg:var(--pico-primary-hover-background):hover box-shadow:var(--pico-button-hover-box-shadow,|0|0|0|rgba(0,|0,|0,|0)),0|0|0|var(--pico-outline-width)|var(--pico-primary-focus):focus",
  group: (cls, suffix) =>
    `{${cls
      .trim()
      .split(" ")
      .filter((c) => c.length)
      .join(";")}}${suffix}`,
};
