class SiteFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`  
        <footer class="footer">
        <a class="a1_footer" href="index.html">Orion<span class="span_footer">.</span></a>
        <nav class="nav_2">
            <ul class="ul_footer">
                <li><a class="a_footer" href="cgu.html">CGU</a></li>
                <li><a class="a_footer" href="cgv.html">CGV</a></li>
                <li><a class="a_footer" href="conf.html">Confidencialité</a></li>
            </ul>
        </nav>
        </footer>`;
    }
}

customElements.define('site-footer', SiteFooter);