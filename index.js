let producto =  parseInt(prompt("escoge el producto que desea comprar: 1-Lomos 2-Empanadas 3- Hamburguesas 4-Pizzas 5-Papas Fritas 6-Pollo"));

let seguirComprando= true;

let totalCompra= 0;

let desicion;

while(seguirComprando===true){
    if(producto===1){
        totalCompra=totalCompra+1500
    }else if(producto===2){
        totalCompra=totalCompra+800
    } else if(producto===3){
        totalCompra=totalCompra+1100
    }else if(producto===4){
        totalCompra=totalCompra+900
    }else if(producto===5){
        totalCompra=totalCompra+500
    }else (producto===6){
        totalCompra=totalCompra+850
    }
}
desicion = prompt ("quieres seguir comprando 1-Si   2-No")
    if(desicion===1){
        producto = parseInt(prompt("escoge el producto que desea comprar: 1-Lomos 2-Empanadas 3- Hamburguesas 4-Pizzas 5-Papas Fritas 6-Pollo"))
    }else{
        seguirComprando = false
    };
    
alert ("El total de tu compra es"+totalCompra);