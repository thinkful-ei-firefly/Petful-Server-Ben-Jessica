class _Node {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      node.prev = this.last;
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  peek() {
    return this.first.value;
  }

  isEmpty() {
    if (this.first === null) {
      return true;
    }
    return false;
  }

  nextThree() {
    let curr = this.first.next;
    const nextThree = [];
    for (let i = 0; i < 3; i++) {
      if (curr === null) return;
      nextThree.push(curr.value);
      curr = curr.next;
    }
    return nextThree;
  }
}

module.exports = Queue;
