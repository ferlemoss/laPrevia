const comidasArray = []

class NewComidas {
    constructor(id,tipo,precio,stock){
        this.id=id;
        this.tipo=tipo;
        this.precio=precio;
        this.stock=stock;
    };
};

const lomos=new NewComidas (1,"lomos",1500,50);
comidasArray.push(lomos);
const empanadas=new NewComidas (2,"empanadas",800,40);
comidasArray.push(empanadas);
const hamburguesas=new NewComidas (3,"hamburguesas",1100,20);
comidasArray.push(hamburguesas);
const pizzas=new NewComidas (4,"pizzas",900,50);
comidasArray.push(pizzas);
const papasFritas=new NewComidas (5,"papasFritas",500,60);
comidasArray.push(papasFritas);
const pollo=new NewComidas (6,"pollo",850,20);
comidasArray.push(pollo);

const selectComida = document.getElementById('lista')

comidasArray.forEach((elemento) => {
  const optionProd = document.createElement('option')
  optionProd.innerText = `${elemento.tipo}: $${elemento.precio}`
  optionProd.setAttribute('id', `${elemento.id}`)
  selectComida.append(optionProd)
})

const carrito = []

const botonIngresar = document.getElementById('ingresarComida')
const finalizarPedido = document.getElementById('finalizar')

botonIngresar.onclick = () => {
  console.log(selectComida.selectedIndex)
  const indexComida = selectComida.selectedIndex
  const comidaSeleccionada = comidasArray[indexComida]
  console.log(comidaSeleccionada)
  carrito.push(comidaSeleccionada)
}

finalizarPedido.onclick = () => {
  console.log(carrito)
  let total = 0
  carrito.forEach((comida) => {
    total = total + comida.precio
  })
  alert(
    `Elegiste ${carrito.length} comidas y el total es de ${total}`
  )
}