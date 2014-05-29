function reverseArray(arr) {
  var N = arr.length;
  var temp;
  for (var i = 0; i < N/2; i++) {
    temp = arr[i];
    arr[i] = arr[N-1-i];
    arr[N-1-i] = temp;
  }
}
