const comidasArray = [];
class comidas {
    constructor(id,tipo,precio,stock){
        this.id=id;
        this.tipo=tipo;
        this.precio=precio;
        this.stock=stock;
    };
};

const lomos=new comidas  (1,"lomo",1500,50);
comidasArray.push(lomos);
const empanadas=new comidas  (2,"empanadas",800,40);
comidasArray.push(empanadas);
const hamburguesas=new comidas  (3,"hamburguesas",1100,20);
comidasArray.push(hamburguesas);
const pizzas=new comidas  (4,"pizzas",900,50);
comidasArray.push(pizzas);
const papasFritas=new comidas  (5,"papasFritas",500,60);
comidasArray.push(papasFritas);
const pollo=new comidas  (6,"lomo",850,20);
comidasArray.push(pollo);


let seguirComprando= true;

let totalCompra= 0;

let desicion;

while(seguirComprando===true){
    let producto =  parseInt(prompt("escoge el producto que desea comprar: 1-Lomos 2-Empanadas 3- Hamburguesas 4-Pizzas 5-Papas Fritas 6-Pollo"));
    if(producto===1){
        totalCompra=totalCompra+1500
        alert ("el total hasta el momento es de:"+totalCompra)
    }else if(producto===2){
        totalCompra=totalCompra+800
        alert ("el total hasta el momento es de:"+totalCompra)
    } else if(producto===3){
        totalCompra=totalCompra+1100
        alert ("el total hasta el momento es de:"+totalCompra)
    }else if(producto===4){
        totalCompra=totalCompra+900
        alert ("el total hasta el momento es de:"+totalCompra)
    }else if(producto===5){
        totalCompra=totalCompra+500
        alert ("el total hasta el momento es de:"+totalCompra)
    }else if(producto===6){
        totalCompra=totalCompra+850
        alert ("el total hasta el momento es de:"+totalCompra)
    }
    seguirComprando=confirm("¿Quiere seguir comprando?")
}

alert ("El total de tu compra es"+totalCompra);

