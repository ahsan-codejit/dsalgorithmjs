let bst = require('./bst');

function traversInOrderRecursive(rootNode) {
    let list = [];
    if (rootNode.left) {
        list = [...list, ...traversInOrderRecursive(rootNode.left)];
    }
    list.push(rootNode.value);
    if (rootNode.right) {
        list = [...list, ...traversInOrderRecursive(rootNode.right)];
    }
    return list;
}

function traversInOrder(rootNode) {
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
        stack.push(currentNode.value);
        if (currentNode.left) {
            stack.push(currentNode.left);
        }
    }
    return list;
}
//       50
//     /   \
//   30     70
//  / \     / \
// 20  40  60  80

console.log('InOrder: ', traversInOrder(bst.root));
console.log('InOrder recursive: ', traversInOrderRecursive(bst.root));