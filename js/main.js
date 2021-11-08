var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var tirada = 0;
var punto = 0;

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
  let suma= tiro1 + tiro2;
  
  tirada=tirada+1; 

  console.log("Tiro 1: "+ tiro1)
  console.log("Tiro 2: "+ tiro2)
  console.log("tirada: "+ tirada)
  console.log("punto:"+ punto)

  if((suma == 7 || suma ==11) && tirada==1){
    alert("ganaste la partida")
    tirada= 0;
    punto= 0;
  }
  else if ((suma==2 || suma==3 || suma==12) && tirada==1){
  alert(" Más suerte para la proxima, perdiste el juego ")
  tirada= 0;
  punto= 0;
  }

  else if (suma==7 && tirada != 1){
  alert(" Más suerte para la proxima, perdiste el juego ");
  tirada=0;
  punto=0;
  }

  else if (suma == 4 && tirada ==1 ){
  alert(" El punto establecido es 4 ")
  punto = 4;
  }

  else if (suma == 5 && tirada ==1 ){
  alert(" El punto establecido es 5 ")
  punto = 5;
  }

  else if (suma == 6 && tirada ==1 ){
  alert(" El punto establecido es 6 ")
  punto = 6;
  }

  else if (suma == 8 && tirada ==1 ){
  alert(" El punto establecido es 8 ")
  punto = 8;
  }

  else if (suma == 9 && tirada ==1 ){
  alert(" El punto establecido es 9 ")
  punto = 9;
  }

  else if (suma == 10 && tirada ==1 ){
  alert(" El punto establecido es 10 ")
  punto = 10;
  }

  else if (suma==punto && tirada ==1){
  alert("¡Felicitaciones! Ganaste :D");
  tirada=0;
  punto=0;
  }
}