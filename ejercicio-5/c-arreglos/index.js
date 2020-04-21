//EJERCICIO #13 : Usando ciclos, escriba un programa que imprima por HTML los siguientes gráficos.

let a = [6, 5, 4, 3, 2, 1];
let b = [1, 3, 5, 7, 9];
let c = [1, 3, 5, 7, 9, 7, 5, 3, 1];
let valor;

function imprimirGrafico(arr) {
  for (valor of arr) {
    for (i = 0; i < valor; i++) {
      document.write("*");
    }
    document.write("</br>");
  }
}

document.write("A) </br>");
imprimirGrafico(a);
document.write("B) </br>");
imprimirGrafico(b);
document.write("C) </br>");
imprimirGrafico(c);
