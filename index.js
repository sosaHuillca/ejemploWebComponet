import "./card-product.js"

customElements.define('render-productos',
class Render extends HTMLElement {

  static get observedAttributes(){
    return ["url"];
  }

  attributeChangedCallback(attr, oldVal, newVal){ 
    this[attr]=newVal;
    this.render();
  }

  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.data = null;
  }

  connectedCallback(){
    fetch(this.url)
      .then(response => response.json())
      .then(data => {
        // Manipular los datos JSON
        this.data = data.productos;
        this.render();
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }

  render(){
    if (this.data === null) {
      return; // No renderizar si los datos aún no están disponibles
    }

    const productos = this.data.map(item=>`<card-product
      imagen=${item.imagen}
      nombre=${item.nombre}
      precio=${item.precio}
      idi=${item.id}
      ></card-product>`).join("");

    return this.shadowRoot.innerHTML = `
      <style>
      section{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(9rem,1fr));
        gap: 1rem;
      }
      </style>

      <section>${productos}</section>
    `
  }

});
