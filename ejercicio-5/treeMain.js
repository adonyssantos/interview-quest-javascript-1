function Node() {
  this.value = val; // valor del nodo
  this.children = []; // lista de referencias a los nodos hijos
}
function Tree() {
  this.root = null; // referencia al nodo raíz
}

Tree.prototype.findBFS = function (value) {
  var queue = [this.root];
  while (queue.length) {
    var node = queue.shift();
    if (node.value === value) {
      return node;
    }
    for (var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  return null;
};

Tree.prototype.add = function (value, toNodeValue) {
  var node = new Node(value);
  var parent = toNodeValue ? this.findBFS(toNodeValue) : null;
  if (parent) {
    parent.children.push(node);
  } else if (!this.root) {
    this.root = node;
  } else {
    throw new Error("Root node is already assigned");
  }
};
