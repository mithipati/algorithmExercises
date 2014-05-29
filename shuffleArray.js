function shuffleArray(arr) {
  var N = arr.length;
  var r, temp;
  for (var i = 0; i < N; i++) {
    // Random index from i to end of array
    r = i + randomize(N - i);
    temp = arr[i];
    arr[i] = arr[r];
    arr[r] = temp;
  }
  return arr;
}

var randomize = function (num) {
  // Returns a random number from 0 up to, not including, num
  return Math.floor(Math.random() * num);
};
