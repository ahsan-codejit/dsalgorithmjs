
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function addTwoNumbers(l1, l2) {
    let headNode = new ListNode(0)
    let p = l1;
    let q = l2;
    let carry = 0;
    let current = headNode;
    while (p != null || q != null) {
        let x = p ? p.val : 0;
        let y = q ? q.val : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (p) p = p.next;
        if (q) q = q.next;
    }
    if (carry > 0) current.next = new ListNode(carry);

    return headNode.next;
};

function createNodeList(list) {
    let head = new ListNode(0);
    let currentNode = head;
    list.forEach(item => {
        currentNode.next = new ListNode(item);
        currentNode = currentNode.next;
    });
    return head.next;
}

function getListFromNodeList(rootNode) {
    let list = [];
    let currentNode = rootNode;
    while (currentNode) {
        list.push(currentNode.val);
        currentNode = currentNode.next;
    }
    return list;
}

module.exports = {
    addTwoNumbers,
    createNodeList,
    getListFromNodeList
}