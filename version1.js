


const elementoResultado = document.getElementById('txtResultadoNota');
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

    const volverBtn = document.getElementById('btnVolver');
    volverBtn.addEventListener('click', function() {
        // Redirige a la página principal (index.html)
        window.location.href = 'index.html';
    });
    


    function fncInicializacion() {
        
        elementoResultado.textContent = "Ingresar un número entre 0 y 100";
        elementoTrabajosPracticos.checked  = true;
        elementoAsistencia.checked  = true;
        elementotxtResultadoTpAsistencia.hidden = true;
    }



    // Inicializa cuando se carga la página
    window.onload = fncInicializacion();