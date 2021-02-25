let cantidad = document.getElementById("cantidad")
let resultado = document.getElementById("resultado")
let boton = document.getElementById("boton")
let de = document.getElementById("de")
let a = document.getElementById("a")
const peseta = 166.386
const dolar = 0.82
const dolarPeseta= 0.0072979145381333


 boton.addEventListener('click', ()=>{
    
//Euro a peseta
if(de.value==0&&a.value==1){
     resultado.innerHTML= `${cantidad.value*peseta} pesetas`
} 
 //Peseta a euro
else if(de.value==1&&a.value==0){
    resultado.innerHTML= `${cantidad.value/peseta} €`
}

//Dólar a euro
else if(de.value==2&&a.value==0){
    resultado.innerHTML= `${cantidad.value*dolar} €`
}

//Euro a dólar
else if(de.value==0&&a.value==2){
    resultado.innerHTML= `${cantidad.value/dolar} €`
}

//Dólar a peseta
else if(de.value==2&&a.value==1){
    resultado.innerHTML= `${cantidad.value/dolarPeseta} pesetas`
}

//Peseta a dólar
else if(de.value==1&&a.value==2){
    resultado.innerHTML= `${cantidad.value*dolarPeseta} $`
}

})
    
 
        



   
