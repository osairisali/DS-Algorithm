const Node = require("./node");

class BST {
  constructor() {
    this.root = null;
  }

  insert = (data) => {
    const node = new Node(data, null, null);
    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        if (data < current.data) {
          // harus pake pointer tambahan berupa parent
          parent = current;

          current = current.left;
          if (current === null) {
            // current berisi null nggk bs current.left
            // jd pake pointer parent.left
            parent.left = node;
            break;
          }
        } else {
          parent = current;
          current = current.right;
          if (current === null) {
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
      console.log(node.show(), " ");
      this.inOrder(node.right);
    }
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
nums.inOrder(nums.root);
