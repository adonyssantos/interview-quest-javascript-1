//Este es el ejemplo de un Nodo binario, es decir, que contiene dos ramas.
function Nodo(valor) {
  this.valor = valor;
  this.left;
  this.right;
}

//Nodo Raiz
let nodoRaiz = new Nodo(1);
//Rama izquierda
let leftNodo = new Nodo(2);
//Rama derecha
let rightNodo = new Nodo(3);

//Conexion del Nodo Izquierdo
nodoRaiz.left = leftNodo;
//Conexion del Nodo Derecho
nodoRaiz.right = rightNodo;

document.write(nodoRaiz.valor, "<br/>");
document.write(nodoRaiz.left.valor, "<br/>");
document.write(nodoRaiz.right.valor);
