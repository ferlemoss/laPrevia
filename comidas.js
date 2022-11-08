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
