// Custom Element HTML

class MyElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 'Hello World';
    }
}

customElements.define('my-element', MyElement);


class Author extends HTMLElement {

    // constructor() {
    //     super();

    //     // create a shadow dom root
    //     this.attachShadow({ mode: 'open' });

    //     // add some CSS to the shadow root
    //     this.shadowRoot.innerHTML = `
    //         <style>
    //             h1{
    //                 color: blue;
    //             }

    //             p{
    //                 font-size: 14px;
    //             }
    //         </style>
    //     `;
    // }

    // connectedCallback() {
    //     this.shadowRoot.innerHTML += `
    //         <h1>Nama Saya Galih Roswandi</h1>
    //         <p>Tasikmalaya</p>
    //     //     `;
    // }

    connectedCallback() {
        this.innerHTML = `
            <h1>Nama Saya Galih Roswandi</h1>
            <p>Tasikmalaya</p>
        `;
    }
}

customElements.define('my-author', Author);


// Contoh studi kasus
class ProdutItem extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class='product-item'>
                <img src='${this.getAttribute('image')}' alt='${this.getAttribute('name')}' />
                <div class='desc'>
                    <h2>${this.getAttribute('name')}</h2>
                    <p>Price: ${this.getAttribute('price')}</p>
                    <p>${this.getAttribute('description')}</p>
                </div>
                <button class='add-cart'>Add to cart</button>
            </div>
        `;

        this.querySelector('.add-cart').addEventListener('click', () => {
            setTimeout(() => {
                alert('Produte Telah ditambahkan ke keranjang ✔')
            }, 1000);
        })
    }
}


customElements.define('product-item', ProdutItem);