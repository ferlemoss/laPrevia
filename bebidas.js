const bebidasArray = [];
class bebidas {
    constructor(id,tipo,precio,stock){
        this.id=id;
        this.tipo=tipo;
        this.precio=precio;
        this.stock=stock;
    };
};

const gaseosa=new bebidas (7,"gaseosa",350,90);
bebidasArray.push(gaseosa);

const quilmes=new bebidas (8,"quilmes",300,60);
bebidasArray.push(empanadas);

const levite=new bebidas (3,"levite",500,100);
bebidasArray.push(levite);

const fernet=new bebidas (4,"fernet",1600,30);
bebidasArray.push(fernet);

const schneirder=new bebidas (5,"schneirder",350,60);
bebidasArray.push(schneirder);

const latasCerveza=new bebidas (6,"latasCerveza",250,140);
bebidasArray.push(latasCerveza);