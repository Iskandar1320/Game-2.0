var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;

window.onload = init;

function init(){
  dado1 = document.getElementById("dado1");
  dado2 = document.getElementById("dado2");
  boton_tirar = document.getElementById("boton_tirar");
  boton_tirar.addEventListener("click",jugar);
}

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function tirardado(ref){
  var cara = Math.floor(Math.random() * 6) + 1 ;
  ref.style.backgroundPosition = posiciones[cara-1]+"px";
  return cara;
}

function jugar(){
  let tiro1 = tirardado(dado1);
  let tiro2 =tirardado(dado2);
  let suma= tiro1 + tiro2


  console.log("Tiro 1: "+ tiro1)
  console.log("Tiro 2: "+ tiro2)

  if(suma == 7 || suma ==11)
  {
    alert("ganaste la partida")
  }
}