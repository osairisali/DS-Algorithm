const Node = require("./node");

class BST {
  constructor() {
    this.root = null;
  }

  insert = (data) => {
    const node = new Node(data, null, null);
    const existingNode = this.find(data);
    if (this.root === null) {
      this.root = node;
    } else if (existingNode) {
      this.update(data);
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          // harus pake pointer tambahan berupa parent
          current = current.left;

          if (!current) {
            // current berisi null nggk bs current.left
            // jd pake pointer parent.left
            parent.left = node;
            break;
          }
        } else {
          current = current.right;

          if (!current) {
            parent.right = node;
            break;
          }
        }
      }
    }
  };

  inOrder = (node) => {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  };

  getMin = () => {
    let current = this.root;
    while (current.left) {
      current = current.left;
      // console.log(current);
    }
    // console.log("current.getMin(): ", current);
    return current.data;
  };

  getMax = () => {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    // console.log("current.getMax(): ", current);
    return current.data;
  };

  getSmallest = (node) => {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  };

  remove = (data) => {
    // remove dari basis root
    this.root = this.removeNode(this.root, data);
  };

  removeNode = (baseNode, data) => {
    if (!baseNode) {
      return null;
    }
    if (data === baseNode.data) {
      if (!baseNode.left) {
        return baseNode.right;
      }
      if (!baseNode.right) {
        return baseNode.left;
      }
      // if (!baseNode.right && !baseNode.left) {
      //   return null;
      // }

      // if node has two children
      const tempNode = this.getSmallest(baseNode.right);
      baseNode.data = tempNode.data;
      // recursive
      baseNode.right = this.removeNode(baseNode.right, tempNode.data);
      return baseNode;
    } else if (data < baseNode.data) {
      // recursive
      baseNode.left = this.removeNode(baseNode.left, data);
      return baseNode;
    } else {
      // recursive
      baseNode.right = this.removeNode(baseNode.right, data);
      return baseNode;
    }
  };

  update = (data) => {
    const gradeNode = this.find(data);
    gradeNode.count++;
    return gradeNode;
  };

  find = (data) => {
    let current = this.root;
    while (true) {
      if (!current) {
        return null;
      }
      if (data < current.data) {
        current = current.left;
        if (!current) {
          return null;
        }
      }

      if (data > current.data) {
        current = current.right;
        if (!current) {
          return null;
        }
      }

      // if data === current.data
      if (data === current.data) {
        return current;
      }
    }
  };

  countNode = (node) => {
    let counter = 1;
    if (!node) {
      return 0;
    }
    counter += this.countNode(node.left);
    counter += this.countNode(node.right);
    return counter;
  };
}

const nums = new BST();

nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.insert(0);
nums.insert(22);
nums.insert(55);
nums.insert(57);
nums.insert(21);
nums.inOrder(nums.root);

console.log("min node value: ", nums.getMin());
console.log("max node value: ", nums.getMax());

// nums.remove(45);
// console.log("after removing node 45: ");
// nums.inOrder(nums.root);

// nums.remove(23);
// console.log("after removing node 23: ");
// nums.inOrder(nums.root);

// nums.remove(22);
// console.log("after removing node 22: ");
nums.inOrder(nums.root);

// console.log(nums.find(22));

console.log("number of nodes: ", nums.countNode(nums.root));
