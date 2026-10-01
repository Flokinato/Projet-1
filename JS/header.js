class SiteHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`  
        <header class="header">
        <a class="a1_header" href="index.html">Orion<span class="span_header">.</span></a>
        <nav class="nav_1">
            <a class="a_header" href="index.html">Home</a>
            <a class="a_header" href="projet.html">Projet</a>
            <a class="a_header" href="contact.html">Contact</a>
        </nav>
        </header>`;
        const pageName = this.getAttribute("data-page");
        const finderName = pageName + ".html";
        console.log(finderName);
        const activeLink = this.querySelector(`nav a[href="${finderName}"]`);
        if(activeLink){
            activeLink.setAttribute("aria-current", "actif");
            console.log(activeLink);
        }
        
    }
}

customElements.define('site-header', SiteHeader);