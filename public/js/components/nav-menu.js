const template = document.createElement('template');
template.innerHTML = `
  <style>
    .nav-menu {
        display: flex
    }
  </style>
  <div class="nav-menu">
      <slot></slot>
  </div>
`;

customElements.define('nav-menu',
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      );
    }
  }
);