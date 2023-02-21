//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var texto = "SI"
while (texto.toUpperCase()=!"SALIR")
{

var precio_base = 2000

//Valores de los recargos 
const edad_18 = 0.1 // 10%
const edad_25 = 0.2 // 20%
const edad_50 = 0.3 // 30%

const casado_18 = 0.1 // 10%
const casado_25 = 0.2 // 20%
const casado_50 = 0.3 // 30%

const hijos_recargo = 0.2 // 20%


//Recargo
var recargo_edad = 0
var recargo_conyuge = 0
var recargo_hijos = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
if(edad > 17)
    {
    var casado = prompt("¿Está casado actualmente? si/no")
    console.log("casado: "+ casado)
    //Comprobamos la edad del cónyuge, solamente si se está casado/a
    var edad_conyuge
    if("SI" == casado.toUpperCase()){
       edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
        }
    //convirtiendo las edades ingresadas a números 
    var edad_numero = parseInt(edad)
    var edad_conyuge_numero = 0
    //convirtiendo la edad del conyuge si se esta casado/a
    if("SI" == casado.toUpperCase()){
        edad_conyuge_numero = parseInt(edad_conyuge)
        }       

    var hijos = prompt("¿Tiene hijos o hijas? si/no")
    //Comprobamos la cantidad de hijos solamente si los tienen
    var cantidad_hijos
    var cantidad_hijos_numero
    if("SI" == hijos.toUpperCase()){
        cantidad_hijos = prompt("¿Cuantos hijos tiene?")
        cantidad_hijos_numero = parseInt(cantidad_hijos)
        }
    /**
    * 1. convierta la cantidad de hijos a numero
    */


    console.log("edad_numero: "+ edad_numero)
    console.log("edad_conyuge_numero: "+ edad_conyuge_numero)
    console.log("hijos: "+ hijos)
    console.log("candtiad_hijos_numero: "+ cantidad_hijos_numero)


    //Aquí debe calcular el recargo total basado en las respuestas ingresadas

    //Aquí es donde debe de calcular los recargos y el valor final
    //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
    if(edad_numero>=18 && edad_numero<25){
        //Calculamos el recargo en base a la edad 
        recargo_edad = precio_base * edad_18
        //Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo_edad
    }else if(edad_numero>=25 && edad_numero<=49){
         recargo_edad = precio_base * edad_25
         recargo_total = recargo_total+recargo_edad
    }else if(edad_numero>=50){
         recargo_edad = precio_base * edad_50
          recargo_total = recargo_total + recargo_edad
        }
    console.log("el recargo por la edad seria:"+recargo_edad)
    //aqui puede colocar un else if() con el siguiente rango

    /**
    * 2. Recargo por la edad del conyuge
    */
    if (casado.toUpperCase()=="SI"){
        console.log("Calculando edad del conyuge...")
        if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
            console.log("Conyuge 18-24")
            recargo_conyuge = precio_base * edad_18
            recargo_total = recargo_total + recargo_conyuge
            console.log("el recargo por la edad de conyuge seria:"+recargo_conyuge)
            console.log("precio base:"+precio_base)
            console.log("edad 18:"+edad_18)
        }
        else if(edad_conyuge_numero>=25 && edad_conyuge_numero<=49){
            console.log("Conyuge 25-49")
            recargo_conyuge = precio_base * edad_25
            recargo_total = recargo_total+recargo_conyuge
        }
        else if(edad_conyuge_numero>=50){
            console.log("Conyuge >=50")
            recargo_conyuge = precio_base * edad_50
            recargo_total = recargo_total + recargo_conyuge
        }
    }
    console.log("el recargo por la edad de conyuge seria:"+recargo_conyuge)
    /**
    * 3. Recargo por la cantidad de hijos 
    */ 
    if(hijos.toUpperCase() == "SI"){
        if(cantidad_hijos_numero=>1){
            recargo_hijos = (precio_base * hijos_recargo)*cantidad_hijos_numero
            recargo_total = recargo_total + recargo_hijos
        }
    }
    console.log("el recargo por los hijos seria:"+recargo_hijos)    
    precio_final = precio_base + recargo_total
    //Resultado
    alert ("Para el asegurado "+nombre)
    alert ("El recargo total sera de: "+recargo_total)
    alert ("El precio sera de: "+precio_final)
}
else
{
    alert ("No aseguramos menores")
}


continuar =  prompt("Para ya no realizar mas cotizaciones escriba la palabra salir")
}