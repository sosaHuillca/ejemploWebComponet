window.customElements.define('boton-agregar', class Element extends HTMLElement {

   static get observedAttributes(){
      return ["codigo","count"];
   }

   get codigo(){ return this.getAttribute("codigo"); }
   set codigo(val){ this.setAttribute("codigo",val); }

   get count(){ return this.getAttribute("count"); }
   set count(val){ 
      this.setAttribute("count",val); 
      this.shadowRoot.querySelector("button").textContent = `Agregado ${val}`;
   }

   connectedCallback(){
      this.shadowRoot.querySelector("button").addEventListener("click", (e)=>{
	 this.count = +(this.count) + 1;
	 e.target.style.backgroundColor = "red"
	 document.querySelector("#registrarProductos").style.backgroundColor = "red"
	 setTimeout(()=>{
	    this.shadowRoot.querySelector("button").style.backgroundColor = "blue"
	 document.querySelector("#registrarProductos").style.backgroundColor = "blue"
	 },100)
   });
}
   constructor(){ 
      super(); this.attachShadow({mode:'open'}); 
      this.setAttribute("count",0)
      this.shadowRoot.innerHTML =`
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
   `;
   }

});
