class NotFound extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.innerHTML = `
      <h1>404 Not Found</h1>
      <a href="/">Back to Home</a>
    `;
  }
}

customElements.define("not-found", NotFound);
export default NotFound;
