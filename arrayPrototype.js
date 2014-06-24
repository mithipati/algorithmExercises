Array.prototype.mapMe = function (func) {
  var arr = this, result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
};

Array.prototype.pushMe = function (num) {
  this[this.length] = num;
  return this;
};

Array.prototype.popMe = function () {
  var popped = this[this.length-1];
  this.splice(-1, 1);
  return popped;
}

Array.prototype.shiftMe = function () {
  var shifted = this[0];
  for (var i = 1; i < this.length; i++) {
    this[i-1] = this[i];
  }
  this.splice(-1,1);
  return shifted;
}

Array.prototype.unshiftMe = function (num) {
  this[this.length] = this[this.length-1];
  for (var i = this.length-1; i >= 1; i--) {
    this[i] = this[i-1];
  }
  this[0] = num;
  return this.length;
}

Array.prototype.each = function (func) {
  var arr = this;
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

Array.prototype.sliceMe = function (begin, end) {
  if (arguments.length < 1) {
    begin = 0;
    end = this.length;
  } else if (arguments.length < 2) {
    end = this.length;
  }

  // Write out corner cases for begin and end surpassing array limits
  // Write out loop and return statements
}





