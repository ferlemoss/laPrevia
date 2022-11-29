const formularioUsuario = document.getElementById('formulario');
const titulo = document.getElementById('titulo');
const nombreUsuario = document.getElementById('nombre');
const apellidoUsuario = document.getElementById('apellido');

const infoUsuario = {};

formularioUsuario.onsubmit = (e) =>{
    e.preventDefault();
    infoUsuario.nombre = nombreUsuario.value;
    infoUsuario.apellido = apellidoUsuario.value;
    localStorage.setItem('infoUsuario',JSON.stringify(infoUsuario));
};

const infoUsuarioStorage = JSON.parse(localStorage.getItem('infoUsuario'));
console.log(infoUsuarioStorage);
if(infoUsuarioStorage.nombre !== "" || infoUsuarioStorage.apellido !== ""){
    titulo.innerText = "HOLA"+infoUsuarioStorage.nombreUsuario+"BIENVENIDO DE NUEVO";
}