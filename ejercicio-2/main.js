let k = parseInt(prompt("Ingrese un numero"));

function isOdd(k) {
  if (k === 0) {
    return false;
  } else {
    return isEven(k - 1);
  }
}

function isEven(k) {
  if (k === 0) {
    return true;
  } else {
    return isOdd(k - 1);
  }
}

if (isEven(k)) {
  document.write(k, " es par");
  console.log(k, " es par");
} else if (isOdd(k)) {
  document.write(k, " es impar");
  console.log(k, " es impar");
}
