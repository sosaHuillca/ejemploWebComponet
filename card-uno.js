// componente mostrar producto home
import "./card-product.js"
// Cargar el archivo JSON
fetch('./db_products.json')
   .then(response => response.json())
   .then(data => {
      // Manipular los datos JSON
      const allProductos = data.productos.map(producto => `<card-product
      imagen='${producto.imagen}'
      nombre='${producto.nombre}'
      precio='${producto.precio}'
      idi='${producto.id}'
      ></card-product>`).join("");

      document.querySelector("#render_productos").insertAdjacentHTML('beforeend', allProductos);

      /*
      document.querySelectorAll("card-product").forEach(card =>{
	 card.addEventListener("click",e => {

	    let db = JSON.parse(localStorage.getItem("carrito")) || [];

	    let id = e.target.getAttribute("idi")
	    let cantidad = e.target.getAttribute("cantidad")
	    let total = e.target.getAttribute("total")
	    let nombre = e.target.getAttribute("nombre")

	    let itemFound = false;

	    if(db.length === 0){
	       db.push({id, cantidad, total, nombre});
	    } 

	    for (let i = 0; i < db.length; i++) {
	       if (db[i].id === id) {
		  db[i].cantidad = cantidad;
		  db[i].total = total;
		  itemFound = true;
		  break; // Romper el bucle si ya se encontró y actualizó el objeto
	       }
	    }

	    if (!itemFound) {
	       db.push({ id, cantidad, total, nombre});
	    }

	    localStorage.setItem("carrito",  JSON.stringify(db));

	 })
      })
      */

document.querySelector("#registrarProductos").addEventListener("click",()=>{

      document.querySelectorAll("card-product").forEach(card =>{
	    let db = JSON.parse(localStorage.getItem("carrito")) || [];
	    let id = card.getAttribute("idi")
	    let cantidad = card.getAttribute("cantidad")
	    let total = card.getAttribute("total")
	    let nombre = card.getAttribute("nombre")

	 if(cantidad && total){
	    let itemFound = false;

	    if(db.length === 0){
	       db.push({id, cantidad, total, nombre});
	    } 

	    for (let i = 0; i < db.length; i++) {
	       if (db[i].id === id) {
		  db[i].cantidad = cantidad;
		  db[i].total = total;
		  itemFound = true;
		  break; // Romper el bucle si ya se encontró y actualizó el objeto
	       }
	    }

	    if (!itemFound) {
	       db.push({ id, cantidad, total, nombre});
	    }

	    localStorage.setItem("carrito",  JSON.stringify(db));
	 }
      })
})
   })
   .catch(error => console.error('Error al cargar el archivo JSON:', error));

