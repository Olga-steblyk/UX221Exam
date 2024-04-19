class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class TwoSidedMarket extends HTMLElement{
      connectedCallback(){
            this.innerHTML = `<a href="side-a">Side A</a>&nbsp;<a href="side-b">Side B</a>`;
      }
}

customElements.define("x-twosided", TwoSidedMarket);
