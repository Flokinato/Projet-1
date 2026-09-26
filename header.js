class SiteHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`  
        <header class="header">
        <img class="img_1" src="img/orion-logo-96bold.png" alt="">
        <nav class="nav_1">
            <ul class="ul1">
                <a href="index.html">Home</a>
                <a href="projet.html">Projet</a>
                <a href="contact.html">Contact</a>
            </ul>
        </nav>
        </header>`;
    }
}

customElements.define('site-header', SiteHeader);