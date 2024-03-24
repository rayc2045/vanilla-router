import("../components/Lorem.js");

class Home extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" });
  }
  connectedCallback() {
    this.shadow.innerHTML = `
      <h1>This is home page</h1>
      <lorem-component></lorem-component>
      <lorem-component></lorem-component>
      <lorem-component></lorem-component>
    `;
  }
}

customElements.define("home-page", Home);
export default Home;
