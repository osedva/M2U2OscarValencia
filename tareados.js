let divDos = document.getElementById("tDos");
let btn = document.getElementById("submit");
let btnb = document.getElementById("borrar");
let info = document.getElementById("info");
let btntardos = document.getElementById("tardos");
let numeA = document.getElementById("numA");
let numeB = document.getElementById("numB");
let numeC = document.getElementById("numC");
let numeD = document.getElementById("numD");

divDos.style.display = "none";

btntardos.addEventListener('click',()=>{
    divDos.style.display = "block";  
    divUno.style.display = "none"; 
    document.forms["mayme"].reset();
    document.forms["mayme"].elements[0].focus();
    info.innerHTML = "";
  });

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let arr = [];
    for(let i = 0 ; i <= 3 ; i++ ){
       let num = document.forms["mayme"].elements[i].value ;
       if(num == ""){
         info.innerHTML = "Campos son obligatorios";
         document.forms["mayme"].elements[i].focus();
         return
       }
       arr.push(num)
       }
      
        let unicos = new Set(arr);
        if(unicos.size == 4){
            var max = Math.max.apply(null, arr);
            var min = Math.min.apply(null, arr);
            info.innerHTML = "de la lista de numeros " + arr.join(" - ") + "<br>el numero maximo es " + max + "<br>y el numero minimo es " + min;
            document.forms["mayme"].reset();
            document.forms["mayme"].elements[0].focus();
        }else{
            info.innerHTML = "No pueden haber numeros repetidos";
        }       
});








btnb.addEventListener('click',(e)=>{
    e.preventDefault()
    document.forms["mayme"].reset();
    document.forms["mayme"].elements[0].focus();
    info.innerHTML = "";
});


numeA.addEventListener('keydown',(e)=>{         // con esta funcion movemos el focus con tecla enter
    var codTecla = e.keyCode;
     if (codTecla === 13){
       numeB.focus();
       }
    if (codTecla === 46){
        document.forms["mayme"].reset();
        document.forms["mayme"].elements[0].focus();
        info.innerHTML = "";
    }  
     });  

numeB.addEventListener('keydown',(e)=>{         // con esta funcion movemos el focus con tecla enter
        var codTecla = e.keyCode;
         if (codTecla === 13){
           numeC.focus();
           }
        if (codTecla === 46){
            document.forms["mayme"].reset();
            document.forms["mayme"].elements[0].focus();
            info.innerHTML = "";
        }    
         });       

numeC.addEventListener('keydown',(e)=>{         // con esta funcion movemos el focus con tecla enter
    var codTecla = e.keyCode;
     if (codTecla === 13){
       numeD.focus();
       }
    if (codTecla === 46){
        document.forms["mayme"].reset();
        document.forms["mayme"].elements[0].focus();
        info.innerHTML = "";
    }    
     });           
    
numeD.addEventListener('keydown',(e)=>{         // con esta funcion movemos el focus con tecla enter
    var codTecla = e.keyCode;
    if (codTecla === 13){
      btn.focus();
    }
    if (codTecla === 46){
        document.forms["mayme"].reset();
        document.forms["mayme"].elements[0].focus();
        info.innerHTML = "";
    } 
    });  





  