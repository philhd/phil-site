customElements.define('nav-menu',
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById('nav-menu');
      const templateContent = template.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);