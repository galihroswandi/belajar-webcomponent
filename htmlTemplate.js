class MyElement extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.querySelector('#my-template1');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
    }
}

customElements.define('my-element', MyElement);