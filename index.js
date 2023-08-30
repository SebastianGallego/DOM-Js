
const consigna2Div = document.getElementById('consigna2');
const titulo = document.getElementById('titulo');
const subTitulo = document.getElementById('subTitulo');
const btnEliminarItem = document.getElementById('btnEliminarItem');
const consigna3Div = document.getElementById('consigna2');
const btnCambiarImagen = document.getElementById('btnCambiarImagen');
const imagen = document.getElementById('imagen');


btnSeleccionarTarea.addEventListener('click', function() {
    
    fncInicio();
    
});






function fncInicio() {

    consigna2Div.style.display = 'none';
    consigna3Div.style.display = 'none';


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

    consigna2Div.style.display = 'none';
    consigna3Div.style.display = 'none';

    titulo.textContent = "Crea un Elemento";
    subTitulo.textContent = "Se agrega un Div al final del Body";
    
    
    const nuevoDiv = document.createElement('div');

    nuevoDiv.textContent = 'Este es un div creado con JS ';

    // Agrego el nuevo div al final del body
    document.body.appendChild(nuevoDiv);

}

//Opcion 2 Eliminación de elementos: Crea una lista de elementos y un botón. 
//Al hacer clic en el botón, elimina el primer elemento de la lista.
function eliminarElemento() {

    consigna2Div.style.display = 'block';
    consigna3Div.style.display = 'none';

    titulo.textContent = "Elimina el 1er elemento";
    subTitulo.textContent = "de la lista con el botón";

    btnEliminarItem.addEventListener('click', function() {
        
        // Lista de elementos
        const lista = document.getElementById('listaElementos');
    
        // Verifico si la lista tiene elementos
        if (lista.children.length > 0) {
            lista.removeChild(lista.firstChild);
            } else {
            alert('La lista está vacía.');
            }
    });

}





//Opcion 3 Cambio de atributos: Crea una imagen en tu página web y utiliza JavaScript 
//para cambiar su atributo src a una imagen diferente. 
function cambiarAtributo() {
    consigna3Div.style.display = 'block';
    consigna2Div.style.display = 'none';

    btnCambiarImagen.addEventListener('click', function() {
    
        
        imagen.src = 'planta.jpg';
    
    });




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
//window.onload = fncInicio();



document.addEventListener('DOMContentLoaded', function() {
    

    
});
   



    




      

   
