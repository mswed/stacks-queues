/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    // The end of the stack is actually the first node, since this is a linkedList
    if (this.isEmpty()) {
      this.first = new Node(val);
      this.last = this.first
    } else {
      const newFirst = new Node(val);
      newFirst.next = this.first;
      this.first = newFirst;
    }
    this.size ++;

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.isEmpty()) {
      throw new Error('The stack is empty!')
    } else {
      const originalFirst = this.first;
      this.first = originalFirst.next;
      originalFirst.next = null;
      this.size--;

      return originalFirst.val;

    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;

  }
}

module.exports = Stack;
