let btn = document.getElementById("submit");
let btnb = document.getElementById("borrar");
let info = document.getElementById("info");
document.forms["mayme"].elements[0].focus();

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

    






  