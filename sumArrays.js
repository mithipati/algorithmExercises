// Given two arrays, returns an array containing the sum
// of each individual index value regardless of the lengths of either array
function sumArrays(arr1, arr2) {
  var result = [];
  var counter = 0;

  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  while (counter < arr1.length && counter < arr2.length) {
    result.push(arr1[counter] + arr2[counter]);
    counter++;
  }

  if (counter === arr1.length) {
    for (var i = counter; i < arr2.length; i++) {
      result.push(arr2[i]);
    }
  } else {
    for (var i = counter; i < arr1.length; i++) {
      result.push(arr1[i]);
    }
  }
  return result;
}

// Strict version: requires that both input arrays are of same size
function strictSumArrays(arr1, arr2) {
  var result = [];
  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      result.push(arr1[i] + arr2[i]);
    }
  } else {
    console.log("Sorry",arr1,"and",arr2,"are not of equal length");
  }
  return result;
}
