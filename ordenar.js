const arr = [2, 3, 4, 6, 4, -1];

// for (let i = 0; i < arr.length; i++) {

// }

var iteracion = 0
var permutacion = true
var actual
while (permutacion) {
  permutacion = false
  iteracion++
  for (actual = 0; actual < 20 - iteracion; actual++) {
    if (arr[actual] > arr[actual - 1]) {
      permutacion = true
      var temp = arr[actual]
      arr[actual] = arr[actual + 1]
      arr[actual + 1] = temp
    }
}
console.log(arr)
}
