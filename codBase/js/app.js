var Numero_Uno =0, Numero_Dos =0;
var Primer_Numero = True, Uso_Punto = False;
var Ultima_Operacion = "";


function Tecla_Uso(Tecla){
  alert(Tecla);
  if(Tecla=='sign'){
    Muestra_Pantalla(Signo(Primer_Numero));
  }
  if(Tecla=='on'){
    Clear();
  }
  if(Tecla=='punto'){
    if(Uso_Punto==False){
      Numeros_Operacion('.', Primer_Numero);
    }else{
      Uso_Punto = True;
    }
  }
  if(Tecla=='mas'){
    Suma(Primer_Numero);
  }
  if(Tecla=='menos'){
    Resta(Primer_Numero);
  }
  if(Tecla=='por'){
    Multiplicar(Primer_Numero);
  }
  if(Tecla=='dividido'){
    Dividir(Primer_Numero);
  }
  if(Tecla=='dividido'){
    Igual();
  }
}

function Igual(){

}

function Suma(Uno_O_Dos){
  if(Uno_O_Dos==True){
    Primer_Numero = False;
    Uso_Punto = True;
  }else{
    Numero_Uno = Numero_Uno + Numero_Dos;
    Numero_Dos = 0;
    Muestra_Pantalla("");
  }
}

function Resta(Uno_O_Dos){
  if(Uno_O_Dos==True){
    Primer_Numero = False;
    Uso_Punto = True;
  }else{
    Numero_Uno = Numero_Uno - Numero_Dos;
    Numero_Dos = 0;
    Muestra_Pantalla("");
  }
}

function Multiplicar(Uno_O_Dos){
  if(Uno_O_Dos==True){
    Primer_Numero = False;
    Uso_Punto = True;
  }else{
    Numero_Uno = Numero_Uno * Numero_Dos;
    Numero_Dos = 0;
    Muestra_Pantalla("");
  }
}

function Dividir(Uno_O_Dos){
  if(Uno_O_Dos==True){
    Primer_Numero = False;
    Uso_Punto = True;
  }else{
    if(Numero_Dos<>0){
      Numero_Uno = Numero_Uno / Numero_Dos;
      Numero_Dos = 0;
      Muestra_Pantalla("");
    }else{
      Clear();
    }
  }
}

function Clear(){
  Numero_Uno =0;
  Numero_Dos =0;
  Primer_Numero = True;
  Uso_Punto = False
  Ultima_Operacion = "";
  Muestra_Pantalla(0)
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

    Document.getElementById("0").addEventListener("onclick", Tecla_Uso(0), true)
  Document.getElementById('1').addEventListener('onclick', Tecla_Uso(1),true)
  Document.getElementById('2').addEventListener('onclick', Calculadora.Tecla_Usa(2));
  Document.getElementById('3').addEventListener('onclick', Calculadora.Tecla_Usa(3));
  Document.getElementById('4').addEventListener('onclick', Calculadora.Tecla_Usa(4));
  Document.getElementById('5').addEventListener('onclick', Calculadora.Tecla_Usa(5));
  Document.getElementById('6').addEventListener('onclick', Calculadora.Tecla_Usa(6));
  Document.getElementById('7').addEventListener('onclick', Calculadora.Tecla_Usa(7));
  Document.getElementById('8').addEventListener('onclick', Calculadora.Tecla_Usa(8));
  Document.getElementById('9').addEventListener('onclick', Calculadora.Tecla_Usa(9));
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
