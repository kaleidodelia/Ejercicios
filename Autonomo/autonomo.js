//Creamos un reloj para ver la hora actual
function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()", 1000)
}

window.addEventListener('load', mueveReloj())

//Creamos las funciones de cronometraje

window.onload = init;
function init(){
    document.querySelector("#start").addEventListener("click", cronometrar);
    document.querySelector("#stop").addEventListener("click", parar);
    document.querySelector("#reiniciar").addEventListener("click", reiniciar);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML="00:00:00";
}         
function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
    document.querySelector("#start").removeEventListener("click", cronometrar);
}

//esta funcion decide cómo escribir las horas (24h), minutos (59min) y segundos (59seg)
function escribir(){
    var hMax, mMax, sMax;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sMax="0"+s;}else{sMax=s;}
    if (m<10){mMax="0"+m;}else{mMax=m;}
    if (h<10){hMax="0"+h;}else{hMax=h;}

    document.getElementById("hms").innerHTML = hMax + ":" + mMax + ":" + sMax; 
}

//Funcion para detener el cronometro
function parar(){
    clearInterval(id);
    document.querySelector("#start").addEventListener("click", cronometrar);

}

//funcion para resetear
function reiniciar(){
    clearInterval(id);
    document.getElementById("hms").innerHTML="00:00:00";
    h=0;m=0;s=0;
    document.querySelector("#start").addEventListener("click", cronometrar);
}