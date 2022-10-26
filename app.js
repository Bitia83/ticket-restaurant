const respuesta = document.querySelector("#respuesta");
console.log(respuesta.rows)

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
    pintarfooter(respuesta)
  } catch (error) {}
};

const pintarDatos = (data) => {
 
  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${item.quantity}</td>
    <td>${item.product}</td>
    <td>${item.unitPrice}</td>
    <td>${item.unitPrice * item.quantity}</td>
`;

    respuesta.appendChild(row);
  });
};

const pintarfooter = (respuesta) => {
  let total = 0;
for (let i = 0; i < respuesta.rows.length; i++) {
     rowValue = respuesta.rows[i].cells[3].innerHTML;
    total += parseFloat(rowValue); 
  }
  console.log(total)
  const tdTotal = document.getElementById("tdTotal");
  tdTotal.textContent = total;
}
