class NavMenu extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .menu {
                display: flex
            }
        `;

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'menu');

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}