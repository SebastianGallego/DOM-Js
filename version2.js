//const nota = parseInt(prompt("Ingrese su Nota: "));

    
     $(document).ready(function() {
        $('#inputModal').modal('show');
    });
    
    let nota;

    document.getElementById("modalAceptar").addEventListener("click", function() {
        nota = parseInt(document.getElementById("modalInput").value);
        console.log(`Valor ingresado: ${nota}`); 
        $('#inputModal').modal('hide');
        
    });

     
    let trabajosPracticos = false;
    let asistencia = false;
 
    if (isNaN(nota) || nota<0 || nota>100) {
      // alert("Error: Ingresar un número entre 0 y 100");
    }else {
        $(document).ready(function() {
            $('#confirmModalTp').modal('show');
        });
      
        $(document).ready(function() {
            $('#confirmModalAsistencia').modal('show');
        });
    }



function asistenciaSi() {
    asistencia=true;
    console.log(asistencia);
}

function asistenciaNo() {
    asistencia=false;
    console.log(asistencia);
}


function tpSi() {
    trabajosPracticos=true;
    console.log(trabajosPracticos);
}

function tpNo() {
    trabajosPracticos=false;
    console.log(trabajosPracticos);
}




    
    
