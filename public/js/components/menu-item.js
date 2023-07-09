customElements.define('menu-item',
    class extends HTMLElement {
        constructor() {
            super();

            const shadow = this.attachShadow({ mode: 'open' });

            const style = document.createElement('style');
            style.textContent = `
            .menu-item {
                margin-right: 1.5rem;
            }
        `;

            const elem = document.createElement('h2');
            elem.setAttribute('class', 'menu-item');
            const text = this.getAttribute('data-text');
            elem.textContent = text;

            shadow.appendChild(style);
            shadow.appendChild(elem);
        }
    }
);