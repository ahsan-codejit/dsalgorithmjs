let bst = require('./bst');

function traversPostOrderRecursive(rootNode) {
    let list = [];

    if (rootNode.left) {
        list = [...list, ...traversPostOrderRecursive(rootNode.left)];
    }

    if (rootNode.right) {
        list = [...list, ...traversPostOrderRecursive(rootNode.right)];
    }

    list.push(rootNode.value);
    return list;
}

function traversPostOrder(rootNode) {
    let list = [];
    let stack = [rootNode];
    while (stack.length > 0) {
        let currentNode = stack.pop();
        if (currentNode && !currentNode.value) {
            list.push(currentNode);
            continue;
        }
        stack.push(currentNode.value);
        if (currentNode.right) {
            stack.push(currentNode.right);
        }
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

console.log('PostOrder: ', traversPostOrder(bst.root));
console.log('PostOrder recursive: ', traversPostOrderRecursive(bst.root));