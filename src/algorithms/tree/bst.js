
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this.root;
        }

        let currentNode = this.root;
        while (true) {
            if (value <= currentNode.value) {
                if (currentNode.left) currentNode = currentNode.left;
                else {
                    currentNode.left = newNode;
                    break;
                }

            }
            if (value > currentNode.value) {
                if (currentNode.right) currentNode = currentNode.right
                else {
                    currentNode.right = newNode;
                    break;
                }

            }
        }
        return this.root;
    }

    traverseList() {
        let list = [];
        let queue = [this.root];
        while (queue.length > 0) {
            let currentNode = queue.shift();
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            list.push(currentNode.value);
        }
        return list;
    }

    lookUp(value) {
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value == value) return 'Found';
            if (currentNode.value > value) {
                currentNode = currentNode.left;
            }
            currentNode = currentNode.right;
        }
        return 'NotFound';
    }

    remove(value, node) {
        let currentNode = node || this.root;
        while (currentNode) {
            if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
            if (currentNode.value === value) {
                if (!currentNode.left) {
                    currentNode = currentNode.right;
                } else if (!currentNode.right) {
                    currentNode = currentNode.left;
                }
                let minNode = this.getMinNode(currentNode.right);
                currentNode.value = minNode.value;
                this.remove(minNode.value, currentNode.right);
            }
        }
        return this.root;
    }

    getMinNode(node) {
        let currentNode = node;
        while (currentNode) {
            if (currentNode.left !== null) {
                currentNode = currentNode.left;
            }
        }

        return currentNode;
    }
}

let bst = new BinarySearchTree();

//       50
//     /   \
//   30     70
//  / \     / \
// 20  40  60  80

bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);

// console.log(bst.traverseList());
module.exports = bst;