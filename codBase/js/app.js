var Numero_Uno =0, Numero_Dos =0;
var Primer_Numero = true;

function Tecla_Uso(Tecla){
  if(Tecla=='sign'){
    Muestra_Pantalla(Signo(Primer_Numero))
  }
}

function Signo(Uno_O_Dos){
  if(Uno_O_Dos==true){
    Numero_Uno = Numero_Uno * (-1)
    return (Numero_Uno);
  }else{
    Numero_Dos = Numero_Dos * (-1)
    return (Numero_Dos);
  }
}

function Numeros_Operacion(Numero_Digita, Uno_O_Dos){
  if(Uno_O_Dos==true){
    Numero_Uno = Numero_Uno & Numero_Digita
  }else{
    Numero_Dos = Numero_Dos & Numero_Digita
  }
}


function Muestra_Pantalla(Texto_mostrar){
  docment.getElementById('display').innerHTML = Texto_mostrar.substring(0, 8)
}

/*
window.onload = function() {
  alert("Se carga la Pagna");
  document.getElementById('0').addEventListener('click', Calculadora.Tecla_Usa(0));
  document.getElementById('1').addEventListener('click', Calculadora.Tecla_Usa(1));
  document.getElementById('2').addEventListener('click', Calculadora.Tecla_Usa(2));
  document.getElementById('3').addEventListener('click', Calculadora.Tecla_Usa(3));
  document.getElementById('4').addEventListener('click', Calculadora.Tecla_Usa(4));
  document.getElementById('5').addEventListener('click', Calculadora.Tecla_Usa(5));
  document.getElementById('6').addEventListener('click', Calculadora.Tecla_Usa(6));
  document.getElementById('7').addEventListener('click', Calculadora.Tecla_Usa(7));
  document.getElementById('8').addEventListener('click', Calculadora.Tecla_Usa(8));
  document.getElementById('9').addEventListener('click', Calculadora.Tecla_Usa(9));
/*Operaciones*/
/*
  document.getElementById('mas').addEventListener("click", Calculadora.Tecla_Usa('mas'));
  document.getElementById('menos').addEventListener("click", Calculadora.Tecla_Usa('menos'));
  document.getElementById('por').addEventListener("click", Calculadora.Tecla_Usa('por'));
  document.getElementById('dividido').addEventListener("click", Calculadora.Tecla_Usa('dividido'));
/*Funciones Especiales*/
/*
  document.getElementById('on').addEventListener("click", Calculadora.Tecla_Usa('on'));
  document.getElementById('sign').addEventListener("click", Calculadora.Tecla_Usa('sign'));
  document.getElementById('punto').addEventListener("click", Calculadora.Tecla_Usa('punto'));
  document.getElementById('igual').addEventListener("click", Calculadora.Tecla_Usa('igual'));
  alert("Se asignan los eventos Click";
}

var Calculadora{
  function Tecla_Usa(Tecla) {
    alert("La tecla que presiona es: " & Tecla);
  }
}
/*
