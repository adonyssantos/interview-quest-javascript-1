let decimal = parseInt(prompt("Ingresa un número decimal"));

function decToHex(n) {
  let valors = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let divisor = n;
  let cociente = 0;
  let residuo = 0;
  let stroge = "";
  let newStroge = "";

  while (divisor > 0) {
    residuo = parseInt(divisor % 16);
    cociente = parseInt(divisor / 16);
    stroge += valors[residuo];
    divisor = cociente;
  }

  //El ciclo devuelve los valores ivertidos, entonces utilizamos el siguiente ciclo para ordenarlos.
  for (let i = stroge.length - 1; i >= 0; i--) {
    newStroge += stroge[i];
  }

  return newStroge;
}

document.write(decToHex(decimal));
console.log(decToHex(decimal));