function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    // Iterate backwards in the array
    // until you reach a value that is less than
    // the current observed value
    for (var k = i; k > 0 && arr[k] < arr[k-1]; k--) {
      var temp = arr[k-1];
      arr[k-1] = arr[k];
      arr[k] = temp;
    }
  }
  return arr;
}
