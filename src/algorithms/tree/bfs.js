let bst = require('./bst');

function bFSTraverse(queue) {
    if (!Array.isArray(queue) || queue.length <= 0) return queue;
    let list = [];
    while (queue.length > 0) {
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return list;
}

function bFSTraverseRecursive(queue) {
    let currentNode = queue.shift();
    let list = [];
    list.push(currentNode.value);
    if (currentNode.left) {
        queue.push(currentNode.left);
    }
    if (currentNode.right) {
        queue.push(currentNode.right);
    }
    if (queue.length > 0) list.push(...bFSTraverseRecursive(queue));
    return list;
}
function breadthFirstSearch(root, value) {
    let queue = [root];
    while (queue.length > 0) {
        let currentNode = queue.shift();
        if (currentNode.value === value) {
            return currentNode;
        }
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    }
    return false;
}
function breadthFirstSearchR(currentNode, value) {
    if (currentNode.value == value) {
        return currentNode;
    }
    if (currentNode.left) {
        return breadthFirstSearchR(currentNode.left, value);
    }
    if (currentNode.right) {
        return breadthFirstSearchR(currentNode.right, value);
    }
    return false;
}

console.log(bFSTraverse([bst.root]));
console.log('Recursive: ', bFSTraverseRecursive([bst.root]));
console.log('R search for 20', breadthFirstSearchR(bst.root, 20));
console.log('R search for 10', breadthFirstSearchR(bst.root, 10));
console.log('R search for 100', breadthFirstSearchR(bst.root, 100));
console.log('search for 60', breadthFirstSearch(bst.root, 60));