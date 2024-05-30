// componente mostrar producto home
import "./card-product.js"
// Cargar el archivo JSON
fetch('./db_products.json')
    .then(response => response.json())
    .then(data => {
       // Manipular los datos JSON
       const allProductos = data.productos.map(producto => `<card-product
      imagen="${producto.imagen}"
      nombre="${producto.nombre}"
      precio="${producto.precio}"
      idi="${producto.id}"
      ></card-product>`).join("");

       document.querySelector("#render_productos").innerHTML=allProductos
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));


