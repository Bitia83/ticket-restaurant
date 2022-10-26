const respuesta = document.querySelector("#respuesta");
console.log(respuesta.rows)
const templateBody = document.querySelector("#template-body")
const footer = document.querySelector("#footer")
const templateFooter = document.querySelector('#template-footer')


document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("http://localhost:3000/products");
    //lo trabajamos en json
    const data = await res.json();
    console.log(data);
    //una vez que tenemos la data la pintamos
    pintarDatos(data);
    
  } catch (error) {}
};

const pintarDatos = (data) => {
  const fragment = document.createDocumentFragment()
  respuesta.textContent = "";
 
  data.forEach((item) => {
    const clone = templateBody.content.cloneNode(true);
     clone.querySelector("#uds").textContent = item.quantity;
     clone.querySelector("#product").textContent = item.product;
     clone.querySelector("#price").textContent = item.unitPrice;
     clone.querySelector("#importe").textContent = item.unitPrice * item.quantity;
    
    fragment.appendChild(clone);
  });
  respuesta.appendChild(fragment);
  pintarfooter(data);
};

const pintarfooter = (data) => {
console.log("pintar footer")
  footer.textContent = "";
  const total = data.reduce((acc, current) => acc + current.unitPrice * current.quantity, 0);
  console.log(total)
  const clone = templateFooter.content.cloneNode(true)
  clone.querySelector('#tdTotal').textContent = total
  footer.appendChild(clone)
}
