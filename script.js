// Custom Element HTML

// class MyElement extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = 'Hello World';
//     }
// }

// customElements.define('my-element', MyElement);


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
            }, 500);
        })
    }

    // disconnectedCallback => digunakan ketika element yang kita buat dihapus dari dom : ini akan meningkatkan performa website karena element yang kita masukan ke dalam disconnectedCallback tidak akan ikut dirender
    disconnectedCallback() {
        console.log('Element is removed from DOM.')
    }
}


customElements.define('product-item', ProdutItem);
const producItem = document.createElement('product-item');
producItem.setAttribute('image', './img/1.jpg');
document.body.appendChild(producItem);

document.body.removeChild(producItem);



// Contoh lain
class MyELement extends HTMLElement {
    connectedCallback() {
        // Menambahkan event listener
        this.addEventListener('click', this.onClik);
    }

    disconnectedCallback() {
        // membersihkan event listener
        this.removeEventListener('click', this.onClik);
        console.log('Element is removed.')
    }


    // jadi setelah fungsi di ini di jalankan langsung memanggil disconnectCallback untuk menghapus event tersebut
    onClik() {
        alert('Element di klik');
        this.disconnectedCallback();
    }
}
customElements.define('my-element', MyELement);














// Methode untuk custom element

// 1. customElements.define() :> digunakan untuk meng - define sebuah custom element.

// 2. constructor() :> digunakan untuk meng - instantiasi sebuah custom element.

// 3. connectedCallback() :> digunakan untuk menjalankan kode setelah sebuah custom element di - attach ke DOM.

// 4. disconnectedCallback() :> digunakan untuk menjalankan kode setelah sebuah custom element di - detach dari DOM.

// 5. adoptedCallback() :> digunakan untuk menjalankan kode setelah sebuah custom element dipindahkan ke document lain.

// 6. attributeChangedCallback() :> digunakan untuk menjalankan kode setelah sebuah atribut pada sebuah custom element diubah.

// 7. static get observedAttributes() :> digunakan untuk mendefinisikan atribut apa saja yang akan di - observe oleh sebuah custom element.

// 8. get[attributeName]() :> digunakan untuk mendapatkan nilai dari sebuah atribut pada sebuah custom element.

// 9. set[attributeName](value): digunakan untuk mengatur nilai dari sebuah atribut pada sebuah custom element.

// 10. attachShadow({ mode }): digunakan untuk menambahkan sebuah shadow DOM pada sebuah custom element.