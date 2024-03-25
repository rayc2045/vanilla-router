import("../components/Lorem.js");

class About extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.innerHTML = `
      <h1>This is about page</h1>
      <lorem-component></lorem-component>
    `;
  }
}

customElements.define("about-page", About);
export default About;
