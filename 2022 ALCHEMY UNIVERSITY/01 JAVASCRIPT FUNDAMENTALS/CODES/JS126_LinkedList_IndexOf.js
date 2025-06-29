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

    indexOf(node) {
        var count = 0;
        var current = this.head;

        // iterate over the list
        while (current != null) {
            if (current === node) {
                return count;
            }
            count ++;
            current = current.next
        }
        
        return -1;
    }
}

module.exports = LinkedList;