let db = JSON.parse(localStorage.getItem("carrito")) || [];

if(!db.length) console.log("no hay datos")
else {
   const lis = db.map(item => {
      return `<li>nombre:${item.nombre} cantidad:${item.cantidad} total:${item.total}</li>`
   }).join("")

   document.querySelector("ul").innerHTML = lis;
}

document.querySelector("#cleanStorage").addEventListener("click",()=>{
   let db = JSON.parse(localStorage.getItem("carrito")) || [];

   db = [];
   localStorage.setItem("carrito",  JSON.stringify(db));
   window.location.href = "/";
})
