function binarySearch(key, arr) {
  var lo = 0;
  var hi = arr.length - 1;
  var mid;

  while (lo <= hi) {
    mid = lo + (hi - lo)/2;
    if      (key < arr[mid]) hi = mid - 1;
    else if (arr[mid] < key) lo = mid + 1;
    else                     return mid
  }
  return -1;
}
