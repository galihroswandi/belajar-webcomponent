const template = document.createElement('template');
template.innerHTML = `
    <style>
        .user-card{
            font-family: 'Arial', sans-serif;
            background: #f4f4f4;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            margin-bottom: 15px;
            border-bottom: darkorchid 5px solid;
        }

        .user-card img{
            width: 100%;
        }

        .user-card button{
            cursor: pointer;
            background: darkorchid;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
        }
    </style>

    <div class="user-card">
        <img />
        <div>
            <h3></h3>

            <div class="info">
                <p><slot name="email" /></p>
                <p><slot name="phone" /></p>
            </div>
            <button id="toggle-info">Hide info</button>
        </div>
    </div>
`;

class UserCard extends HTMLElement {
    constructor() {
        super();

        // initialize seperti state
        this.showInfo = true;

        // Shadow DOM
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Merubah tulisan berdasarkan atribute yang di kirimkan dari html layaknya props di reactjs
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');

        // merubah gambar berdasarkan attribute dari custom element di html
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    toggleInfo() {
        // ketika show info active maka matikan / ketika show info mati aktifkan
        this.showInfo = !this.showInfo;

        // panggil element dari shadow root
        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

        if (this.showInfo) {
            info.style.display = 'block';
            toggleBtn.innerText = 'Hide info';
        } else {
            info.style.display = 'none';
            toggleBtn.innerText = 'Show info';
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    }
}

window.customElements.define('user-card', UserCard);



const templateNav = `
    <header class="bg-indigo-400 mb-14 py-4">
        <div class="container grid grid-cols-3 justify-center items-center">
            <div class="brand my-auto">
                <h1 class="text-3xl font-semibold text-slate-200">
                    Web Components
                </h1>
                <p class='text-slate-300 font-medium'>Studi kasus with tailwindcss</p>
            </div>
            <div class="nav-link col-start-3">
                <ul class="grid grid-cols-[100px_100px_100px] gap-2">
                    <li class="text-teal-300 text-xl text-center rounded-lg group">
                        <a href="index.html" class="group-hover:cursor-pointer pt-1 pb-2 px-5 rounded-lg group-hover:text-teal-100 group-hover:bg-blue-500">Home</a
                            >
                        </li>
                        <li class="text-teal-300 text-xl text-center rounded-lg group"><a href="about.html" class="group-hover:cursor-pointer pt-1 pb-2 px-5 rounded-lg group-hover:text-teal-100 group-hover:bg-blue-500">About</a></li>
                    <li class="text-teal-300 text-xl text-center rounded-lg group"><a href="contact.html" class="group-hover:cursor-pointer pt-1 pb-2 px-5 rounded-lg group-hover:text-teal-100 group-hover:bg-blue-500">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
`;


class NavTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = templateNav;
    }
}

window.customElements.define('my-navbar', NavTemplate);