function suma(){
     var a=0;
     var b=0;
     var suma=0;
     alert("Por favor ingrese el primer valor a sumar");
     a=parseInt(prompt(""));
     alert("Por favor ingrese el segundo valor a sumar")
     b=parseInt(prompt(""));
     suma=a+b;
     alert("El de su suma es"+suma);
}


function operacionesBasicas(){
     var a=0;
     var b=0;
     var resta=0;
     var dvision=0;
     var suma=0;
     var multiplicacion=0;
     a=parseInt(prompt("por favor ingrese el primer valor"));
     b=parseInt(prompt("por favor ingrese el segundo valor"));
     resta=a-b;
     dvision=a/b;
     suma=a+b;
     multiplicacion=a*b;
     alert("su resultado de multiplicacion es"+ multiplicacion);
     alert("su resultado de resta es"+ resta);
     alert("su resultado de sus suma es"+ suma);
     alert("su resultado de su division es"+ dvision);
}


function promedioNotas(){
var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var g=0;
var n="";
var suma= a+b+c+d+e+f+g/7;
var nota=0;

n=parseInt(prompt("por favor ingrese el nombre de la materia"));
a=parseInt(prompt("por favor ingrese el primer valor"));
b=parseInt(prompt("por favor ingrese el segundo valor"));
c=parseInt(prompt("por favor ingrese el tercer valor"));
d=parseInt(prompt("por favor ingrese el cuarto valor"));
e=parseInt(prompt("por favor ingrese el quinto valor"));
f=parseInt(prompt("por favor ingrese el sexto valor"));
g=parseInt(prompt("por favor ingrese el septimo valor"));

suma=a+b+c+d+e+f+g;
alert("Su resultado es" +suma/7);
if(nota >6.1)
alert("Su materia"+n+"Fue aprobada");
else(nota <6) 
alert("su materia"+n+"no fue aprobada")
}



  
function inversiondeCapital(){
     var a=0;
     var b=100;
     var c=0;
     var multiplicacion=0;
      
     a= parseInt(prompt("Por favor ingrese el porcentaje"));
     c= parseInt(prompt("por favor ingrese el su capital "))

     multiplicacion=a*b
       
     alert("Sus Ganansias mensuales son $"+multiplicacion/c)
}


function MayorQue(){
     var a=0;
     var b=0;
     a=parseInt(prompt("Por favor ingrese el primer valor"));
     b=parseInt(prompt("Por favor ingrese el sengundo valor"));
     if(a < b)
     {
         alert(a + " es menor que " + b);
     } else if (a > b)
     {
         alert(b + " es menor que " + a);
     } else
     alert(a + " es igual a " + b); 
          
     


}

function MenorQue(){
     var a=0;
     var b=0;
     var c=0;
     a=parseInt(prompt("Por favor ingrese el primer valor"));
     b=parseInt(prompt("Por favor ingrese el sengundo valor"));
     c=parseInt(prompt("Por favor ingrese el tercer valor"));
     if(a > b & a > c)
     {
         alert( " el numero mayor es" + a);
     } else if (a > b & a < c)
     {
         alert( " el numero mayor es" + c);
     } else if (a < b & a > c)
     {
         alert( " el numero mayor es" + b);
     } else
     {
         alert( " Numeros iguales" );
     } 
 }



 function Areadeuntriangulo(){
     var h=0;
     var b=0;
     var d=2;
     var multiplicacion= h*b;
     
     h=parseInt (prompt("Por favor ingrese la altura"));
     b=parseInt(prompt("por favor ingrese la base"));

     multiplicacion= h*b
     alert ("el resultado es"+multiplicacion/d)

 }



 function Añodenacimiento(){
     var a=0;
     var b=2023;
      var resta= a-b;
     a=parseInt(prompt("Por favor ingrese su edad"));


     resta= b-a;

     alert ("Su Fecha de nacimiento es"+resta);

     
 }
function circulo(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("circulo");
}
function rectangulo(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("rectangulo");
}
function rombo(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("rombo");
}
function gif(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("gif");
}
function izquierda(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("izquierda");   
}
function derecha(){
    var figura= document.getElementById("Figura");
    figura.classList.toggle("derecha");   
}

function arriba(){
    var Figura= document.getElementById("Figura");
    Figura.classList.toggle("arriba")
}

function abajo(){
    var Figura=document.getElementById("Figura")
    Figura.classList.toggle("abajo")
}

function diagonal(){
    var figura=document.getElementById("Figura")
    figura.classList.toggle("diagonal")
}