function Node(value) {
  this.value = value;
  this.children = {};
}

function Graph() {
  this.nodes = {};
}

Graph.prototype.addNode = function(value) {
  var n = new Node(value);
  this.nodes[value] = n;
};

Graph.prototype.addEdge = function(val1, val2, cost) {
  var nodeOne = this.nodes[val1];
  var nodeTwo = this.nodes[val2];
  nodeOne.children[nodeTwo] = cost;
  nodeTwo.children[nodeOne] = cost;
};

Graph.prototype.pathExists = function (val1, val2) {
  // Reset reachableNodes array each time the
  // pathExists method is invoked
  var reachableNodes = [];
  var nodeOne = this.nodes[val1];
  var nodeTwo = this.nodes[val2];
  var reachable = _findReachableNodes(nodeOne, reachableNodes);
  if (reachable.indexOf(nodeTwo) !== -1) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype._findReachableNodes = function (mainNode, reachableNodes) {
  reachableNodes.push(mainNode);
  for (var child in mainNode.children) {
    // Only iterate over own properties of the children object,
    // not inherited properties
    if (mainNode.children.hasOwnProperty(child)) {
      if (reachableNodes.indexOf(child) === -1) {
        _findReachableNodes(child, reachableNodes);
      }
    }
  }
  return reachableNodes;
};
