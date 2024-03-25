class Nav extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.innerHTML = `
      <style>
        nav {
          display: flex;
          justify-content:
          space-between;
        }
        ul {
          margin: 0;
          padding: 0;
          padding-block: 1em;
          display: flex;
        }
        li {
          list-style: none;
          margin-inline: .5em;
          display: flex;
          align-items: center;
        }
        a {
          display: inline-block;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        ul:nth-of-type(1) a {
          text-decoration: none;
          font-size: 1.5em;
          font-weight: bold;
        }
      </style>
      <nav>
        <ul>
          <li><a href="/">Vanilla SPA</a></li>
        </ul>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/service">Services</a></li>
          <li><a href="/products">Products</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("nav-component", Nav);
export default Nav;
