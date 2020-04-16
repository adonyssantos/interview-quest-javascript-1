let decimal = parseInt(prompt("Ingresa un número decimal", 10));

//Una funcion original del Team Sin Nombre que redondea culquier número decimal a un entero, mucho mejor que un Math.round.😉
function teamSinNombreRound(n) {
  let nRound = 0;
  if (n % 1 >= 0.5 && n % 1 < 1) {
    nRound = n + 1 - (n % 1);
  } else if (n % 1 > 0 && n % 1 < 0.5) {
    nRound = n - (n % 1);
  } else {
    nRound = n;
  }
  return nRound;
}

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
    residuo = divisor % 16;
    residuo = parseInt(residuo);
    cociente = divisor / 16;
    cociente = parseInt(cociente);
    stroge += valors[residuo];
    divisor = cociente;
  }

  //El ciclo devuelve los valores while ivertidos, entonces utilizamos la siguiente funcion para ordenarlos.
  let size = stroge.length - 1;
  for (let i = size; i  >= 0; i--) {
    newStroge += stroge[i];
  }

  return newStroge;
}

document.write(decToHex(decimal));
console.log(decToHex(decimal));
