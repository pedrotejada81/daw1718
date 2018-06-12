llenartabla();

function llenartabla(){
    var tbody = document.querySelector('#inscritos tbody');
    tbody.innerHTML = '';    
    var aDni = JSON.parse(localStorage.getItem('dni')),
        aCurso = JSON.parse(localStorage.getItem('curso')),
        aNombre = JSON.parse(localStorage.getItem('nombre')),
        aApellidos = JSON.parse(localStorage.getItem('apellidos')),
        aFnacimiento = JSON.parse(localStorage.getItem('fnacimiento')),
        aTelefono = JSON.parse(localStorage.getItem('telefono')),
        aEmail = JSON.parse(localStorage.getItem('email')),
        aFoto = JSON.parse(localStorage.getItem('foto'));   

    
    
    var c = aDni.length;
    
    for(var i=0; i<c; i++){
        
        var fila = document.createElement ('tr');
        
        var celdadni = document.createElement('td'),
            celdacurso = document.createElement('td'),
            celdanombre = document.createElement('td'),
            celdaapellidos = document.createElement('td'),
            celdafnacimiento = document.createElement('td'),
            celdatelefono = document.createElement('td'),
            celdaemail = document.createElement('td'),        
            celdafoto = document.createElement('td');        
            
        var nodoTextodni = document.createTextNode(aDni[i]),
            nodoTextocurso = document.createTextNode(aCurso[i]),
            nodoTextonombre = document.createTextNode(aNombre[i]),
            nodoTextoapellidos = document.createTextNode(aApellidos[i]),
            nodoTextofnacimiento = document.createTextNode(aFnacimiento[i]),
            nodoTextotelefono = document.createTextNode(aTelefono[i]),
            nodoTextoemail = document.createTextNode(aEmail[i]),
            nodoTextofoto = document.createTextNode(aFoto[i]);
        
        celdadni.appendChild(nodoTextodni);
        celdacurso.appendChild(nodoTextocurso);
        celdanombre.appendChild(nodoTextonombre);
        celdaapellidos.appendChild(nodoTextoapellidos);
        celdafnacimiento.appendChild(nodoTextofnacimiento);
        celdatelefono.appendChild(nodoTextotelefono);
        celdaemail.appendChild(nodoTextoemail);
        celdafoto.appendChild(nodoTextofoto);
        
        fila.appendChild(celdadni);
        fila.appendChild(celdacurso);
        fila.appendChild(celdanombre);
        fila.appendChild(celdaapellidos);
        fila.appendChild(celdafnacimiento);
        fila.appendChild(celdatelefono);
        fila.appendChild(celdaemail);
        fila.appendChild(celdafoto);
        
        tbody.appendChild(fila);     
     
    }   
    
}
    