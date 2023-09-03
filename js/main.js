function siguesAhi (){
    Swal.fire("Sigues ahi?")
 }
 setTimeout(siguesAhi,10000)

const productos = [];
let carrito = [];

function Productos(id,nombre,precio,stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    productos.push(this)
};

const producto1 = new Productos(1,"Sesion de Reiki Usui", 4900, 15);
const producto2 = new Productos(2,"Sesion de Karmic Reiki", 4500, 16);
const producto3 = new Productos(3,"Sesion de Barras de Access", 6000, 12);
const producto4 = new Productos(4,"Sesion de Gemoterapia", 2500, 9);
const producto5 = new Productos(5,"Meditacion", 3000, 8);
const producto6 = new Productos(6,"Lectura de Registros Akashicos", 6500, 6)

let boton = document.getElementsByClassName("clickearAqui")
let listItem = document.getElementById("carrito")
let cuenta = document.getElementById("cuenta")

boton[0].addEventListener("click", (respuestaClick) => {
    let ítem = document.createElement("li");
    ítem.textContent = "La "+ productos[0].nombre + " cuesta $"+ productos[0].precio;
    listItem.appendChild(ítem);
    carrito.push(productos[0].precio);
    totalPagar();
})
boton[1].addEventListener("click", () => {
    let ítem = document.createElement("li");
    ítem.textContent = "La "+ productos[1].nombre + " cuesta $"+ productos[1].precio;
    listItem.appendChild(ítem);
    carrito.push(productos[1].precio);
    totalPagar();
})
boton[2].addEventListener("click", () => {
    let ítem = document.createElement("li");
    ítem.textContent = "La "+ productos[2].nombre + " cuesta $"+ productos[2].precio;
    listItem.appendChild(ítem);
    carrito.push(productos[2].precio);
    totalPagar();
})
boton[3].addEventListener("click", () => {
    let ítem = document.createElement("li");
    ítem.textContent = "La "+ productos[3].nombre + " cuesta $"+ productos[3].precio;
    listItem.appendChild(ítem);
    carrito.push(productos[3].precio);
    totalPagar();
})
boton[4].addEventListener("click", () => {
    let ítem = document.createElement("li");
    ítem.textContent = "La "+ productos[4].nombre + " cuesta $"+ productos[4].precio;
    listItem.appendChild(ítem);
    carrito.push(productos[4].precio);
    totalPagar();
})
boton[5].addEventListener("click", () => {
    let ítem = document.createElement("li");
    ítem.textContent = "La "+ productos[5].nombre + " cuesta $"+ productos[5].precio;
    listItem.appendChild(ítem);
    carrito.push(productos[5].precio);
    totalPagar();
})
boton[6].addEventListener("click", () => {
    let ítem = document.createElement("li");
    ítem.textContent = "La "+ productos[6].nombre+ "cuesta $"+ productos[6].precio;
    listItem.appendChild(ítem);
    carrito.push(productos[6].precio);
    totalPagar();
})


function totalPagar() {
    let importeTotal = carrito.reduce((total,precio) => total + precio , 0);
    let totalPagarhS = document.getElementById("totalPagar");
    totalPagarhS.textContent = "El importe total es de $ "+ importeTotal;
    cuenta.addEventListener("click", () => {
        localStorage.setItem("Total a Pagar", importeTotal);
        listItem.innerHTML = "",
        carrito = [];
    });
};

