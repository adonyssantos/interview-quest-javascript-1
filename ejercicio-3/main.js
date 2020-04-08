let amount = parseInt(prompt("¿Que cantidad de valores que desea ingresar?"));
let data = [];
let number = 0;

while (data.length < amount) {
  number = parseFloat(prompt("Ingrese un número"));
  data.push(number);
}

function minMax(data) {
  let i = 0;
  let dataResult = [min(data, i), max(data, i)];

  function max(data, i) {
    let maxNum = 0;
    let k = 0;

    if (i === data.length - 1) {
      maxNum = data[i];
    } else {
      k = max(data, i + 1);
      if (data[i] > k) {
        maxNum = data[i];
      } else {
        maxNum = k;
      }
    }
    return maxNum;
  }

  function min(data, i) {
    let minNum = 0;
    let k = 0;

    if (i === data.length - 1) {
      minNum = data[i];
    } else {
      k = min(data, i + 1);
      if (data[i] < k) {
        minNum = data[i];
      } else {
        minNum = k;
      }
    }
    return minNum;
  }

  return dataResult;
}

document.write(
  "Los valores ingresados son ",
  data,
  "<br/> El valor minimo es ",
  minMax(data)[0],
  "<br/> El valor maximo es ",
  minMax(data)[1]
);
