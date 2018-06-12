var aDni = [],
    aCurso = [],
    aNombre = [],
    aApellidos = [],
    aFnacimiento = [],
    aTelefono = [],
    aEmail = [],
    aFoto = [];
    
if(localStorage.getItem('dni')!=null) {
    aDni = JSON.parse(localStorage.getItem('dni'));
    aCurso = JSON.parse(localStorage.getItem('curso'));
    aNombre = JSON.parse(localStorage.getItem('nombre'));
    aApellidos = JSON.parse(localStorage.getItem('apellidos'));
    aFnacimiento = JSON.parse(localStorage.getItem('fnacimiento'));
    aTelefono = JSON.parse(localStorage.getItem('telefono'));
    aEmail = JSON.parse(localStorage.getItem('email'));
    aFoto = JSON.parse(localStorage.getItem('foto'));  
}

var elementoguardar = document.querySelector('#save');

elementoguardar.addEventListener('click', registrarEstudiante);

function registrarEstudiante(){
    var sDni = document.querySelector('#dni').value,
        sCurso = document.querySelector('#curso').value,
        sNombre = document.querySelector('#nombre').value,     
        sApellidos = document.querySelector('#apellidos').value,
        dFnacimiento = document.querySelector('#fnacimiento').value,
        tTelefono = document.querySelector('#telefono').value, 
        eEmail = document.querySelector('#email').value,
        iFoto = document.querySelector('#foto').value;

    aDni.push(sDni);
    aCurso.push(sCurso);
    aNombre.push(sNombre);
    aApellidos.push(sApellidos);
    aFnacimiento.push(dFnacimiento);
    aTelefono.push(tTelefono);
    aEmail.push(eEmail);
    aFoto.push(iFoto);
    
    localStorage.setItem('dni', JSON.stringify(aDni));
    localStorage.setItem('curso', JSON.stringify(aCurso));
    localStorage.setItem('nombre', JSON.stringify(aNombre));
    localStorage.setItem('apellidos', JSON.stringify(aApellidos));
    localStorage.setItem('fnacimiento', JSON.stringify(aFnacimiento));
    localStorage.setItem('telefono', JSON.stringify(aTelefono));
    localStorage.setItem('email', JSON.stringify(aEmail));
    localStorage.setItem('foto', JSON.stringify(aFoto));
    
    llenartabla();

}
         
             





