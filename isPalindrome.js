function isPalindrome (num) {
  var subject = String(num),
      hi = subject.length - 1,
      lo = 0,
      mid = (subject.length % 2 === 0) ? (hi-lo)/2 + 1 : (hi-lo)/2;
  for (var i = 0; i < mid; i++) {
    if (subject[i] !== subject[hi - i]) {
      return false;
    }
  }
  return true;
}
