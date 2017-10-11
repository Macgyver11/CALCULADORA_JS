var Numero_Uno =0, Numero_Dos =0;
var Primer_Numero = True, Uso_Punto = False;
var Ultima_Operacion = "";

function Tecla_Uso(Tecla){
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
    if(Ultima_Operacion == ""){
      Primer_Numero = False;
    }else{
      Suma(Primer_Numero);
    }
  }
  if(Tecla=='menos'){
    if(Ultima_Operacion == ""){
      Primer_Numero = False;
    }else{
      Resta(Primer_Numero);
    }
  }
  if(Tecla=='por'){
    if(Ultima_Operacion == ""){
      Primer_Numero = False;
    }else{
      Multiplicar(Primer_Numero);
    }
  }
  if(Tecla=='dividido'){
    if(Ultima_Operacion == ""){
      Primer_Numero = False;
    }else{
      Dividir(Primer_Numero);
    }
  }
  if(Tecla=='igual'){
    Igual(Primer_Numero);
  }
}

function Igual(Uno_O_Dos){
  if(Uno_O_Dos == False){
    if(Ultima_Operacion=='mas'){
      Suma(Primer_Numero);
    }
  if(Ultima_Operacion=='menos'){
    Resta(Primer_Numero);
   }
  if(Ultima_Operacion=='por'){
    Multiplicar(Primer_Numero);
  }
  if(Ultima_Operacion=='dividido'){
    Dividir(Primer_Numero);
    Muestra_Pantalla(Numero_Uno);
  }
}

function Suma(Uno_O_Dos){
  if(Uno_O_Dos == True){
    Uso_Punto = True;
  }else{
    Numero_Uno = Numero_Uno + Numero_Dos;
    Numero_Dos = 0;
    Ultima_Operacion = "mas";
    Muestra_Pantalla("");
  }
}

function Resta(Uno_O_Dos){
  if(Uno_O_Dos == True){
    Primer_Numero = False;
    Uso_Punto = True;
  }else{
    Numero_Uno = Numero_Uno - Numero_Dos;
    Numero_Dos = 0;
    Ultima_Operacion = "menos";
    Muestra_Pantalla("");
  }
}

function Multiplicar(Uno_O_Dos){
  if(Uno_O_Dos == True){
    Primer_Numero = False;
    Uso_Punto = True;
  }else{
    Numero_Uno = Numero_Uno * Numero_Dos;
    Numero_Dos = 0;
    Ultima_Operacion = "por";
    Muestra_Pantalla("");
  }
}

function Dividir(Uno_O_Dos){
  if(Uno_O_Dos == True){
    Primer_Numero = False;
    Uso_Punto = True;
  }else{
    if(Numero_Dos <> 0){
      Numero_Uno = Numero_Uno / Numero_Dos;
      Numero_Dos = 0;
      Ultima_Operacion = "dividido";
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

  Document.getElementById('0').addEventListener('onclick', Tecla_Uso(0));
  Document.getElementById('1').addEventListener('onclick', Tecla_Uso(1));
  Document.getElementById('2').addEventListener('onclick', Tecla_Uso(2));
  Document.getElementById('3').addEventListener('onclick', Tecla_Uso(3));
  Document.getElementById('4').addEventListener('onclick', Tecla_Uso(4));
  Document.getElementById('5').addEventListener('onclick', Tecla_Uso(5));
  Document.getElementById('6').addEventListener('onclick', Tecla_Uso(6));
  Document.getElementById('7').addEventListener('onclick', Tecla_Uso(7));
  Document.getElementById('8').addEventListener('onclick', Tecla_Uso(8));
  Document.getElementById('9').addEventListener('onclick', Tecla_Uso(9));
  
  Document.getElementById('on').addEventListener('onclick', Tecla_Uso('on'));
  Document.getElementById('sign').addEventListener('onclick', Tecla_Uso('sign'));
  Document.getElementById('raiz').addEventListener('onclick', Tecla_Uso('raiz'));
  Document.getElementById('punto').addEventListener('onclick', Tecla_Uso('punto'));
  Document.getElementById('igual').addEventListener('onclick', Tecla_Uso('igual'));
  
  Document.getElementById('por').addEventListener('onclick', Tecla_Uso('por'));
  Document.getElementById('menos').addEventListener('onclick', Tecla_Uso('menos'));
  Document.getElementById('dividido').addEventListener('onclick', Tecla_Uso('dividido'));
  Document.getElementById('mas').addEventListener('onclick', Tecla_Uso('mas'));
