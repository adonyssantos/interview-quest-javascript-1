let n = 94295123905813205813295137830242.52443243243246534786243287532;

console.log(teamSinNombreRound(n));
/*if (n % 1 >= 0.5) {
  n = n + (n % 1);
} else if (n % 1 < 0.5) {
  n = n - (n % 1);
}*/
function teamSinNombreRound(n) { 
  if (n % 1 >= 0.5) {
    return n =(n + 1 - (n % 1));
  } else if (n % 1 < 0.5) {
    return n = n - (n % 1);
  }
}

