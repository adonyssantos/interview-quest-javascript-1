let n = parseInt(prompt("Ingrese el valor de n"));
let m = parseInt(prompt("Ingrese el valor de m"));

function isMultiple(m, n) {
  let x = Math.floor(n / m);
  if (n === m * x || n <= x ** m) {
    return true;
  } else {
    return false;
  }
}

if (isMultiple(m, n)) {
  document.write("Si, ", n, " es multiplo de ", m);
  console.log("Si, ", n, " es multiplo de ", m);
} else {
  document.write("No, ", n, " no es multiplo de ", m);
  console.log("No, ", n, " no es multiplo de ", m);
}
