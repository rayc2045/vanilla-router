class About extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" });
  }
  connectedCallback() {
    import("../components/LoremComponent.js");
    this.shadow.innerHTML = `
      <h1>This is about page</h1>
      <lorem-component></lorem-component>
    `;
  }
}

customElements.define("about-page", About);
export default About;
