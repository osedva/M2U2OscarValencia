let divUno = document.getElementById("tUno");
let btnaMate = document.getElementById("agrMateria");
let btnTotal = document.getElementById("total");
let infomat = document.getElementById("infomat");
let btntaruno = document.getElementById("taruno");
let tbtot = document.getElementById("tabtot");
let nombre = document.getElementById("nombre");
divUno.style.display = "none";

btntaruno.addEventListener('click',()=>{
  divUno.style.display = "block"; 
  divDos.style.display = "none";
  tbtot.style.display = "none";
  let tbmat = document.getElementById("tableMate");
  let lon = tbmat.getElementsByTagName('tr');
  if (lon.length > 1) { 
    filas = lon.length;
    for(var i = 1 ; i < filas ; i++){ 
      document.getElementById("tableMate").deleteRow(1);
    } 
  } 
  infomat.innerHTML = ""; 
  document.forms["regmat"].reset();  
  document.forms["regmat"].elements[0].focus();
});


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

btnaMate.addEventListener('click',()=>{
let nombre = document.getElementById("nombre").value;
if(nombre == ""){
  infomat.innerHTML = "Ingresa Nombre";
  document.forms["regmat"].elements[0].focus();
  setTimeout('infomat.innerHTML = ""',3000);
}else{
  verfswal();
}
});

function cerrswal(e){
  e.preventDefault()
  swal.close()
}   


function verfswal(){  
    
    Swal.fire({
      title: '',
      text: "",
      html: '<br><center><form id="fswal" name="fswal" class="formSwal" onsubmit="sendText(event)" >'+
            '<h2 class="inf" >Selecciona materia</h2><br>'+
            '<select id="materia" name="materia" onchange="valorMat()" class="input sele" ><option></option><option>Algebra</option><option>Matematicas</option><option>Ingles</option><option>Fisica</option><option>Quimica</option></select>&nbsp;&nbsp;&nbsp;'+
             '<input type="number" id="valor" name="valor" class="input inputvalor"   placeholder="Valor" readonly ><br>'+
            '<button id="gnc" name="gnc" class="submit-btn" onclick="" onfocus="agregaMateria(event)" ><b>Agregar</b></button>&nbsp;&nbsp;&nbsp;'+
            '<button id="cerrar" class="submit-btn" onclick="cerrswal(event)"><b>Cerrar</b></button><br><br>'+
            '<h4 id="infoswal" class="inf">.</h4>'+
            '</form></center><br>',
       backdrop: true,   // 
       allowOutsideClick: false,    // solo puede cerrar con el boton
      showConfirmButton: false,
        customClass: {
        popup: 'popup-form',
       //confirmButton: 'confirm-button-class',
      }
    })
    
    }
  
  
  function valorMat(){
    let materias = ["Algebra", "Matematicas", "Ingles", "Fisica", "Quimica"];
    let materia = document.getElementById("materia").value;
    let valor = document.getElementById("valor");

    if(materia == materias[0]){
      valor.value = 100000;
    }else if(materia == materias[1]){
      valor.value = 150000;
    }else if(materia == materias[2]){
      valor.value = 200000;
    }else if(materia == materias[3]){
      valor.value = 250000;
    }else if(materia == materias[4]){
      valor.value = 300000;
    }else{
      valor.value = "";
    }
  }


  function agregaMateria(e){
    e.preventDefault();
    let seguir = true;
    let infoswal = document.getElementById("infoswal");
    let materia = document.getElementById("materia").value;
    let valor = document.getElementById("valor").value;
    let tableMate = document.getElementById("tableMate");
    let long = tableMate.getElementsByTagName('tr').length;

    if (long>1) {
      let datotd = tableMate.getElementsByTagName('td');
      for (let i = 0;i < datotd.length; i++) {
        if(datotd[i].innerHTML == materia){
          seguir = false;
        }
      } 
    }
    
    if(materia == ""){
      infoswal.innerHTML = "Ingresa Materia";
      setTimeout('infoswal.innerHTML = "."',3000);
    }else if(seguir == false){
      infoswal.innerHTML = materia + " ya esta agregada";
      setTimeout('infoswal.innerHTML = "."',3000);
      document.forms["fswal"].reset();
   /* }else if(long == 6){
   infoswal.innerHTML = "ya llegaste al limite de materias";
     setTimeout('infoswal.innerHTML = "."',3000); */
    }else{
      
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let dato = document.createTextNode(materia);
      td.appendChild(dato);
      tr.appendChild(td);

      let td1 = document.createElement("td");
      let val = document.createTextNode(valor);
      td1.appendChild(val);
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      let des = document.createTextNode(valor * (20/100));
      td2.appendChild(des);
      tr.appendChild(td2);

      let button = document.createElement("input");
      button.setAttribute("type", "button");
      button.setAttribute("id", "actruta");
      button.setAttribute("class", "btn-elim");
      button.setAttribute("value", "Eliminar");
      button.setAttribute("onclick", "eliFila(this)");
      let td3= document.createElement("td");
      td3.appendChild(button);
      tr.appendChild(td3);

    
      tableMate.appendChild(tr);
      document.forms["fswal"].reset();
      infoswal.innerHTML = "Materia agregada con exito";
      setTimeout('infoswal.innerHTML = "."',2000);
    }

  }

    function eliFila(x){
      let fila = $(x).closest("tr");
		  let colUno = fila.find("td:eq(0)").html();

      Swal.fire({
        title: 'Seguro desea eliminar ' + colUno + ' ?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          tbtot.style.display = "none";
          infomat.innerHTML = "";
          let i = x.parentNode.parentNode.rowIndex;
          document.getElementById("tableMate").deleteRow(i);
        }
      })
      }

  btnTotal.addEventListener('click',(e)=>{
    e.preventDefault();
    let tableMate = document.getElementById("tableMate");
    let long = tableMate.getElementsByTagName('tr').length;
    if (long==1) {
      tbtot.style.display = "none";
      infomat.innerHTML = "Agrega almenos una Materia";
      setTimeout('infomat.innerHTML = ""',3000);
    }else{
      tbtot.style.display = "block";
      let tabtot = document.getElementById("tabtot");
      let celTabTot = tabtot.getElementsByTagName('td');

      let cont = 1;
      let valor = 0;
      let datotd = tableMate.getElementsByTagName('td');
      for (let i = 0;i < datotd.length; i++) {
        if(i == cont){
          valor = valor + parseInt(datotd[i].innerHTML);
          cont = cont + 4;
        }
      }
      let desc = valor * (20/100);
      let toMa = valor - desc; 
      celTabTot[0].innerHTML = long -1 + " Materia(s)";
      celTabTot[1].innerHTML = "$ " + valor ;
      celTabTot[2].innerHTML = "$ " + desc ;
      celTabTot[3].innerHTML = "$ " + toMa ;
      celTabTot[15].innerHTML = "$ " + (toMa + 20000 + 8000) ;
      infomat.innerHTML = nombre.value + "<br>total a pagar es<br>" + "$ " + (toMa + 20000 + 8000);
    }
    });
   

    nombre.addEventListener('keydown',(e)=>{         // con esta funcion movemos el focus con tecla enter
      var codTecla = e.keyCode;
      if (codTecla === 13){
        btnaMate.focus();
      }
    });  


  function sendText(e) {
      e.preventDefault();
  }




  