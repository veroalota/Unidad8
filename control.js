



function validar() {
    let usuario, clave;
    usuario= document.getElementById("usuario").value;
    clave= document.getElementById("clave").value;
    
   
        if(usuario==="" || clave===""){
            alert("complete los campos que se encuentran vacíos");
                return false;
        }
        
        else if
            (usuario.length>30){
            alert("el nombre es muy largo");
                return false;
            }
        else if(clave.length<8){
            alert("la clave debe contener por lo menos 8 caracteres");
                return false;
        }
   
        else {
            document.write(document.getElementById("usuario").value + '<br>'+ document.getElementById("clave").value);
        };
    }