class NotFound extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" });
  }
  connectedCallback() {
    this.shadow.innerHTML = `
      <h1>404 Not Found</h1>
      <a href="/">Back to Home</a>
    `;
  }
}

customElements.define("not-found-page", NotFound);
export default NotFound;
