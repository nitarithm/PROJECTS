class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(node) {
        const val = this.head;
        this.head = node;
        node.next = val;
    }

    addLast(node) {
        if (this.head === null) {
            this.addFirst(node);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
}

module.exports = LinkedList;