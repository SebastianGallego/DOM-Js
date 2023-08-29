const volverBtn = document.getElementById('btnVolver');
    volverBtn.addEventListener('click', function() {
        // Redirige a la página principal (index.html)
        window.location.href = 'index.html';
    });
    




function fncInicio() {

    const opcionesMenu = `\n1. Creación de elementos \n2. Eliminación de elementos \n3. Cambio de atributos \n4. Cambio de contenido HTML \n5. Anidación de elementos  \n6. Reemplazo de elementos \n7. Clonación de elementos \n8. Movimiento de elementos \n9. Cambio de estilo \n10. Edición de contenido`


    const menu = parseInt(prompt("Ingresa una opcion:" +opcionesMenu ));

            if (isNaN(menu)) {
                alert("Debes ingresar un año válido.");
                return;
            }

    console.log(menu);        

    switch (menu) {

        case 1:
            crearElemento();
            break;

        case 2:
            eliminarElemento();
            break;

        case 3:
            cambiarAtributo();
            break;

        case 4:
            cambiarContenido();
            break;
            
        case 5:
            anidarElemento();
            break;
    
        case 6:
            reemplazarElemento();
            break;
    
        case 7:
            clonarElemento();
            break;
    
        case 8:
            moverElemento();
            break;

        case 9:
            cambiarEstilo()
            break;
      
        case 10:
            editarContenido();
            break;
        
        default:
            window.location.href = 'index.html';  
    }
    
}


//Opcion 1 Creación de elementos: Crea un script que cree dinámicamente un elemento <div> 
// con un texto dentro y lo agregue al final del cuerpo del documento.
function crearElemento() {


}

//Opcion 2 Eliminación de elementos: Crea una lista de elementos y un botón. 
//Al hacer clic en el botón, elimina el primer elemento de la lista.
function eliminarElemento() {


}


//Opcion 3 Cambio de atributos: Crea una imagen en tu página web y utiliza JavaScript 
//para cambiar su atributo src a una imagen diferente. 
function cambiarAtributo() {


}


//Opcion 4 Cambio de contenido HTML: Crea un párrafo en tu página y utiliza JavaScript 
//para cambiar su contenido HTML a un nuevo párrafo. 
function cambiarContenido() {


}


//Opcion 5 Anidación de elementos: Crea un elemento <ul> y agrega varios elementos <li> 
//a él utilizando JavaScript. 
function anidarElemento() {


}


//Opcion 6 Reemplazo de elementos: Crea un elemento <p> en tu página web y utiliza 
//JavaScript para reemplazarlo por un nuevo elemento 
function reemplazarElemento() {


}


//Opcion 7 Clonación de elementos: Crea un elemento <div> con contenido en tu página y 
//utiliza JavaScript para clonarlo y agregar el clon después del original. 
function clonarElemento() {


}


//Opcion 8 Movimiento de elementos: Crea dos elementos <div> y utiliza JavaScript para 
// mover uno de ellos dentro del otro, convirtiéndolo en un elemento secundario.
function moverElemento() {


}


//Opcion 9 Cambio de estilo: Crea un elemento <p> y utiliza JavaScript para cambiar su 
//estilo, como el color de fuente o el tamaño del texto. 
function cambiarEstilo() {


}


//Opcion 10 Edición de contenido: Crea un elemento <span> con texto en tu página y utiliza 
// JavaScript para permitir que el usuario edite el contenido del <span>
function editarContenido() {


}





// Inicializa cuando se carga la página
window.onload = fncInicio();



























/*const elementoResultado = document.getElementById('txtResultadoNota');
const elementoNota = document.getElementById('inputNota');
const elementoTrabajosPracticos = document.getElementById('trabajosPracticos');
const elementoAsistencia = document.getElementById('asistencia');
const elementotxtResultadoTpAsistencia = document.getElementById('txtResultadoTpAsistencia');
const elementotxtMensaje = document.getElementById('txtMensaje');

let nota;



// escucho los cambios en el imput 
elementoNota.addEventListener('input', function() {
    nota = parseInt(elementoNota.value);
    
    if (isNaN(nota) || nota<0 || nota>100) {
        elementoResultado.classList.add('alert-danger');
        elementoResultado.textContent = "Error: Ingresar un número entre 0 y 100";
        elementoResultado.classList.remove('alert-success');
        
     }else {
        if (nota>=60) {
        elementoResultado.classList.remove('alert-danger');
        elementoResultado.classList.add('alert-success');
        elementoResultado.textContent = "Aprobado";
            }else {
            elementoResultado.classList.add('alert-danger');
            elementoResultado.textContent = "Reprobado";
            elementoResultado.classList.remove('alert-success');
             }
        switch (true) {
                case (nota>=90 && nota<=100):
                    elementotxtMensaje.textContent= "¡Excelente trabajo!";
                  break;
                case (nota>=80 && nota<=89):
                    elementotxtMensaje.textContent= "Buen trabajo!";
                  break;
                case (nota>=70 && nota<=79):
                    elementotxtMensaje.textContent= "Estás con lo justo!";
                  break;
                case (nota>=60 && nota<=69):
                    elementotxtMensaje.textContent= "Debes mejorar un poco más!";
                  break;
                case (nota<=59):
                    elementotxtMensaje.textContent= "Debes mejorar mucho!";
                  break;
              }  
     }

    });

    // escucho los cambios en el checkbox
    elementoTrabajosPracticos.addEventListener('input', function() {
        fncVerificarCheckbox() ;
    });

    elementoAsistencia.addEventListener('input', function() {
        fncVerificarCheckbox() ;
    });



    function fncVerificarCheckbox() {
        if (elementoTrabajosPracticos.checked == false || elementoAsistencia.checked == false) {
            elementotxtResultadoTpAsistencia.hidden = false;
   
           }else {
               elementotxtResultadoTpAsistencia.hidden = true;
           }
    }

    


    function fncInicializacion() {
        
        elementoResultado.textContent = "Ingresar un número entre 0 y 100";
        elementoTrabajosPracticos.checked  = true;
        elementoAsistencia.checked  = true;
        elementotxtResultadoTpAsistencia.hidden = true;
    }



    */ 