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
    // this.shadow.innerHTML = `
    //   <style>
    //     :host { color: crimson; }
    //     p { font-weight:bold; }
    //   </style>
    // `;
    import("../components/LoremComponent.js");
  }
}

customElements.define("home-page", Home);
export default Home;
