export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  preppend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {

    let newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);

    newNode.next = leader.next;
    leader.next = newNode;

    this.length++;
  }

  remove(index) {
    let leader = this.traverseToIndex(index - 1);
    leader.next = leader.next.next;
  }

  traverseToIndex(index) {
    let i = 0;
    let currentNode = this.head;
    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }
}

export const TestLinkedList = () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.append(3);
  myLinkedList.append(4);
  myLinkedList.preppend(0);
  myLinkedList.insert(2, 2);
  myLinkedList.remove(2);
  console.log(JSON.stringify(myLinkedList, null, 2));
}
