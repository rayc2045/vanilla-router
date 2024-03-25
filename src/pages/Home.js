import("../components/Lorem.js");

class Home extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.innerHTML = `
      <h1>This is home page</h1>
      <lorem-component></lorem-component>
      <lorem-component></lorem-component>
      <lorem-component></lorem-component>
    `;
  }
}

customElements.define("home-page", Home);
export default Home;
