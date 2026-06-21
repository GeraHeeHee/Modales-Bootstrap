var txtNombre = document.getElementById("txt-nombre");
var txtDomicilio = document.getElementById("txt-domicilio");
var btnAceptar = document.getElementById("btn-aceptar");

btnAceptar.addEventListener('click',validarContenido);


function validarContenido(){
    
    var textoNombre = "";
    var textoDomicilio = "";

    textoNombre = txtNombre.value.trim(); // Se añade .trim() para evitar espacios en blanco
    textoDomicilio = txtDomicilio.value.trim();
    
    console.log("El nombre es: " + textoNombre);
    console.log(`El domicilio es: ${textoDomicilio}`);

    // Instancia del modal de Bootstrap
    var miModal = new bootstrap.Modal(document.getElementById('modalError'));
    var contenedorMensaje = document.getElementById('mensajeError');

    // Validación de campos
    if(textoNombre.length === 0){
        contenedorMensaje.textContent = "Error, el campo Nombre no debe estar vacío.";
        miModal.show();
    }
    else if(textoDomicilio.length === 0){
        contenedorMensaje.textContent = "Error, el campo Domicilio no debe estar vacío.";
        miModal.show();
    }
    else{
        console.log("Campos correctos!");
        // Aquí puedes agregar la lógica en caso de que todo sea exitoso
    }
}

function suma(a, b){return a+b;}
function resta(a, b){return a-b;}
function operacion(a,b, myFuncion){return myFuncion(a,b); }

console.log(5,2,suma);
console.log(5,2,resta);