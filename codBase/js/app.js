var Calculadora = {};

Calculadora = (function ()
    {
        /*Se crean las variables que se usan a lo largo del codigo*/
        var Boton, Pantalla, Valor_Numero, Con_Punto, Numero_Uno, Numero_Dos, Operacion;

        IniciarCalculadora();

        function IniciarCalculadora()
            {
                /*Da un valor inicial a las variables*/
                Valor_Numero = 0;
                Con_Punto = 0;
                Operacion = null;
                Numero_Dos = null;
                Pantalla = document.getElementById('display');

                var Tecla_Actual = document.querySelectorAll('.tecla');

                for (var i = 0; i < Tecla_Actual.length; i++)
                    {
                        Tecla_Actual[i].style.width = "78px";
                        Tecla_Actual[i].style.border = '0 solid #999';
                        Tecla_Actual[i].onmousedown = Tecla_Uso;
                        Tecla_Actual[i].onmouseup = Fin_Tecla_Uso;
                    }
                Actualizar_Texto_En_Pantalla();
            }

        function Tecla_Uso()
            {
                Boton = this;
                /*Crea la ilusion de presionar la tecla*/
                this.style.borderWidth = this.id != 'mas' ? '3px' : '6px 3px 4px 0';
                switch (this.id)
                    {
                        /*Reinicia los valores*/
                        case "on":
                            Valor_Numero = 0;
                            Numero_Dos = null;
                            Con_Punto = 0;
                            Operacion = null;
                        break;

                        /*Cambia el signo del numero*/
                        case "sign":
                            Valor_Numero *= -1;
                        break;

                        case "punto":
                            Con_Punto = (Con_Punto == 0) ? -1 : Con_Punto;
                        break;

                        /*Hace lo mismo para cualquiera de los numero*/
                        case "0":
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                            if (Numero_Dos !== null) return;

                            var Signo_Numero = Math.sign(Valor_Numero) | 1;

                            if (Cantidad_Digitos(Valor_Numero, Con_Punto) == 8 || Con_Punto < -8) return;
                                Valor_Numero = Math.abs(Valor_Numero);
                            if (Con_Punto == 0)
                                Valor_Numero = Valor_Numero * 10 + parseInt(this.id);
                            else
                                Valor_Numero += parseInt(this.id) * Math.pow(10, Con_Punto--);
                                Valor_Numero *= Signo_Numero;
                                Numero_Dos = null;
                        break;

                        case "mas":
                        case "menos":
                        case "por":
                        case "dividido":
                            if (Valor_Numero == 0) return;
                            Numero_Uno = Valor_Numero;
                            Numero_Dos = null;
                            Valor_Numero = 0;
                            Con_Punto = 0;
                            Operacion = this.id;
                            break;

                        case "igual":
                            if (Operacion == null || Numero_Uno == null) return;

                            if (Numero_Dos == null)
                                Numero_Dos = Valor_Numero;
                            else
                                Numero_Uno = Valor_Numero;

                            /*Realiza el calculo dependiendo la opeacion a utilizar*/
                            switch (Operacion)
                                {
                                    case "mas":
                                        Valor_Numero = Numero_Uno + Numero_Dos;
                                        break;

                                    case "menos":
                                        Valor_Numero = Numero_Uno - Numero_Dos;
                                        break;

                                    case "por":
                                        Valor_Numero = Numero_Uno * Numero_Dos;
                                        break;

                                    case "dividido":
                                        Valor_Numero = Numero_Uno / Numero_Dos;
                                        break;

                                }
                            break;

                        /*No genera ninguna accion*/
                        default:
                            return; 
                    }
                Actualizar_Texto_En_Pantalla();
            }

        function Fin_Tecla_Uso()
            {
                /*Regresa el boton al tamaño inicia*/
                Boton.style.borderWidth = '0';
            }

        function Actualizar_Texto_En_Pantalla()
            {
            /*Pasa a texto el numero*/
                var Valor_En_Pantalla = Valor_Numero.toString(), pos = Valor_En_Pantalla.indexOf('.');
                if (Valor_En_Pantalla.length > 10)
                    {
                        Con_Punto = pos ? -Math.min(7, Valor_En_Pantalla.length - pos - 1) : 0;
                        Valor_Numero = Valor_Numero.toFixed(-Con_Punto);
                    }
                Valor_En_Pantalla = Valor_Numero.toString() + (Con_Punto < 0 && Valor_En_Pantalla.indexOf(".") < 0 ? "." : "");
                Valor_En_Pantalla = (Valor_En_Pantalla == "0" && Operacion != null) ? "" : Valor_En_Pantalla.substring(0, 8);
            /*Toma el texto y lo actualiza en la pantalla*/
                Pantalla.innerHTML = Valor_En_Pantalla;
                Valor_Numero = Number(Valor_En_Pantalla);
            }

        /*Valida la cantidad de digitos*/
        function Cantidad_Digitos(Num, Pot)
            {
                Num = Math.abs(Num);
                if (Num < 10) return 1;
                return Math.floor(Math.log10(Num)) + 1 - (Pot < 0 ? Pot + 1 : 0);
            }
    }());
