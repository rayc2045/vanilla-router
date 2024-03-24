class Footer extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" });
  }
  connectedCallback() {
    this.shadow.innerHTML = `
      <style>
        :host {
          text-align: center;
          font-family: monospace;
        }
        footer {
          padding-block: 1em;
        }
      </style>
      <footer>
        <slot>
          Developed by <a href="https://github.com/rayc2045" target="_blank">Ray C</a>
        </slot>
      </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
export default Footer;
