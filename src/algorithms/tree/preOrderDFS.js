let bst = require('./bst');

function traversPreOrderRecursive(rootNode) {
    let list = [];
    list.push(rootNode.value);
    if (rootNode.left) {
        list = [...list, ...traversPreOrderRecursive(rootNode.left)];
    }
    if (rootNode.right) {
        list = [...list, ...traversPreOrderRecursive(rootNode.right)];
    }
    return list;
}

function traversPreOrder(rootNode) {
    let list = [];
    let stack = [rootNode];
    while (stack.length > 0) {
        let currentNode = stack.pop();
        if (currentNode && !currentNode.value) {
            list.push(currentNode);
            continue;
        }
        if (currentNode.right) {
            stack.push(currentNode.right);
        }
        if (currentNode.left) {
            stack.push(currentNode.left);
        }
        stack.push(currentNode.value);
    }
    return list;
}

console.log('preOrder: ', traversPreOrder(bst.root));
console.log('preOrder recursive: ', traversPreOrderRecursive(bst.root));