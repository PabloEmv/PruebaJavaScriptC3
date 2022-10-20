
/* Caso Práctico
José es el dueño de un minimarket de barrio, lleva más de 15 años administrando el
funcionamiento completo de su negocio, siempre lo ha hecho de manera análoga, lo cual en un
inicio no presentaba problemas, pero con el pasar de los años esto ha generado errores
humanos, pérdidas de registros, documentos estropeados por la antigüedad y una nula
posibilidad de poder estudiar el real crecimiento de su negocio año tras año.


José te contrata para generar un software para su negocio.
En esta segunda instancia tu tarea será generar funciones utilizando JavaScript
Funciones solicitadas:

obs: los días se deben ingresar como tipo String y los valores de los productos a
comprar se deben trabajar con arreglos, por ejemplo = [1000,500,650,8000]
● Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.

● Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento.


● Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba.
● Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto
○ Crea una función que retorne el valor del producto más costoso.
○ Crea una función que retorne el valor del producto menos costoso.
*/
const dia1 = 'lunes';
const dia2 = 'martes';
const dia3 = 'miercoles';
const dia4 = 'jueves';
const dia5 = 'viernes';
const dia6 = 'sabado';
const dia7 = 'domingo';

var diaDeLaSemana = 'lunes';
const productosValores = [10001, 300, 500, 1000];
var valorFinal = 0;

// función para calcular el total
function calcularTotal(diaDeLaSemana, productosValores) {
    var valorTotal = 0;
    var descuentoCantidad = 0;
    for (let i = 0; i < productosValores.length; i++) {
        // el if verifica el descuento del 5%
        if (productosValores.length > 3 && productosValores[i] > 10000) {
            descuentoCantidad = 1;
        }
        valorTotal += productosValores[i];;
    }
    //realizar descuento del 5%
    if (descuentoCantidad == 1) {
        valorTotal = valorTotal * 0.95;
    }
    // función para verificar el descuento
    if (diaDeLaSemana == dia2 || diaDeLaSemana == dia4) {
        valorFinal = valorTotal * 0.8;
    } else {
        valorFinal = valorTotal;
    }
}

calcularTotal(diaDeLaSemana,productosValores);
console.log(valorFinal);

var n = 0;

function numMax(x) {
    for (let i = 0; i < x.length; i++) {

        if (x[i] > n) {
            n = x[i];
        }
    }
}
numMax(productosValores);
console.log(numMax)