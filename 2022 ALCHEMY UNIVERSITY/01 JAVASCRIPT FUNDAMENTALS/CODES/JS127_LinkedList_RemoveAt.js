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

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return console.log("the index is not valid.");
        } else {
            // var current, prev, pos = 0;
            var current  = this.head;
            var prev = current;
            var pos = 0;

            if (index === 0) {
                this.head = current.next;
            } else {
                while (pos < index) {
                    pos ++;
                    prev = current;
                    current = current.next;
                }

                prev.next = current.next;
            }
            this.size --;

            return current.element;
        }
    }
}

module.exports = LinkedList;