const menuItemTemplate = document.createElement('template');
menuItemTemplate.innerHTML = `
    <style>
        .menu-item {
            margin-right: 1.5rem;
        }
    </style>
    <h2 class="menu-item">
        <slot></slot>
    </h2>
`;

customElements.define('menu-item',
    class extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: 'open' }).appendChild(
                menuItemTemplate.content.cloneNode(true)
            );
        }
    }
);