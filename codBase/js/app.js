var Calculadora ={
/*Variables*/

  inicio(
  function(){
      this.EventosClick();
    }
  ),
  EventosClick: function(){
  /*Numeros*/
    document.getElementById('0').addEventListener('click',function(){Calculadora.Tecla_Usa(0)});
    document.getElementById('1').addEventListener('click',function(){Calculadora.Tecla_Usa(1)});
    document.getElementById('2').addEventListener('click',function(){Calculadora.Tecla_Usa(2)});
    document.getElementById('3').addEventListener('click',function(){Calculadora.Tecla_Usa(3)});
    document.getElementById('4').addEventListener('click',function(){Calculadora.Tecla_Usa(4)});
    document.getElementById('5').addEventListener('click',function(){Calculadora.Tecla_Usa(5)});
    document.getElementById('6').addEventListener('click',function(){Calculadora.Tecla_Usa(6)});
    document.getElementById('7').addEventListener('click',function(){Calculadora.Tecla_Usa(7)});
    document.getElementById('8').addEventListener('click',function(){Calculadora.Tecla_Usa(8)});
    document.getElementById('9').addEventListener('click',function(){Calculadora.Tecla_Usa(9)});
  /*Operaciones*/
    document.getElementById('mas').addEventListener("click",function(){Calculadora.Tecla_Usa('mas')});
    document.getElementById('menos').addEventListener("click",function(){Calculadora.Tecla_Usa('menos')});
    document.getElementById('por').addEventListener("click",function(){Calculadora.Tecla_Usa('por')});
    document.getElementById('dividido').addEventListener("click",function(){Calculadora.Tecla_Usa('dividido')});
  /*Funciones Especiales*/
    document.getElementById('on').addEventListener("click",function(){Calculadora.Tecla_Usa('on')});
    document.getElementById('sign').addEventListener("click",function(){Calculadora.Tecla_Usa('sign')});
    document.getElementById('punto').addEventListener("click",function(){Calculadora.Tecla_Usa('punto')});
    document.getElementById('igual').addEventListener("click",function(){Calculadora.Tecla_Usa('igual')});
  },
  Tecla_Usa: function(Tecla){
    alet(Tecla);
  }
}

Calculadora.inicio();
