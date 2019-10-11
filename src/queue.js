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

  // isEmpty() {
  //   if (this.first === null) {
  //     return true;
  //   }
  //   return false;
  // }

  displayAll() {
    let curr = this.first;
    const arr = [];
    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }
    return arr;
  }

  nextFour() {
    let curr = this.first;
    const nextFour = [];
    for (let i = 0; i < 4; i++) {
      if (curr === null) break;
      nextFour.push(curr.value);
      curr = curr.next;
    }
    return nextFour;
  }

  // length() {
  //   let node = this.first;
  //   let count = 0;
  //   while (node !== null) {
  //     count++;
  //     node = node.next;
  //   }
  //   return count;
  // }

  // placeInQueue(id) {
  //   if (!this.first) {
  //     return;
  //   } else if (this.first.value.id === id) {
  //     return 1;
  //   } else {
  //     let node = this.first.next;
  //     let position = 2;
  //     while (node.value.id !== id && node.next !== null) {
  //       position++;
  //       node = node.next;
  //     }
  //     if (node.value.id === id) {
  //       return position;
  //     }
  //     return 'User not found';
  //   }
  // }
}

module.exports = Queue;
