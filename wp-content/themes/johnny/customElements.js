class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class TwoSidedMarket extends HTMLElement{
      connectedCallback(){
            this.innerHTML = `<a href="Make & Sell">Make & Sell</a>&nbsp;<a href="Browse & Buy">Browse & Buy</a>`;
      }
}

customElements.define("x-twosided", TwoSidedMarket);
