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
        const pageName = this.getAttribute("data-page");
        const finderName = pageName + ".html";
        console.log(finderName);
        const activeLink = this.querySelector(`a[href="${finderName}"]`);
        if(activeLink){
            activeLink.setAttribute("aria-current", "actif");
            console.log(activeLink);
        }
        
    }
}

customElements.define('site-header', SiteHeader);