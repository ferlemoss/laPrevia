const bebidasArray = [];
class NewBebidas {
    constructor(id,tipo,precio,stock){
        this.id=id;
        this.tipo=tipo;
        this.precio=precio;
        this.stock=stock;
    };
};

const gaseosa=new NewBebidas (7,"gaseosa",350,90);
bebidasArray.push(gaseosa);

const quilmes=new NewBebidas (8,"quilmes",300,60);
bebidasArray.push(empanadas);

const levite=new NewBebidas (3,"levite",500,100);
bebidasArray.push(levite);

const fernet=new NewBebidas (4,"fernet",1600,30);
bebidasArray.push(fernet);

const schneirder=new NewBebidas (5,"schneirder",350,60);
bebidasArray.push(schneirder);

const latasCerveza=new NewBebidas (6,"latasCerveza",250,140);
bebidasArray.push(latasCerveza);

const selectBebidas = document.getElementById('listaB')

bebidasArray.forEach((elemento) => {
  const optionProd = document.createElement('option')
  optionProd.innerText = `${elemento.tipo}: $${elemento.precio}`
  optionProd.setAttribute('id', `${elemento.id}`)
  selectBebidas.append(optionProd)
})

const carrito2 = []

const botonIngresar = document.getElementById('ingresarBebida')
const finalizarPedido = document.getElementById('finalizar')

botonIngresar.onclick = () => {
  console.log(selectBebidas.selectedIndex)
  const indexBebidas = selectBebidas.selectedIndex
  const bebidasSeleccionada = bebidasArray[indexBebidas]
  console.log(bebidasSeleccionada)
  carrito2.push(bebidasSeleccionada)
}

finalizarPedido.onclick = () => {
  console.log(carrito2)
  let total = 0
  carrito2.forEach((bebidas) => {
    total = total + bebidas.precio
  })
  alert(
    `Elegiste ${carrito2.length} bebidas y el total es de ${total}`
  )
}