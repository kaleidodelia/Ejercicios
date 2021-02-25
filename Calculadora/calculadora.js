let operandoA;
let operandoB;
let operacion;


    //EXTRAEMOS TODAS LAS letIABLES DEL HTML
    let resultado = document.getElementById('resultado');
    let reset = document.getElementById('reset');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');
    let igual = document.getElementById('igual');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');




  //Eventos de click en NUMEROS
  uno.addEventListener("click", ()=>{
    resultado.textContent = resultado.textContent  + "1";
})

dos.addEventListener("click", ()=>{
    resultado.textContent = resultado.textContent + "2";
})

tres.addEventListener("click", ()=>{
    resultado.textContent = resultado.textContent  + "3";
})

cuatro.addEventListener("click", ()=>{
    resultado.textContent = resultado.textContent  + "4";
})

cinco.addEventListener("click", ()=>{
    resultado.textContent = resultado.textContent  + "5";
})

seis.addEventListener("click", ()=>{
    resultado.textContent = resultado.textContent  + "6";
})

siete.addEventListener("click", ()=>{
    resultado.textContent = resultado.textContent  + "7";
})

ocho.addEventListener("click", ()=>{
    resultado.textContent = resultado.textContent  + "8";
})

nueve.addEventListener("click", ()=>{
    resultado.textContent = resultado.textContent  + "9";
})

cero.addEventListener("click", ()=>{
    resultado.textContent = resultado.textContent  + "0";
})


reset.addEventListener("click", ()=>{
    resultado.innerHTML=""
})


function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.innerHTML("")
    operandoA = "";
    operandoB = "";
    operacion = "";
  }



//EVENTOS DE OPERACIONES
suma.addEventListener('click', ()=> {
    operandoA = resultado.textContent;
    operacion = "+";
    resultado.textContent = resultado.textContent + '+';
})

resta.addEventListener('click', ()=> {
    operandoA = resultado.textContent;
    resultado.textContent = resultado.textContent  + "-"
    operacion = "-";
    
})

multiplicacion.addEventListener('click', ()=> {
    operandoA = resultado.textContent;
    resultado.textContent = resultado.textContent  + "*"
    operacion = "*";
    
})

division.addEventListener('click', ()=> {
    operandoA = resultado.textContent;
    resultado.textContent = resultado.textContent  + "/"
    operacion = "/";
    
})

igual.addEventListener('click', ()=> {
    operandoA = resultado.textContent;
    operandoB = resultado.textContent;
    resultado.textContent = resultado.textContent  + "="
    resolver();
})





//FUNCION PARA RESOLVER
function resolver(){
resultado.textContent = eval(operandoB);
}