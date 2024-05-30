window.customElements.define('boton-agregar', class Element extends HTMLElement {

   static get observedAttributes(){
      return ["codigo","count"];
   }
   constructor(){ 
      super(); this.attachShadow({mode:'open'}); 
    if(!this.hasAttribute("count")) {
      this.count = 0;
    }
   }

   get codigo(){ return this.getAttribute("codigo"); }
   set codigo(val){ return this.setAttribute("codigo",val); }

   get count(){ return parseInt(this.getAttribute("count"),10); }
   set count(val){ return this.setAttribute("count",val); }

   attributeChangedCallback(prop, oldVal, newVal){
    if(this[prop]) this.render();

    let btn = this.shadowRoot.querySelector("button");
    btn.addEventListener("click", this.inc.bind(this));
   }

   connectedCallback(){
      this.render();
      let btn = this.shadowRoot.querySelector("button");
      btn.addEventListener("click", this.inc.bind(this));
   }

  inc() {
    this.count++;
  }

   render(){
      return this.shadowRoot.innerHTML =`
      <style>
      button{
	padding:7px;
	background-color: blue;
	color:white;
	border-radius:10px;
	font-weight:bold;
      }
      </style>
      <button id="${this.codigo}">Agregar</button>
   `;}

});
