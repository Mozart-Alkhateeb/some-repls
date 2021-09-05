export class DoubleNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

export class DoubleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new DoubleNode(value);

        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
}

export const TestDoubleLinkedList = () => {
    let myLinkedList = new DoubleLinkedList(1);
    myLinkedList.append(3);
    myLinkedList.append(4);
    console.log(myLinkedList);
}