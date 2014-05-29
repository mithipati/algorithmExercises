var dfs = function (value) {
  if (this.value === value) {
    return this;
  }
  else {
    this.children.forEach(function (child) {
      var newNode = child.dfs(value);
      if (newNode) {
        return newNode;
      }
    });
  }
  return null;
};

var bfs = function (value) {
  var queue = [];
  return _bfsHelper.call(this, value, queue);
}

var _bfsHelper = function (value, queue) {
  if (this.value === value) {
    return this;
  } else {
    this.children.forEach(function (child) {
      queue.push(child);
    });
    if (queue.length !== 0) {
      var newNode = queue.shift();
      newNode._bfsHelper(value, queue);
    } else {
      return null;
    }
  }
};

function Node(value) {
  this.value = value;
  this.children = [];
}

Node.prototype.addChild = function (value) {
  var n = new Node(value);
  this.children.push(n);
  return n;
};
