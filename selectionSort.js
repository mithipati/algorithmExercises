function selectionSort (arr) {
  var min;
  for (var i = 0; i < arr.length; i++) {
    min = i;
    for (var k = i + 1; k < arr.length; k++) {
      if (arr[k] < arr[min]) {
        min = k;
      }
    }
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
