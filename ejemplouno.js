let nombre = document.getElementById("nombre");

nombre.addEventListener('keyup',()=>{ //primera letra mayuscula y no deja colocar numeros
        let inputname = document.activeElement.name, ip = 0, res = [], texto = document.getElementById(inputname).value.toLowerCase() ;  //Variables
        texto = texto.replace (/^ /,"");          //Valida que el primer espacio no este en blanco
        texto = texto.replace (/[ ]+/g," ");      //Valida q no hayan varios espacios juntos
        texto = texto.replace (/[.,0-9@]+/g,"");  //Valida para que no reciba .,0-9@
        for (let i = 0; i<texto.length;i++) {
        if (ip==0) {
        res.push(texto[i].toUpperCase());
        ip++
        i++
        }
        res.push(texto[i]);
        if(texto[i]==" ") {
        ip = 0;
        }
        }
        document.getElementById(inputname).value = res.join("") ;
});

nombre.addEventListener('blur',()=>{


});



   


function agrerarmateria(){    
    //cerrarswal()
    //var dato = document.activeElement.name;
    //let user = document.getElementById("tuser").value;
    
    Swal.fire({
      title: '',
      text: "",
      html: '<br><center><form id="ffire" name="ffire" class="formSwal" onsubmit="sendText(event)" >'+
            '<h2 class"info"><b id="cra">Selecciona materia</b></h2><br>'+
            '<select id="cat" name="cat" class="input" onchange="fna()" title="Materia" ><option disabled selected>Materia</option><option>Algebra</option><option>Matematicas</option><option>Ingles</option><option>Fisica</option><option>Quimica</option></select>'+
             '<input type="number" id="" name="" class="input"   placeholder="Valor" >&nbsp;<br>'+
            
            
            
            '<button id="gnc" name="gnc" class="btn-swal" onclick="sendText(event)" onfocus="" ><b>Guardar</b></button>&nbsp;&nbsp;&nbsp;&nbsp;'+
            '<button id="cerrar" class="btn-swal" onclick="sendText(event),cs()"><b>Cerrar</b></button><br><br>'+
            //'<h3 id="info">.</h3>'+
            '</form></center><br>',
       backdrop: true,   // 
       allowOutsideClick: false,    // solo puede cerrar con el boton
      showConfirmButton: false,
        customClass: {
        popup: 'popup-form',
       confirmButton: 'confirm-button-class',
      }
    })
    //document.getElementById("info").style.visibility = "hidden";
    
    
    }