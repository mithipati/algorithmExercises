function Node (value, distance, current) {
  this.value = value;
  this.distance = distance || Infinity;
  this.current = current || false;
  this.visited = false;
  this.children = {};
}

function Graph () {
  this.unvisitedSet = [];
}

Graph.prototype.addNode = function (node) {
  this.unvisitedSet.push(node);
};

function setHead () {
  var head = new Node(0, true);
}
