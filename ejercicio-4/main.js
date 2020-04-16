let decimal = parseInt(prompt("Ingresa un número decimal", 10));

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
  let stroage = "";
  let result;

  while (divisor > 0) {
    residuo = parseInt(divisor % 16);
    cociente = parseInt(divisor / 16);
    stroage += valors[residuo];
    divisor = cociente;
  }

  result = invert(stroage);

  return result;
}

//Una funcion original del Team Sin Nombre que redondea culquier número decimal a un entero, mucho mejor que un Math.round().😉
function teamSinNombreRound(n) {
  if (n % 1 !== 0) {
    if (n % 1 > 0.5) {
      return n + 1 - (n % 1);
    } else {
      return n - (n % 1);
    }
  } else {
    return n;
  }
}

//El ciclo devuelve los valores while ivertidos, entonces utilizamos la siguiente funcion para ordenarlos / invertirlos.
function invert(arr) {
  let stroage = arr;
  let size = stroage.length - 1;
  let newStroage = "";

  for (let i = size; i >= 0; i--) {
    newStroage += stroage[i];
  }

  return newStroage;
}

document.write(
  "<sup>",
  decimal,
  "</sup>10 ",
  "<sup> = ",
  decToHex(decimal),
  "</sup>16"
);
console.log(decToHex(decimal));
