// Naive solution
function fib(n) {
  if      (n === 0) return 0;
  else if (n === 1) return 1;
  else              return fib(n - 1) + fib(n - 2);
}

// The tail recursive solution, slightly more optimized
function fibTail(n) {
  return _fibHelper(n, 1, 0);
}

function _fibHelper(n, val, prev) {
  if      (n === 0) return prev;
  else if (n === 1) return val;
  else              return _fibHelper(n - 1, val + prev, val);
}

