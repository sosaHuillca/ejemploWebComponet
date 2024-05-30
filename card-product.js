import "./boton-agregar.js"

window.customElements.define('card-product', class Element extends HTMLElement {

   static get observedAttributes(){
      return ['idi','imagen','nombre','precio','descripcion','categoria','disponible', "cantidad", "total"];
   }
   get cantidad(){ return this.getAttribute("cantidad"); }
   set cantidad(val){ return this.setAttribute("cantidad",val); }

   get precio(){ return this.getAttribute("precio"); }
   set precio(val){ return this.setAttribute("precio",val); }

   get total(){ return this.getAttribute("total"); } 
   set total(val){ return this.setAttribute("total",val);}

   get imagen(){ return this.getAttribute("imagen"); } 
   set imagen(val){ return this.setAttribute("imagen",val);}

   get idi(){ return this.getAttribute("idi"); } 
   set idi(val){ return this.setAttribute("idi",val);}

   get nombre(){ return this.getAttribute("nombre"); } 
   set nombre(val){ return this.setAttribute("nombre",val);}

   get categoria(){ return this.getAttribute("categoria"); } 
   set categoria(val){ return this.setAttribute("categoria",val);}

   constructor(){ super(); this.attachShadow({mode:'open'});
      //this.render();
   }

   attributeChangedCallback(prop, oldVal, newVal){
    if(this[prop]) this.render();
   }

   connectedCallback(){
      this.render();

      let count = this.shadowRoot.querySelector("boton-agregar").addEventListener("click",(e) => {
	 let count = +e.target.getAttribute("count")
	 let precio = +this.precio;
	 console.log(count * precio)
	 this.total = count * precio;
	 /*
	 let precio = +this.precio;
	 console.log(e.target.getAttribute("count"),precio)
	 this.count = count;
	 this.total = count * precio;
	 */
      });

   }

   render(){
      return this.shadowRoot.innerHTML =
	 `
    <style>
:host{
  --cl-primary:#85501e;
  --cl-secundary:#fff;
}
*{ box-sizing:border-box; }

img{ width:100%; }

.layout-product{
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto max-content auto;
  background-color: darkorange;
  border-radius: .6rem;
  overflow: hidden;
}
.layout-product img{
    grid-column: 1/-1;
    height:6rem;
}

.layout-product h3{
  grid-column: 1/-1;
  grid-row: 2/3;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size:1rem;
  margin-left:.9rem;
}

.layout-product span{
  margin-left:.9rem;
  align-self:center;
}

/*
.layout-product button{
  border-radius:50%;
  border:none;
  background: var(--cl-primary);

  width: 40px;
  height: 40px;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center; 
  color:var(--cl-secundary);

  margin-bottom: 5px;
  margin-right: 5px;
  justify-self: end;
}
*/

.search-icon{
  position: absolute;
  width: 2rem;
  top: .5rem;
  left: 4.5rem;
}
    </style>
  <section class="layout-product" id="${this.idi}">
    <img src="${this.imagen}" />
    <h3>"${this.nombre}"</h3>
    <span>s/.${this.precio}</span>
    <boton-agregar codigo="${this.idi}" count="0" class="agregar"></boton-agregar>
  </section>
  `;
   }

});
