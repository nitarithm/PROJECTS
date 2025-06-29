class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(node) {
        const val = this.head;
        this.head = node;
        node.next = val;
    }
}

module.exports = LinkedList;